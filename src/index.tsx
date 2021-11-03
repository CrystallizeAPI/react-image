import React, { FC, HTMLAttributes, FunctionComponent } from 'react';

export interface CrystallizeImageVariant {
  url: string;
  width: number;
  height?: number;
  size?: number;
}

interface RichTextContent {
  html?: Array<string>;
  json?: Array<any>;
  plainText?: Array<string>;
}

export interface Props extends HTMLAttributes<HTMLImageElement> {
  children?: FunctionComponent<any>;
  src?: string;
  url?: string;
  sizes?: string;
  altText?: string;
  alt?: string;
  media?: string;
  // The `html` content has higher priority than `plainText` because it has richer content.
  // In case of getting both, the `html` is the one that will be displayed.
  caption?: RichTextContent;
  variants?: CrystallizeImageVariant[];
  loading?: 'eager' | 'lazy';
  _availableSizes?: number[];
  _availableFormats?: string[];
}

function getVariantSrc(variant: CrystallizeImageVariant): string {
  return `${variant.url} ${variant.width}w`;
}

export const Image: FC<Props> = ({ children, ...restOfAllProps }) => {
  const {
    src,
    url,
    sizes,
    variants,
    altText,
    alt: altPassed,
    caption,
    className,
    media,
    _availableSizes,
    _availableFormats,
    ...rest
  } = restOfAllProps;

  let vars = (variants || []).filter((v) => !!v);
  const alt = typeof altPassed === 'string' ? altPassed : altText;

  // Naive rendering POC
  if (url && _availableSizes && _availableFormats) {
    vars = [];
    const urlWithoutFileExtension = url.replace(/\.[^/]+$/, '');
    const match = urlWithoutFileExtension.match(/(.+)(\/)([^/]+)$/);
    if (match) {
      const [, base, , filename] = match;

      _availableSizes.forEach((size) => {
        _availableFormats.forEach((format) => {
          vars.push({
            url: `${base}/@${size}/${filename}.${format}`,
            width: size,
          });
        });
      });
    }
  }

  const hasVariants = vars.length > 0;

  // Get the biggest image from the variants
  let biggestImage: CrystallizeImageVariant = vars[0];
  if (hasVariants) {
    biggestImage = vars.reduce(function (
      acc: CrystallizeImageVariant,
      v: CrystallizeImageVariant
    ): CrystallizeImageVariant {
      if (!acc.width || v.width > acc.width) {
        return v;
      }
      return acc;
    },
    vars[0]);
  }

  // Determine srcSet
  const std = vars.filter(
    (v) => v.url && !v.url.endsWith('.webp') && !v.url.endsWith('.avif')
  );
  const webp = vars.filter((v) => v.url && v.url.endsWith('.webp'));
  const avif = vars.filter((v) => v.url && v.url.endsWith('.avif'));
  const srcSet = std.map(getVariantSrc).join(', ');
  const srcSetWebp = webp.map(getVariantSrc).join(', ');
  const srcSetAvif = avif.map(getVariantSrc).join(', ');

  // Determine the original file extension
  let originalFileExtension = 'jpeg';
  if (std.length > 0) {
    const match = std[0].url.match(/\.(?<name>[^.]+)$/);
    originalFileExtension = match?.groups?.name || 'jpeg';

    // Provide correct mime type for jpg
    if (originalFileExtension === 'jpg') {
      originalFileExtension = 'jpeg';
    }
  }

  const commonProps = {
    // Ensure fallback src for older browsers
    src: src || url || (hasVariants ? std[0].url : undefined),
    alt,
    caption,
    width: biggestImage?.width,
    height: biggestImage?.height,
  };

  let useWebP = srcSetWebp.length > 0;
  let useAvif = srcSetAvif.length > 0;

  /**
   * Only output Avif format if it is smaller than
   * webP. For the future: show only one of them when
   * the browser support for Avif is good enough
   */
  if (useWebP && useAvif) {
    const [firstWebp] = webp;
    const [firstAvif] = avif;
    if (firstWebp.size && firstAvif.size) {
      useAvif = firstWebp.size > firstAvif.size;
    }
  }

  if (children) {
    return children({
      srcSet,
      srcSetWebp,
      srcSetAvif,
      useAvif,
      useWebP,
      className,
      sizes,
      media,
      ...commonProps,
      ...rest,
      originalFileExtension,
    });
  }

  const captionString = caption?.html?.[0] || caption?.plainText?.[0] || '';

  return (
    <figure className={className}>
      <picture>
        {useAvif && (
          <source
            srcSet={srcSetAvif}
            type="image/avif"
            sizes={sizes}
            media={media}
          />
        )}
        {useWebP && (
          <source
            srcSet={srcSetWebp}
            type="image/webp"
            sizes={sizes}
            media={media}
          />
        )}
        {srcSet.length > 0 && (
          <source
            srcSet={srcSet}
            type={`image/${originalFileExtension}`}
            sizes={sizes}
            media={media}
          />
        )}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...commonProps} {...rest} />
      </picture>
      {captionString && (
        <figcaption dangerouslySetInnerHTML={{ __html: captionString }} />
      )}
    </figure>
  );
};
