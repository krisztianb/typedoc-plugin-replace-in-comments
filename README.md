[![NPM Version](https://badge.fury.io/js/typedoc-plugin-replace-in-comments.svg)](https://badge.fury.io/js/typedoc-plugin-replace-in-comments) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=67UU75EUH4S8A)

# typedoc-plugin-replace-in-comments

This is a plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that replaces text in comments.
You can specify matching patterns and the text they should be replaced with.

This can be useful for:

-   Creating links from ticket IDs (eg: replace "GH-12345" with a link to https://github.com/your-name/the-repo/issues/12345)
-   Creating links from author names (eg: link "Your Name" to your GitHub or corporate profile page)
-   Replacing internal URLs with external ones
-   Replacing custom placeholders with anything you like (eg: images)
-   Remove URLs or other text from comments
-   etc.

## Installation

This module can be installed using [npm](https://www.npmjs.com/package/typedoc-plugin-replace-in-comments):

```sh
$ npm install typedoc-plugin-replace-in-comments --save-dev
```

TypeDoc automatically detects plugins installed via npm. After installation TypeDoc can be used normally and you can
configure this plugin as described below.

### Requirements

The plugin requires TypeDoc version 0.21.x or 0.22.x to be installed.

## Configuration

This plugin adds a new option to TypeDoc: `replace-in-comments-config`

The option defines the regular expression matching patterns and the texts they should be replaced with.
You can specify the config using one of the following methods:

-   In your `tsconfig.json` file (within the `typedocOptions` object) OR
-   In your `typedoc.json` file

**Example of a typedoc.json configuration:**

```javascript
{
    "out": "docs",
    "replace-in-comments-config": [
        {
            "pattern": "(GH-(\\d+))",
            "replace": "[$1](https://github.com/your-name/the-repo/issues/$2)"
        },
        {
            "pattern": "The King Himself",
            "flags": "gi",
            "replace": "[The King Himself](https://github.com/the-king-himself)"
        }
    ]
}
```

The option must define an array of objects with the following properties:

| Property    | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| **pattern** | The regular expression pattern used to find the text that should be replaced. |
| **flags**   | Flags for the regular expression pattern. (optional - defaults to `"g"`)      |
| **replace** | The text that should be used as a replacement.                                |

The properties are passed to a call of
[String.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
as follows:

```javascript
comment = comment.replace(new Regex(PATTERN, FLAGS), REPLACE);
```

## Bugs

Please report bugs [here](https://github.com/krisztianb/typedoc-plugin-replace-in-comments/issues).
Thanks for your contribution!

## Donate

If you find this piece of software helpful, please consider a donation. Any amount is greatly appreciated.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=67UU75EUH4S8A)
