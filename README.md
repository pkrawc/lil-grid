# Lil Grid

![npm bundle size](https://img.shields.io/bundlephobia/minzip/lil-grid)
![npm](https://img.shields.io/npm/dm/lil-grid)

A _tiny_ grid for `styled-components` and `style-system`.

## Anatomy

Tiny grid uses `rem` units by default to give a consistency within your design. You can should be setting the `rem` in your project to a spacing that makes sense for you.

To set rem units reliably you can use the `:root` selector in CSS.

```css
:root {
  font-size: 8px;
}

body {
  /* Multiple of your base 8 * 2 = 16px */
  font-size: 2rem;
}
```

## Installation

```bash
npm install react react-dom styled-components styled-system lil-grid
```

## Usage

```js
import { Grid, Col } from "lil-grid"

export default () => {
  return (
    <Grid>
      <Col gridColumn={["span 12", "span 6", "span 4"]}>
        I will be 12 columns at the smallest size, then 6, then 4.
      </Col>
    </Grid>
  )
}
```

## Grid

Styled system allowed props are `layout`,`space`,`grid`,`flexbox`, & `color`.

Read up at [styled system](https://styled-system.com/table).
