# Nuxt Experiments with Animations

## Development

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

``` bash
# serve with hot reload at localhost:3000
$ yarn dev
```

## Linting

``` bash
# check for style errors/problems
$ yarn lint:scss

# autofix all possible style problems
$ yarn lint:scss --fix

# check for VUE errors/problems
$ yarn lint:vue

# autofix all possible vue problems
$ yarn lint:vue --fix

# check for all errors and probelems
$ yarn lint
```

## Normalize CSS

For normalizing of CSS is used `postcss-normalize` pluging, which takes in consideration the *browserlist* from `package.json`.

The normalize css will be imported using the `@import-normalize` statement in `global.scss` file.

----
