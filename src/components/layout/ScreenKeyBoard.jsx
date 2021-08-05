import React, {useState} from 'react';
import AgreementForm from "./AgreementForm";
import Button from "../UI/Button";

const ScreenKeyBoard = () => {

    const initialState = '+7'
    const [numberValue, setNumberValue] = useState(initialState)
    const [falseError, setFalseError] = useState(false)

    const addNumber = (number) => (e) => {
        setNumberValue(numberValue + number)
        if (numberValue.length === 12) {
            setNumberValue(numberValue)
        }
    }


    const clearNumberInput = () => {
        setNumberValue(initialState)
    }

    const keyboardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            <input type='text' value={numberValue}/>
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
            <div className='text-red-600 text-center font-bold mt-8'>НЕВЕРНО ВВЕДЕН НОМЕР</div>

            {falseError && <AgreementForm/>}
            <Button>подтвердить номер</Button>
        </>
    );
};

export default ScreenKeyBoard;
