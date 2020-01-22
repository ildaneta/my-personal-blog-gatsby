# gatsby-remark-lazy-load

Lazyloads images processed by [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/) with using [lazysizes](https://www.npmjs.com/package/lazysizes)

The plugin makes lazyload possible by:

* Move `src` and `srcset` to `data-src` and `data-srcset` respectively.
* Add class `lazyload` to `img` tag.

[lazysizes](https://www.npmjs.com/package/lazysizes) has to be installed to make this plugin work.

## Install

`npm install --save gatsby-remark-lazy-load`

`npm install --save lazysizes`

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
        },
        `gatsby-remark-lazy-load`,
      ]
    }
  }
]
```

```js
// In your gatsby-browser.js
import 'lazysizes'
```

## Contribution
This is a minimum plugin. Please make an issue when you need more functionalities or code doesn't work!