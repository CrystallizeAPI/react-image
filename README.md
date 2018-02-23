# Crystallize image

A React package to output an img tag with different source variations from Crystallize

## How to use

```
import CrystallizeImage from '@crystallize/image';
```

```
<CrystallizeImage
    media={image}
    alt={image.alt}
/>
```

## Options

### media[mediaObject]: required\*

### src[string]: required\*

### srcVariations[array[string]]: required\*

### alt: required

\* Either media, src, srcVariations must be provided

## mediaObject

Example:

```
{
    url: '/myimage.jpg',
    product_image_variations: ['/myimage_300.jpg', '/myimage_1024.jpg']
}
```
