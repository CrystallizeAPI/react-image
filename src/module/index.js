import React from "react";
import PropTypes from "prop-types";

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
