# typedoc-plugin-replace-in-comments

This is a plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that replaces text in comments.
You can specify matching patterns and the text they should be replaced with.

This can be useful for:

-   Creating links from ticket IDs (eg: replace "GH-12345" with a link to https://github.com/your-name/the-repo/issues/12345)
-   Creating links from author names (eg: link "Your Name" to your GitHub or corporate profile page)
-   Replacing internal URLs with external ones
-   Replacing custom placeholders with anything you like (eg: images)
-   Remove text from comments
-   etc.

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
        pattern: "(GH-(\\d+))",
        flags: "g",
        replace: "[$1](https://github.com/your-name/the-repo/issues/$2)",
    },
    {
        pattern: "The King Himself",
        flags: "gi",
        replace: "[King Kong](https://github.com/king-kong)",
    },
];
```

The file must include an array of objects with the following properties:

-   **pattern**: The regular expression pattern used to find the text that should be replaced.
-   **flags**: Flags for the regular expression pattern.
-   **replace**: The text that should be used as a replacement.

The properties of each object in the array are passed to a call of
[String.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
as follows:

```javascript
comment = comment.replace(new Regex(PATTERN, FLAGS), REPLACE);
```

## Bugs

Please report bugs [here](https://github.com/krisztianb/typedoc-plugin-replace-in-comments/issues).
Thanks for your contribution!
