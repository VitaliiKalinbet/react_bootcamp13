import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children }) => {
    // console.log(children);
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
};

Panel.defaultProps = {
    title: "User profile"
}

Panel.propTypes = {
    title: PropTypes.string
}

export default Panel;