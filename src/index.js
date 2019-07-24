import React from "react";
import PropTypes from "prop-types";
import ImageZoom from "react-medium-image-zoom";

// The default image variations created by Crystallize
const imageVariations = "320 414 768 1280 1536 1920 2560 3200".split(" ");

export function generateImageVariationsFromSrc(src) {
  if (typeof src !== "string") {
    throw new Error("@crystallize/react-image: src is not a string");
  }

  const match = src.match(/(.+)\.(jpg|jpeg|png|webp)$/);
  if (!match) {
    return [];
  }

  const [, name, extension] = match;
  return imageVariations.map(i => `${name}/_resized_${i}.${extension}`);
}

class CrystallizeImage extends React.Component {
  createSrcSet(srcVariations) {
    if (!srcVariations || !srcVariations.length) {
      return;
    }

    let maxWidth = parseInt(this.props.width || -1, 10);
    const sets = [];
    srcVariations.forEach(variation => {
      const widthMatch = variation.match(/_(\d+)\.(jpg|jpeg|png|webp)$/);
      if (widthMatch) {
        const width = widthMatch[1];
        if (maxWidth === -1 || width <= maxWidth) {
          sets.push(`${variation} ${width}w`);
        }
      }
    });

    if (sets.length) {
      return sets.join(", ");
    }
  }

  getDefaultSrc(srcVariations) {
    if (!srcVariations || !srcVariations.length) {
      return;
    }
    return srcVariations[0];
  }

  getSrcSet(srcVariations, type) {
    return srcVariations
      .map(variant => {
        const format = variant.url.split(".").slice(-1)[0];
        if (format === type) return `${variant.url} ${variant.width}w`;
      })
      .join(",");
  }

  handleCrystallizeImage(crystallizeImgObj, rest) {
    if (crystallizeImgObj && crystallizeImgObj.variants) {
      const webpSrcSet = this.getSrcSet(crystallizeImgObj.variants, "webp");
      const jpgSrcSet = this.getSrcSet(crystallizeImgObj.variants, "jpg");
      return (
        <>
          <picture>
            <source
              srcSet={webpSrcSet}
              src={crystallizeImgObj.url}
              type="image/webp"
              sizes={
                rest.sizes ? rest.sizes : "(max-width: 700px) 500px, 800px"
              }
            />
            <source
              srcSet={jpgSrcSet}
              src={crystallizeImgObj.url}
              type="image/jpg"
              sizes={
                rest.sizes ? rest.sizes : "(max-width: 700px) 500px, 800px"
              }
            />
            {rest.withZoom && rest.withZoom === true ? (
              <ImageZoom
                image={{
                  src: crystallizeImgObj.url,
                  alt: crystallizeImgObj.altText
                }}
              />
            ) : (
              <img
                src={crystallizeImgObj.url}
                alt={crystallizeImgObj.altText}
              />
            )}
          </picture>
        </>
      );
    } else {
      return <img src={crystallizeImgObj.url} {...rest} />;
    }
  }

  render() {
    const {
      media,
      src,
      srcVariations,
      product_image,
      imageZoom,
      crystallizeImgObj,
      ...rest
    } = this.props;
    let srcToUse = src;

    if (crystallizeImgObj && crystallizeImgObj.url && rest) {
      return this.handleCrystallizeImage(crystallizeImgObj, rest);
    }

    if (media && media.url) {
      srcToUse = media.url;
    } else if (product_image) {
      srcToUse = product_image;
    }

    // Gifs are not supported atm.
    if (srcToUse && srcToUse.includes(".gif")) {
      return <img src={srcToUse} {...rest} />;
    }

    let srcVariationsToUse =
      media && media.product_image_variations
        ? media.product_image_variations
        : srcVariations;

    if (
      !srcVariationsToUse &&
      srcToUse &&
      srcToUse.startsWith("https://accelerated.atoms.crystallize.digital")
    ) {
      srcVariationsToUse = generateImageVariationsFromSrc(srcToUse);
    }

    const srcSet = this.createSrcSet(srcVariationsToUse);

    if (!srcSet) {
      return <img src={srcToUse} {...rest} />;
    }

    srcToUse = srcToUse || this.getDefaultSrc(srcVariationsToUse);
    return <img src={srcToUse} srcSet={srcSet} {...rest} />;
  }
}

CrystallizeImage.propTypes = {
  src: PropTypes.string,
  srcVariations: PropTypes.arrayOf(PropTypes.string),
  media: PropTypes.shape({
    url: PropTypes.string,
    product_image_variations: PropTypes.arrayOf(PropTypes.string)
  }),
  alt: PropTypes.string.isRequired
};

export default CrystallizeImage;
