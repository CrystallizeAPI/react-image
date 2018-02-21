# Crystallize image

A React package to output an img tag with different source variations from Crystallize

## How to use

```
import CrystallizeImage from '@crystallize/image';
```

```
<CrystallizeImage
    src={image.url}
    srcVariations={image.product_image_variations}
    alt={image.alt}
/>
```

## Options

### src[string]: required\*

### srcVariations[array[string]]: required\*

### alt: required

\* Either src or srcVariations must be provided
