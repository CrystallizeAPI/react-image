import React from "react";
import PropTypes from "prop-types";

const getVariantSrc = (variant) => `${variant.url} ${variant.width}w`;

const ReactImage = ({ children: childRenderFunc, ...restOfAllProps }) => {
  // Regular image
  if (restOfAllProps.src) {
    if (childRenderFunc) {
      return childRenderFunc(restOfAllProps);
    }

    return <img {...restOfAllProps} />;
  }

  // Continue using data from Crystallize
  const {
    url,
    sizes,
    variants,
    altText,
    alt: altPassed,
    className,
    ...rest
  } = restOfAllProps;

  const vars = variants || [];
  const alt = typeof altPassed === "string" ? altPassed : altText;

  const hasVariants = vars.length > 0;

  // Get the biggest image from the variants
  let biggestImage = {};
  if (hasVariants) {
    console.log(
      { vars },
      vars.sort((a, b) => b.width - a.width)
    );
    // biggestImage = vars.sort((a, b) => b.width - a.width)[0];
  }

  // Determine srcSet
  const std = vars.filter((v) => v.url && !v.url.endsWith(".webp"));
  const webp = vars.filter((v) => v.url && v.url.endsWith(".webp"));
  const srcSet = std.map(getVariantSrc).join(", ");
  const srcSetWebp = webp.map(getVariantSrc).join(", ");

  // Determine the original file extension
  let originalFileExtension = "jpeg";
  if (std.length > 0) {
    ({
      groups: { name: originalFileExtension },
    } = std[0].url.match(/\.(?<name>[^\.]+)$/));

    // Provide correct mime type for jpg
    if (originalFileExtension === "jpg") {
      originalFileExtension = "jpeg";
    }
  }

  // Ensure fallback src for older browsers
  const src = url || (hasVariants ? std[0].url : undefined);

  if (childRenderFunc) {
    return childRenderFunc({
      src,
      srcSet,
      srcSetWebp,
      sizes,
      className,
      ...rest,
      alt,
      originalFileExtension,
    });
  }

  return (
    <picture className={className}>
      {srcSetWebp.length > 0 && (
        <source srcSet={srcSetWebp} type="image/webp" sizes={sizes} />
      )}
      {srcSet.length > 0 && (
        <source
          srcSet={srcSet}
          type={`image/${originalFileExtension}`}
          sizes={sizes}
        />
      )}

      <img
        src={src}
        sizes={sizes}
        width={biggestImage.width}
        height={biggestImage.height}
        {...rest}
        alt={alt}
      />
    </picture>
  );
};

ReactImage.propTypes = {
  children: PropTypes.func,
  src: PropTypes.string,
  url: PropTypes.string,
  sizes: PropTypes.string,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
};

export default ReactImage;
