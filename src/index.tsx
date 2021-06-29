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
  // The `html` content has higher priority than `plainText` because it has richer content.
  // In case of getting both, the `html` is the one that will be displayed.
  caption?: RichTextContent;
  variants?: CrystallizeImageVariant[];
  loading?: 'eager' | 'lazy';
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
    ...rest
  } = restOfAllProps;

  const vars = (variants || []).filter((v) => !!v);
  const alt = typeof altPassed === 'string' ? altPassed : altText;

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
    let originalFileExtension = match?.groups?.name;

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

  // If image size is given, let's pick the smallest version
  if (useWebP && useAvif) {
    const [firstWebp] = webp;
    const [firstAvif] = avif;
    if (firstWebp.size && firstAvif.size) {
      useWebP = firstWebp.size < firstAvif.size;
      useAvif = !useWebP;
    }
  }

  if (children) {
    return children({
      srcSet,
      srcSetWebp,
      srcSetAvif,
      className,
      sizes,
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
          <source srcSet={srcSetAvif} type="image/avif" sizes={sizes} />
        )}
        {useWebP && (
          <source srcSet={srcSetWebp} type="image/webp" sizes={sizes} />
        )}
        {srcSet.length > 0 && (
          <source
            srcSet={srcSet}
            type={`image/${originalFileExtension}`}
            sizes={sizes}
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
