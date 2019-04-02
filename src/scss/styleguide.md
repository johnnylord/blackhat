@page styleguide Blackhat
@group styleguide.lib 0 LIB
@group styleguide.variables 1 VARIABLES
@group styleguide.helpers 2 HELPERS
@group styleguide.base 3 BASE
@group styleguide.layouts 4 LAYOUTS
@group styleguide.objects 5 OBJECTS
@group styleguide.components 6 COMPONENTS
@group styleguide.utils 7 UTILS

Blackhat is a front-end library, which you can used to design your web page.

## Project Architecture
```
.
|____lib
|____variables
|____helpers
|____base
|____layouts
|____objects
|____components
|____styles.scss
|_____utils.scss
```
* `lib` contains third-party scss files
* `variables` contains all global variables or configuration variables used in blackhat
* `helpers` contains customized scss mixins and functions used in blackhat
* `base` contains reset stylesheets of blacksheet
* `layout` contains css classes used for layout object/component
* `objects` contains css classes used for objects in web page
* `components` contains css classes used for components in web page
* `_utils.scss` contains utilities class for color, background, etc.
* `styles.scss` the collection entry for all the scss files
