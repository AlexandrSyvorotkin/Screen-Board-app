import React from 'react';

const Button = (props) => {
    return (
        <button className='mt-5 w-72 h-14 border-2 border-gray-500 text-xl hover:bg-gray-900 hover:text-white'>
            {props.children}
        </button>
    );
};

export default Button;
