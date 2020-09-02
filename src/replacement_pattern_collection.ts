import * as fs from "fs";

/**
 * Type for a replacement pattern and the text to replace it with.
 */
type ReplacementPattern = {
    /** The regular expression to find texts that should be replaced. */
    pattern: string;
    /** The text that should replace the found texts. */
    replace: string;
};

/**
 * Collection of replacement patterns.
 */
export class ReplacementPatternCollection {
    /** The replacement patterns. */
    private patterns = new Array<ReplacementPattern>();

    /**
     * Creates a ReplacementPatternCollection object using the content of a file.
     * @param path Path to the file.
     * @returns The new ReplacementPatternCollection object.
     */
    public static readFromFile(path: string): ReplacementPatternCollection {
        if (!fs.existsSync(path)) {
            throw new Error(`replace-in-comments says: Cannot find config file ${path}`);
        }

        const patternCollection = new ReplacementPatternCollection();

        const fileContent = JSON.parse(fs.readFileSync(path, "utf8"));

        if (Array.isArray(fileContent)) {
            for (let i = 0; i < fileContent.length; ++i) {
                const fileEntry = fileContent[i];

                if (typeof fileEntry.pattern === "string" && typeof fileEntry.replace === "string") {
                    patternCollection.patterns.push({
                        pattern: String(fileEntry.pattern),
                        replace: String(fileEntry.replace),
                    });
                } else {
                    throw new Error(`replace-in-comments says: Error parsing config file entry ${i + 1}`);
                }
            }
        } else {
            throw new Error(`replace-in-comments says: Config file must contain an array of objects`);
        }

        return patternCollection;
    }
}
