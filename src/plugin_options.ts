import { Application, ParameterType } from "typedoc";
import { Replacement } from "./replacement";

/**
 * Extend typedoc's options with the plugin's option using declaration merging.
 */
declare module "typedoc" {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    export interface TypeDocOptionMap {
        "replace-in-comments-config": Replacement[];
    }
}

/**
 * Class storing the options of the plugin.
 */
export class PluginOptions {
    /** The replace information. */
    private _replacements: Replacement[] = [];

    /**
     * Adds the command line options of the plugin to the TypeDoc application.
     * @param typedoc The TypeDoc application.
     */
    public addToApplication(typedoc: Application): void {
        typedoc.options.addDeclaration({
            type: ParameterType.Mixed,
            name: "replace-in-comments-config",
            help: "The array with the objects defining the replacement patterns.",
            defaultValue: [],
        });
    }

    /**
     * Reads the values of the plugin options from the application options.
     * @param appOptions The TypeDoc application.
     */
    public readValuesFromApplication(typedoc: Readonly<Application>): void {
        this._replacements = typedoc.options.getValue("replace-in-comments-config");
    }

    /**
     * Returns the replace information.
     * @returns The replace information.
     */
    public get replacements(): Replacement[] {
        return this._replacements;
    }
}
