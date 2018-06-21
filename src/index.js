import React from "react";
import PropTypes from "prop-types";

// The default image variations created by Crystallize
const imageVariations = "300 320 414 768 828 1280 1366 1440 1536 1920 2560 3200".split(
  " "
);

export function generateImageVariationsFromSrc(src) {
  if (typeof src !== "string") {
    throw new Error("@crystallize/react-image: src is not a string");
  }

  const [, name, extension] = src.match(/(.+)\.(jpg|jpeg|png|webp)$/);
  if (!name || !extension) {
    return [];
  }

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

  render() {
    const { media, src, srcVariations, product_image, ...rest } = this.props;
    let srcToUse = src;

    if (media && media.url) {
      srcToUse = media.url;
    } else if (product_image) {
      srcToUse = product_image;
    }

    // Gifs are not supported atm.
    if (srcToUse.includes(".gif")) {
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
