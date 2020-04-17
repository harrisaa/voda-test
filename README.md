# Vodafone Pair Programming Challenge

## Getting started
1. run `yarn` to install the required dependencies
2. run `yarn start` to run `webpack` and `webpack-dev-server` the project will host on `http://localhost:3000`

## Folder Structure
A base folder structure has been provided, feel free to modify and change it:

`/src/components/` - Empty, could contain React Components

`/src/pages/` - Contains the pages for the app to render

`/src/utils/` - Empty, could contain utilities

`/src/app.js` - Main react app

`/src/index.html` - Main index.html where the react app gets loaded into

## Babel
Babel has been added to transpile code, one module that has been added could ease development:

### `jsx-control-statements`
This module allows the use of the following inside JSX render methods:

#### If Statements
Instead of:
```js
 { this.state.show && <JSX comp>}
```

You can do this:
```js
<If condition={this.state.show}>
   <JSX comp>
</If>
```

#### Case statements
It also allows case statements:
```js
  <Case>
    <When condition={...}>
    </When>
    <When condition={...}>
    </When>
    <Otherwise>
    </Otherwise>
  </Case>
```

For more information see the [documentation](https://www.npmjs.com/package/jsx-control-statements)
