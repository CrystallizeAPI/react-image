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
      const widthMatch = variation.match(/_(\d+)\.(jpg|jpeg|gif|png|webp)$/);
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
    const { alt, media, src, srcVariations, ...rest } = this.props;

    let srcToUse = media && media.url ? media.url : src;
    let srcVariationsToUse =
      media && media.product_image_variations
        ? media.product_image_variations
        : srcVariations;

    const srcSet = this.createSrcSet(srcVariationsToUse);
    srcToUse = srcToUse || this.getDefaultSrc(srcVariationsToUse);

    return <img src={srcToUse} srcSet={srcSet} alt={alt} {...rest} />;
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
