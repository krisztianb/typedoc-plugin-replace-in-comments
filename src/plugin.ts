import { Application } from "typedoc";
import { Context, Converter } from "typedoc/dist/lib/converter";
import { PluginOptions } from "./plugin_options";

/**
 * The ReplaceInComments plugin.
 *
 * # What does it do?
 *
 * This plugin replaces text in comments with other text.
 *
 * # How does it do it?
 *
 * The plugin scans through all comments and uses the replacment patterns specified
 * by the user to replace text in these comments.
 */
export class Plugin {
    /** The options of this plugin. */
    private options = new PluginOptions();

    /**
     * Initializes the plugin.
     * @param typedoc The TypeDoc application.
     */
    public initialize(typedoc: Application): void {
        this.addOptionsToApplication(typedoc);
        this.subscribeToApplicationEvents(typedoc);
    }

    /**
     * Adds the plugin's options to the application's options.
     * @param typedoc The TypeDoc application.
     */
    private addOptionsToApplication(typedoc: Application): void {
        this.options.addToApplication(typedoc);
    }

    /**
     * Subscribes to events of the application so that the plugin can do its work
     * in the particular doc generation phases.
     * @param typedoc The TypeDoc application.
     */
    private subscribeToApplicationEvents(typedoc: Application): void {
        typedoc.converter.on(Converter.EVENT_BEGIN, (c: Context) => this.onConverterBegin(c));
        typedoc.converter.on(Converter.EVENT_RESOLVE_BEGIN, (c: Context) => this.onConverterResolveBegin(c));
    }

    /**
     * Triggered when the converter begins converting a project.
     * @param context Describes the current state the converter is in.
     */
    public onConverterBegin(context: Context): void {
        this.options.readValuesFromApplication(context.converter.owner.application);
    }

    /**
     * Triggered when the TypeDoc converter begins resolving a project.
     * @param context Describes the current state the converter is in.
     */
    public onConverterResolveBegin(context: Context): void {
        // TODO
    }
}
