import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../../libs/utils';
import RenderIf from './../../RenderIf';
import Label from './label';
import './styles.css';

export default class InputCheckbox extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input-checkbox');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.inputRef = React.createRef();
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames('rainbow-input-checkbox_container', {
            'rainbow-input-checkbox--error': error,
        }, className);
    }

    getInlineTextLabelId() {
        const { bottomHelpText } = this.props;
        if (bottomHelpText) {
            return this.inlineTextLabelId;
        }
        return undefined;
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.inputRef.current.blur();
    }

    render() {
        const {
            style,
            value,
            onChange,
            label,
            error,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            bottomHelpText,
            id,
            name,
        } = this.props;

        return (
            <div id={id} className={this.getContainerClassNames()} style={style}>
                <div className="rainbow-input-checkbox_inner-container">
                    <input
                        id={this.inputId}
                        name={name}
                        type="checkbox"
                        value={value}
                        onChange={onChange}
                        tabIndex={tabIndex}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        disabled={disabled}
                        aria-labelledby={this.getInlineTextLabelId()}
                        aria-describedby={this.getErrorMessageId()}
                        ref={this.inputRef} />
                    <Label
                        label={label}
                        disabled={disabled}
                        inputId={this.inputId}
                        id={this.getInlineTextLabelId()} />
                </div>
                <RenderIf isTrue={!!bottomHelpText}>
                    <div className="rainbow-input-checkbox_help">{bottomHelpText}</div>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-input-checkbox_error-message">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

InputCheckbox.propTypes = {
    value: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    name: PropTypes.string,
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
};

InputCheckbox.defaultProps = {
    value: undefined,
    name: undefined,
    bottomHelpText: null,
    error: null,
    disabled: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
};
