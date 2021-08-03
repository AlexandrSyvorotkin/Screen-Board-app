import React from 'react';

const ScreenKeyBoard = () => {

    const keyboardnumber = [1,2,3,4,5,6,7,8,9]

    return (
        <div className='grid grid-cols-3 gap-4 px-14 justify-items-center mt-8'>
            {
                keyboardnumber.map(number => {
                    return <div className='w-20 h-14 flex items-center justify-center border-2 border-gray-900 hover:bg-gray-900 hover:text-white'>{number}</div>
                })
            }
            <div className='col-span-2 text-center flex items-center justify-center border-2 border-gray-900 w-48 hover:bg-gray-900 hover:text-white'>стереть</div>
            <div className='w-20 h-14 flex items-center justify-center border-2 border-gray-900 hover:bg-gray-900 hover:text-white'>0</div>
        </div>
    );
};

export default ScreenKeyBoard;
