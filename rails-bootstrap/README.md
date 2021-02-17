# Rails-Bootstrap

Using bootstrap within a ruby on rails project

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install the required dependancies for bootstrap.

```bash
yarn add bootstrap jquery popper.js
```

## Configuration

Open your main webpack configuration file, config/webpack/environment.js, in your text editor.

Inside the file, add the webpack library, along with a ProvidePlugin that tells Bootstrap how to interpret JQuery and Popper variables.

Add the following code to the file:

```javascript
const webpack = require("webpack") 

environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))
```

Next, open your main webpack entry point file, app/javascript/packs/application.js

Inside the file, add the following import statements to import Bootstrap and the custom scss styles file that you will create next:

```javascript
import "bootstrap"
import "../stylesheets/application"
```

Next, create a stylesheets directory for your application style sheet and cd into it:

```bash
mkdir app/javascript/stylesheets
cd app/javascript/stylesheets
```
 Make a new file called application.scss and add the following import statement
```css
@import "~bootstrap/scss/bootstrap";
```

Make sure all files are saved and you're ready to use bootstrap throughout your project!


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
