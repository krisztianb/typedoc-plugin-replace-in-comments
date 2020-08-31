# typedoc-plugin-replace-in-comments

This is a plugin for TypeDoc that replaces text in comments. You can specify matching patterns and the text they should
be replaced with.

This can be useful for:

-   Creating links from ticket IDs (eg: replace "GH-12345" with a link to https://github.com/your-name/the-repo/issues/12345)
-   Creating links from author names (eg: link "Your Name" to your GitHub or corporate profile page)
-   Replacing custom placeholders with an image
-   If you find other useful scenarios let me know and I might include them here. ;-)

## Installation

This module can be installed using [npm](https://www.npmjs.com/package/typedoc-plugin-replace-in-comments):

```sh
$ npm install typedoc-plugin-replace-in-comments --save-dev
```

TypeDoc automatically detects plugins installed via npm. After installation TypeDoc can be used normally and you can
configure this plugin as described below.

## Configuration

This plugin adds a new option to TypeDoc: `--replace-in-comments-config <PATH_TO_CONFIG_FILE>`

Use this option to specify the path to the JSON config file of this plugin.
The config file defines the regular expression matching patterns and the texts they should be replaced with.

The file structure is as follows:

```javascript
[
    {
        pattern: "(GH-(d+))",
        replace: "[$1](https://github.com/your-name/the-repo/issues/$2)",
    },
    {
        pattern: "The King Himself",
        replace: "https://github.com/the-king-himself",
    },
];
```

## Bugs

Please report bugs [here](https://github.com/krisztianb/typedoc-plugin-replace-in-comments/issues).
Thanks for your contribution!
