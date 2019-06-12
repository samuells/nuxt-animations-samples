# ASSETS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your un-compiled assets such as LESS, SASS, or JavaScript.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#webpacked).

#### Styles Architecture

>There is a major difference between making it work, and making it good.

We are recommending Sass Architecture inspired by [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern). As these project should be based on VueJS, there is no need for `themes` and `pages` folder. These two folders contains mainly special overrides, which in our case should live inside the Vue SFC file.

We strongly recommend to style your components inside of the SFC. **But keep in mind that DRY principle should be held!** Apply it by identifying the reusable part of the styling and extract this styling into abstract general scss file inside `assets/scss/components/` folder. Good sign of such file is needed are:

- often copy & paste between files with similar names (`TeaserNew.vue`, `TeaserBlog.vue`)
- scss code in SFC is very long (more than 100 lines)

*In cases where scss code has few hundres lines of code, we recommend to create also separate file in `components` folder.*
> Good sample is Navigation, which is usually very long and compolicated style. In this case we would recommend to divide styles into more mixins according to the sections of navigation and define these mixins in `assets/scss/components/_navigations.scss` file. Inside the SFC would be used only these mixins as are needed.

**Styles Folder Structure**

``` scss
root
  ├── assets/ 
  │   └── scss/
  │        ├── abstracts/ // Merge of the Settings, Helpers and Utils folder from old projects
  │        │    ├── _animations.scss // all animation definitions with varibales and settings
  │        │    ├── _breakpoints.scss // breakpoints functionality & setup
  │        │    ├── _clearfix.scss // clearfix mixin & other flow mixin fixes
  │        │    ├── _colors.scss // color variables - more info in separate topic
  │        │    ├── _fonts.scss // imports of fonts & their variables
  │        │    ├── _mixins.scss // all kinds of mixins (probably clearfix should go here aslo) which can be updated and changed per project
  │        │    ├── _transitions.scss // transition mixins & their variables & setup
  │        │    ├── _variables.scss // all kind of global variables
  │        │    ├── _vertical-rhythm.scss // vertical rhythm functionality
  │        │    ├── _visibility.scss // visibility mixins
  │        │    ├── _units.scss // calculation funtions for rem based on Foundation's _units.scss
  │        │    ├── _utils.scss // also holds different mixins shortcuts & function (old _helpers.scss) - candidate to merge with _mixins.scss
  │        │    ├── _utils--typography.scss // function for fluid fonts (author Manu)
  │        │    └── _z-indexes.scss // definition of z-index in project (if they are different to -1 0 1)
  │        ├── base/ // styling for each vue component as abstract file "_wndrs-footer.scss"
  │        │    ├── _buttons.scss // mandatory
  │        │    ├── _headlines.scss // mandatory 
  │        │    ├── _helper-classes.scss // mandatory 
  │        │    ├── _icons.scss // mandatory 
  │        │    ├── _inputs.scss // mandatory 
  │        │    ├── _labels.scss // mandatory 
  │        │    ├── _links.scss // mandatory 
  │        │    ├── _ordered-list.scss // mandatory 
  │        │    ├── _pagination.scss // mandatory 
  │        │    ├── _paragraphs.scss // mandatory 
  │        │    ├── _radio-buttons.scss // mandatory 
  │        │    ├── _tables.scss // mandatory 
  │        │    ├── _reset.scss // mandatory 
  │        │    ├── _textareas.scss // mandatory 
  │        │    └── _unordered-list.scss // mandatory 
  │        ├── components/ // styling for each vue component as abstract file "_wndrs-footer.scss"
  │        │    ├── _boxes.scss // OPTIONAL (as sample)
  │        │    ├── _bridges.scss // OPTIONAL (as sample)
  │        │    ├── _hero-areas.scss // OPTIONAL (as sample)
  │        │    ├── _navigations.scss // OPTIONAL (as sample)
  │        │    ├── // ...
  │        │    └── _teasers.scss // OPTIONAL (as sample)
  │        ├── layouts/ // all kind of layouts - _homepage.scss, _listings.scss, etc...
  │        ├── vendors/ // 3th party styling. Overrides of 3th party components as also function & mixins form 3th party (eg. xy grid from Foundation)
  │        │    ├── _vue-notification.scss // OPTIONAL (as sample) - use the same name as plugin name
  │        │    ├── _element-ui.scss // OPTIONAL (as sample) - use the same name as plugin name
  │        │    ├── // ...
  │        │    └── _{plugin-name}.scss // OPTIONAL (as sample)
  │        ├── _toolbelt.scss // these are you tools - this will imports all mixins & function into your file, that you can use it without problem. This can be imported to each vue files, which requires styling.
  │        └── _global.scss // generating of base styles & layouts - considere to generate also components in some cases and vendors styling
```

#### Global Styles Generation

We still use general or global styles in our projects - these are mainly the style inside the folder `assets/scss/base/_*.vue`. Selectors based on these this general styling should be always present for each component or page. What's the best way to include the into the project?

These styles should be included using layouts vue templates. Using this way you can effectivlly define different base styling for `login page` or `error page` or `default page`. To achieve this and don't create unnecessery files accross the system each scss file in `base` folder should content implementation section at the end.
