import React from 'react';

const Button = (props) => {
    return (
        <button className={props.styles} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
