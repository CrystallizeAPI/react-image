![alt text](https://raw.githubusercontent.com/snowballdigital/react-image/HEAD/media/logo.png "An illustration of an atom")

# React Srcset Images for Crystallize

A React package to output an img tag with different source variations from Crystallize using srcset. Use this to easily build responsive images powered by the [Crystallize headless commerce service](https://crystallize.com/).

[React Image Srcset resource home](https://crystallize.com/developers/react-components/react-image-srcset).

## How to use

```
yarn add @crystallize/react-image
```

## How to use

```
import Image from '@crystallize/react-image';

const imageFromCrystallize = {
    url: '...',
    variants: [...],
    altText: ''
}

<Image
    {...imageFromCrystallize}
    sizes="(max-width: 700px) 90vw, 700px"
/>
```

## Render child function

```
const imageFromCrystallize = {
    url: '...',
    variants: [...],
    altText: ''
}

<Image
    {...imageFromCrystallize}
    sizes="(max-width: 700px) 90vw, 700px"
>
  {({ src, srcSet, srcSetWebp, sizes, ...rest }) => {
      // Roll your own render
      return (
          <picture>
            {srcSetWebp.length > 0 && (
                <source
                srcSet={srcSetWebp.join(", ")}
                src={webp[0].url}
                type="image/webp"
                />
            )}
            {srcSet.length > 0 && (
                <source
                srcSet={srcSet.join(", ")}
                src={std[0].url}
                type="image/jpeg"
                />
            )}

            <img src={src} sizes={sizes} {...rest} />
        </picture>
      )
  }}
</Image>
```
