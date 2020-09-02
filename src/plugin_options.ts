import { Application, ParameterType, StringDeclarationOption } from "typedoc";

/**
 * Class storing the options of the plugin.
 */
export class PluginOptions {
    /** Specifies the path to the config file of the plugin. */
    private configFilePathOption = {
        type: ParameterType.String,
        name: "replace-in-comments-config",
        help: "The path to the config file containing the replacement patterns.",
        defaultValue: "",
        value: "",
    };

    /**
     * Adds the command line options of the plugin to the TypeDoc application.
     * @param typedoc The TypeDoc application.
     */
    public addToApplication(typedoc: Application): void {
        typedoc.options.addDeclaration(this.configFilePathOption as StringDeclarationOption);
    }

    /**
     * Reads the values of the plugin options from the application options.
     * @param appOptions The TypeDoc application.
     */
    public readValuesFromApplication(typedoc: Application): void {
        this.configFilePathOption.value = typedoc.options.getValue(this.configFilePathOption.name) as string;
    }

    /**
     * Returns the path to the config file of the plugin.
     * @returns The path to the config file of the plugin.
     */
    get configFilePath(): string {
        return this.configFilePathOption.value;
    }
}
