import { Command } from 'ckeditor5-exports';

export default class SpecialCharacterCommand extends Command {

    /**
     * @fires execute
     * @param {Object} [options] Command options.
     * @param {String} [options.value] The value to be set; if null or not existing, the attribute will be removed.
     */
    execute(options = {}) {
        const editor = this.editor;
        editor.model.change((writer) => {
            const insertPosition = editor.model.document.selection.getFirstPosition();
            let value = options.value;
            console.log(value);
            writer.insertText(value, insertPosition);
        });
    }
}
