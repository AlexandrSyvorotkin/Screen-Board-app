import React, {useState} from 'react';

const ScreenKeyBoard = () => {

    const [numberValue, setNumberValue ] = useState('+7')

    const addNumber = (number) => (e) => {
        setNumberValue(numberValue + number)
    }

    const clearNumberInput = () => {
        setNumberValue('')
    }

    const keyboardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            <input type='text' value={numberValue} />
        <div className='grid grid-cols-3 gap-4 justify-items-center mt-8'>

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
                className='col-span-2 text-center flex items-center justify-center border-2 border-gray-900 w-48 hover:bg-gray-900 hover:text-white'>
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


{/*<button onClick={addNumber(1)} className='screenButton'>1</button>*/}
{/*<button onClick={addNumber(2)} className='screenButton'>2</button>*/}
{/*<button onClick={addNumber(3)} className='screenButton'>3</button>*/}
{/*<button onClick={addNumber(4)} className='screenButton'>4</button>*/}
{/*<button onClick={addNumber(5)} className='screenButton'>5</button>*/}
{/*<button onClick={addNumber(6)} className='screenButton'>6</button>*/}
{/*<button onClick={addNumber(7)} className='screenButton'>7</button>*/}
{/*<button onClick={addNumber(8)} className='screenButton'>8</button>*/}
{/*<button onClick={addNumber(9)} className='screenButton'>0</button>*/}



export default ScreenKeyBoard;
