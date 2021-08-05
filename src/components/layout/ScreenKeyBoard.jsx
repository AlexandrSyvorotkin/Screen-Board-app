import React from 'react';

const ScreenKeyBoard = ({addNumber, clearNumberInput}) => {

    const keyboardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            <div className='grid grid-cols-3 gap-4 justify-items-center mt-4 '>
                {
                    keyboardNumbers.map((number) => {
                        return <button
                            onClick={addNumber(number)}
                            key={number.toString()}
                            className='screenButton'
                        >
                            {number}
                        </button>
                    })
                }
                <button
                    onClick={clearNumberInput}
                    className='col-span-2 text-center font-bold flex items-center justify-center border-2 border-gray-900 w-48 hover:bg-gray-900 hover:text-white'>
                    стереть
                </button>
                <button
                    onClick={addNumber(0)}
                    className='screenButton'>
                    0
                </button>
            </div>

        </>
    );
};

export default ScreenKeyBoard;
