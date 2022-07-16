import {Plugin, Paragraph} from 'ckeditor5-exports';
import SpecialCharacterCommand from "./SpecialCharacterCommand";

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export default (configuration) =>
    class SpecialCharacterEditing extends Plugin {
        init() {
            this.editor.commands.add('SpecialCharacterCommand', new SpecialCharacterCommand(this.editor));
        }
    }
