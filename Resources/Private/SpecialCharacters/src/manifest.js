import manifest from '@neos-project/neos-ui-extensibility';
import {$add, $get} from 'plow-js';
import SpecialCharacterEditing from "./SpecialCharacterEditing";
import SpecialCharactersPlugin from "./SpecialCharacterPlugin";
import SpecialCharacterSelector from "./SpecialCharacterSelector";

const addSpecialCharacters = (ckEditorConfiguration, options) => {
    if ($get(['specialCharacters'], options.editorOptions)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return $add('plugins', SpecialCharactersPlugin, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

const addEmojis = (ckEditorConfiguration, options) => {
    if ($get(['emojis'], options.editorOptions)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return $add('plugins', SpecialCharactersPlugin, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

manifest('NeosRulez.Neos.CkEditor.SpecialCharacters', {}, (globalRegistry, {frontendConfiguration}) => {
    const ckEditorRegistry = globalRegistry.get('ckEditor5');
    const richtextToolbar = ckEditorRegistry.get('richtextToolbar');
    const ckEditorConfig = ckEditorRegistry.get('config');

    const symbols = frontendConfiguration['NeosRulez.Neos.CkEditor.SpecialCharacters'].symbols;
    const emojis = frontendConfiguration['NeosRulez.Neos.CkEditor.Emojis'];
		const symbolsLabel = frontendConfiguration['NeosRulez.Neos.CkEditor'].symbolsLabel || "Special characters";
		const emojisLabel = frontendConfiguration['NeosRulez.Neos.CkEditor'].emojisLabel || "Emojis";

    ckEditorConfig.set('NeosRulez.Neos.CkEditor.SpecialCharacter_Symbols', (ckEditorConfiguration, {editorOptions}) => {
        const editing = SpecialCharacterEditing(symbols);
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        ckEditorConfiguration.plugins.push(editing);
        return ckEditorConfiguration;
    });

    const symbolsList = Object.keys(symbols)
        .map((item, i) => ({
            value: Object.values(symbols)[i].character,
            label: Object.values(symbols)[i].character
        }));

    richtextToolbar.set('SpecialCharacters_Symbols', {
        component: SpecialCharacterSelector,
        isVisible: function(editorOptions, formattingUnderCursor) {
					return editorOptions.specialCharacters === true || editorOptions.specialCharacters === 'true';
        },
        metadata: symbolsList,
        label: symbolsLabel
    });

    ckEditorConfig.set('NeosRulez.SpecialCharacters.addSpecialCharacters',(ckEditorConfiguration, {editorOptions}) => {
			const editing = SpecialCharacterEditing(symbolsList);
			ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
			ckEditorConfiguration.plugins.push(editing);
			return ckEditorConfiguration;
		});

    const emojisList = Object.keys(emojis)
        .map((item, i) => ({
            value: Object.values(emojis)[i].emoji,
            label: Object.values(emojis)[i].emoji
        }));

    ckEditorConfig.set('NeosRulez.Neos.CkEditor.SpecialCharacter_Emojis', (ckEditorConfiguration, {editorOptions}) => {
        const editing = SpecialCharacterEditing(emojis);
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        ckEditorConfiguration.plugins.push(editing);
        return ckEditorConfiguration;
    });

    richtextToolbar.set('SpecialCharacters_Emojis', {
        component: SpecialCharacterSelector,
        isVisible: function(editorOptions, formattingUnderCursor) {
					return editorOptions.emojis === true || editorOptions.emojis === 'true';
        },
        metadata: emojisList,
        label: emojisLabel
    });


});
