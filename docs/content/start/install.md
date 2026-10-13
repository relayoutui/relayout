## Installation

You can load Relayout via CDN, or by downloading a version as a local css file in you project, or by using `npm` and a tool to build your css and embedding Relayout in your built css. 


### CDN Installation

Add the following code to your page in the `<head>` section, where `__VERSION__` is the version to load.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@{__VERSION__}/dist/css/relayout.min.css" />
```

### Local Installation

Download the Relayout version from CDN to a local css file which you link in your project. Include this css file in the build.

```
<link rel="stylesheet" href="assets/vendors/rl-0.1.0/relayout.min.css" />
```

### NPM Installation

If you would like to embed Relayout css in your css, you can use npm.

If your project does not have a `package.json` file, you can create one using `npm init`.

Install Relayout css library as a dev dependency.

```
npm install @relayoutui/relayout --save-dev
```

Create the file which will import Relayout (eg. `scss/app.scss`):

```
@use "@relayoutui/relayout/src/css/relayout";

...rest of css code
```

#### Using `sass` to build css

Install `sass` as a dev dependency.

```
npm install sass --save-dev
```

Run the following command to build your `app.css`. Specify `--load-path=node_modules` to instruct Sass to search `node_modules`.

```
sass --load-path=node_modules scss/app.scss assets/css/app.css
```

You can update `package.json` file and add a `build-css` script to build your scss into css:

```
{
  "name": "myapp",
  "scripts": {
    "build-css": "sass --load-path=node_modules scss/app.scss assets/css/app.css"
  },
  "dependencies": {
    "@relayoutui/relayout": "^0.1.0",
    "sass": "^1.93.3"
  }
}
```

Now you can run `npm run build-css`.
