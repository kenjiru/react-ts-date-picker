# React + TypeScript + react-bootstrap-daterangepicker

Install the node modules:

`npm install`

Install the TypeScript definition files:

`tsd install`

Start the webpack-dev-server:

`npm run debug`

Build the project:

`npm run build`

## Observations

With TypeScript compiling to ES6, importing the _moment_ module throws some 
errors at compilation, but works in the browser.

```
ERROR in ./src/App.tsx
(3,8): error TS1192: Module ''moment'' has no default export.
```