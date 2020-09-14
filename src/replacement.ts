/**
 * A type describing what should be replaced by what.
 */
export type ReplaceInfo = {
    /** The regular expression pattern used to find the text that should be replaced. */
    pattern: string;

    /** Flags for the regular expression pattern. */
    flags: string;

    /** The text that should be used as a replacement. */
    replace: string;
};
