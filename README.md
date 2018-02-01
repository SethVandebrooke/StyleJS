# StyleJS
If you're going to do it... Do it in style! (A lightweight way to write, manage and compile JSON as CSS)

RESONS TO USE IT
 - It's in JSON (...think about it)
 - CSS variables
 - Real time reflected changes
 - Manage your CSS with easy to use functions
 - Compiles fast and in the browser (forget having to compile your CSS)
 - Forms Beautiful CSS

# Documentation
The Style Constructor provides a useful, simple, and extendable css management system.

**Why?**
With the Style Constructor you can easily make realtime style changes, automate styles, and use CSS variables without having to compile anything.

## Style Methods

Method Name | Parameters | Parameter Types | Description
----------- | ---------- | --------------- | -----------
generateCSS | style | object | Generates CSS from a [style syntax](#style-syntax) object.
addProperty | selector, property, value | string, string, string | Adds a property to a selector.
deleteProperty | selector, property, value | string, string, string | Deletes a property in a selector.
changeProperty | selector, property, value | string, string, string | Changes a property in a selector.
getProperty | selector, property | string, string | Returns a properties value from a given selector.
compile | none | null | compiles the current style settings and renders the changes on the screen.
currentCSS | none | none | Returns current style settings as JSON.

## Style Syntax

Style Syntax is much like plain CSS:

```js
SELECTOR : {
    PROPERTY : VALUE //type: string
  }
```

## Style Variables

Style variables are simple. When defined in the last parameter of the constructor, they can be used as a value for a style attribute by preceeding the name of the variable with a $ sign.
For example:
```js
new UI("uiname", { ... }, 
{
  ".mydiv" : {
    color : "$primary"
  }
}, {
  primary : "#ff0000"
});
```
