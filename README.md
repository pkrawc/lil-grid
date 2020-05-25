# Lil Grid

![npm bundle size](https://img.shields.io/bundlephobia/minzip/lil-grid)
![npm](https://img.shields.io/npm/dm/lil-grid)

A _tiny_ grid for `styled-components` and `style-system`.

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
      <Col span={[12, 6, 4]}>
        I will be 12 columns at the smallest size, then 6, then 4.
      </Col>
    </Grid>
  )
}
```

## Grid Props

### Styled Props

`space, layout, flexbox, grid`

| Name    | Type   | Default | Description                                                                           |
| ------- | ------ | ------- | ------------------------------------------------------------------------------------- |
| columns | number | 12      | A shorthand for `grid-template-columns: repeat(n, 1fr)` where n is your column count. |

## Col Props

`space, layout, flexbox, grid, color, background`

| Name      | Type       | Default | Description                                                        |
| --------- | ---------- | ------- | ------------------------------------------------------------------ |
| span      | `[number]` | `null`  | The amount of column places for the element to span.               |
| offset    | `[number]` | `null`  | The amount of column places to offset the start of the element by. |
| spanRow   | `[number]` | `null`  | The amount of row places for the element to span.                  |
| offsetRow | `[number]` | `null`  | The amount of column places to offset the start of the element by. |
