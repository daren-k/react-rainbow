import React from 'react';
import PropTypes from 'prop-types';
import ComponentExampleCard from './../../ComponentExampleCard';
import PageObjectCard from './pageObjectCard';
import './styles.css';

export default function Util(props) {
    const { response, type } = props;

    if (response && Array.isArray(response.results) && response.results.length) {
        if (type === 'experience-examples') {
            return (
                <div>
                    <div className="react-rainbow-utils_text rainbow-m-around_medium">
                        <h1 className="react-rainbow-utils_text-header">Real experience examples</h1>
                    </div>
                    <ComponentExampleCard results={response.results} />
                </div>
            );
        }
        return <PageObjectCard results={response.results} type={type} />;
    }
    return null;
}

Util.propTypes = {
    response: PropTypes.object,
    type: PropTypes.string,
};

Util.defaultProps = {
    response: null,
    type: undefined,
    name: undefined,
};
