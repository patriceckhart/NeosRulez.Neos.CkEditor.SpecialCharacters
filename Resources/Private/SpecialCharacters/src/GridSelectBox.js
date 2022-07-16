import React, {Fragment} from 'react';
import {Button, Icon} from "@neos-project/react-ui-components";
import styles from "./styles.css"

class GridSelectBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    handleSelectButtonClick(value) {
        this.handleClick();
        this.props.onSelect(value);
    }

    render() {
        return (
            <Fragment>
                <div className={styles.gridSelectBox} >
                    <Button onClick={this.handleClick} className={styles.gridSelectBoxButton} >
                        <span className={styles.gridSelectBoxButtonSpan}>{this.props.placeholder}</span> <Icon className={styles.gridSelectBoxButtonChevron} icon={this.state.isToggleOn ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} />
                    </Button>
                    {this.state.isToggleOn &&
                        <div className={styles.gridSelectBoxSelect} >
                            {this.props.options.map(option =>
                                <button type="button" className={styles.gridSelectBoxSelectButton} onClick={() => this.handleSelectButtonClick(option.value)} >{option.label}</button>
                            )}
                        </div>
                    }
                </div>
            </Fragment>
        )
    }
}

export default GridSelectBox;
