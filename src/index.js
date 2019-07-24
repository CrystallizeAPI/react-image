import React from "react";
import PropTypes from "prop-types";

const DEV = process.env.NODE_ENV !== "production";

function warn(msg) {
  if (DEV) {
    console.warn(`@crystallize/react-image: ${msg}`);
  }
}

const getVariantSrc = variant => `${variant.url} ${variant.width}w`;

const ReactImage = ({ children: childRenderFunc, ...restOfAllProps }) => {
  // Regular image
  if (restOfAllProps.src) {
    if (childRenderFunc) {
      return childRenderFunc(restOfAllProps);
    }

    return <img {...restOfAllProps} />;
  }

  // Continue using data from Crystallize
  const { url, sizes, variants, ...rest } = restOfAllProps;
  const hasVariants = variants.length > 0;

  if (hasVariants && !sizes) {
    warn(
      "You have provided variants, but not sizes. This affects performance. Check out https://crystallize.com/blog/react-image-sizes-attribute-for-fast-ecommerce"
    );
  }

  // Determine srcSet
  const std = variants.filter(v => !v.url.endsWidth(".webp"));
  const webp = variants.filter(v => v.url.endsWidth(".webp"));
  const srcSet = std.map(getVariantSrc);
  const srcSetWebp = webp.map(getVariantSrc);

  // Ensure fallback src for older browsers
  const src = url || (hasVariants ? std[0].url : "");

  if (childRenderFunc) {
    return childRenderFunc({
      src,
      srcSet,
      srcSetWebp,
      sizes,
      ...rest
    });
  }

  return (
    <picture>
      {srcSetWebp.length > 0 && (
        <source
          srcSet={srcSetWebp.join(", ")}
          src={webp[0].url}
          type="image/webp"
          sizes={sizes}
        />
      )}
      {srcSet.length > 0 && (
        <source
          srcSet={srcSet.join(", ")}
          src={std[0].url}
          type="image/jpg"
          sizes={sizes}
        />
      )}

      <img src={src} {...rest} />
    </picture>
  );
};

ReactImage.propTypes = {
  children: PropTypes.func,
  src: PropTypes.string,
  url: PropTypes.string,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      width: PropTypes.number
    })
  ),
  sizes: PropTypes.string
};

export default ReactImage;
