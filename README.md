# jsts-dom

**Helper functions for working with JSTS templates in the browser**

## About

A set of helper functions for reading JSTS templates from DOM nodes, processing, and outputting interpolated templates in other DOM nodes.

By using JavaScript Template Strings for templating content in the browser you can make use of any variables JavaScript knows about, make use of JavaScript's built-in logic for templating any other language you're working with, and even write plugins and mixins that help you extend your templates all in 100% vanilla JavaScript.

## Usage

This plugin is provided in the following three formats:

- [index.js](index.js) is a CommonJS module formatted for Node.js
- [index.es.js](index.es.js) is a standard ES module
- [index.browser.js](index.browser.js) is a script containing a named function

### Installing from npm

```
npm install jsts-dom
```

## Functions

### Read

```js
read(selector)
```

- `selector` a string containing a CSS selector matching DOM nodes from which JSTS template(s) should be read

Use `read()` to read JSTS template(s) from one or more DOM nodes in an HTML document by matching them with a CSS selector (or leave blank to use the default `[type="text/jsts"]`). This function returns an array of strings containing JSTS templates to be interpolated.

### Process

```js
process(strings, environment)
```

- `strings` a string or array of strings containing JSTS templates to be interpolated
- `environment` an object containing any objects you wish to be available to the template during interpolation

This function accepts an array of JSTS templates and any JavaScript objects you wish to be made available to your JSTS template during its interpolation and sends them to be processed by the `jsts-engine` package. The return from this function is the return from processing the templates with the `jsts-engine` package, an array containing the final interpolated template as well as an `output` object which isn't used by the other functions in this plugin.

### Render

```js
render(strings, tag)
```

- `strings` a string or array of strings containing interpolated templates
- `tag` a DOM node to populate

The `render()` function accepts strings to be written to a DOM node, and a DOM node to populate with content, and returns the DOM node after the content has been added.

### Mount

```js
mount(selector, tag, environment)

// equivalent to
render(process(read(selector), environment), tag)
```

- `selector` a string containing a CSS selector matching DOM nodes from which JSTS template(s) should be read
- `tag` a DOM node to populate
- `environment` an object containing any objects you wish to be available to the template during interpolation

This function is a `read`-`process`-`render` workflow expressed at a higher level, where you only supply the CSS selector matching the DOM nodes containing JSTS template(s) to be read, a tag to populated the result to, and any JS objects you want available to the template(s) during interpolation.