import * as fs from "fs";

/**
 * Type for a replacement pattern and the text to replace it with.
 */
export type ReplacementInfo = {
    /** The regular expression to find texts that should be replaced. */
    pattern: RegExp;
    /** The text that should replace the found texts. */
    replace: string;
};

/**
 * Class representing the plugin configuration file.
 */
export class Config {
    /** The replacement infos. */
    private _replacements = new Array<ReplacementInfo>();

    /**
     * Returns the replacement infos.
     * @returns The replacement infos.
     */
    get replacements(): ReplacementInfo[] {
        return this._replacements;
    }

    /**
     * Creates a Config object using the content of a file.
     * @param path Path to the file.
     * @returns The new Config object.
     */
    public static readFromFile(path: string): Config {
        if (!fs.existsSync(path)) {
            throw new Error(`replace-in-comments says: Cannot find config file ${path}`);
        }

        const fileContent = JSON.parse(fs.readFileSync(path, "utf8"));

        if (Array.isArray(fileContent)) {
            const config = new Config();

            for (let i = 0; i < fileContent.length; ++i) {
                const fileEntry = fileContent[i];

                if (typeof fileEntry.pattern === "string" && typeof fileEntry.replace === "string") {
                    config._replacements.push({
                        pattern: new RegExp(String(fileEntry.pattern), "g"),
                        replace: String(fileEntry.replace),
                    });
                } else {
                    throw new Error(`replace-in-comments says: Error parsing entry ${i + 1} of config file`);
                }
            }

            return config;
        } else {
            throw new Error(`replace-in-comments says: Config file must contain an array of objects`);
        }
    }
}
