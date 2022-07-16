import React, { PureComponent } from 'react';
import PresetType from './PresetType';
import * as CkEditorApi from '@neos-project/neos-ui-ckeditor5-bindings';
import GridSelectBox from "./GridSelectBox";

export default class SpecialCharacterSelector extends PureComponent {
    static propTypes = {
        metadata: PresetType.isRequired,
        label: PresetType.isRequired
    };

    constructor(...args) {
        super(...args);

        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    render() {

        const optionsForSelect = this.props.metadata;
        console.log(optionsForSelect)

        if (optionsForSelect.length === 0) {
            return null;
        }

        return (
            <div style={{marginLeft: '1px'}} >
                <GridSelectBox
                    options={optionsForSelect}
                    placeholder={this.props.label}
                    onSelect={(p) => this.handleOnSelect(p)}
                />
            </div>
        );
    }

    handleOnSelect(value) {
        CkEditorApi.executeCommand(
            'SpecialCharacterCommand',
            { value: value }
        );
    }
}
