import React, {useState} from 'react';
import ScreenKeyBoard from "./ScreenKeyBoard";
import Button from "../UI/Button";
import AgreementForm from "./AgreementForm";
import ApplicationAccepted from "../ApplicationAccepted";

const PhoneNumberBlock = () => {

    const initialState = '+7'
    const [numberValue, setNumberValue] = useState(initialState)
    const [falseError, setFalseError] = useState(false)

    const [accepted, setAccepted] = useState(true)


    const addNumber = (number) => () => {
        setNumberValue(numberValue + number)
        if (numberValue.length === 12) {
            setNumberValue(numberValue)
        }
    }


    const clearNumberInput = () => {
        setNumberValue(initialState)
    }

    const [dataAgreement, setDataAgreement] = useState(false)
    const dataProcessingAgreementHandler = () => {
        setDataAgreement(true)
    }

    const acceptedNumberHandler = () => {
        if (numberValue.length === 12 && dataAgreement === true) {
            setAccepted(false)
        }
    }

    // стейт для неверно введенного номера: условия - номер не 12 цифр, так же галочка и кнопка.

    return (
        <>
            {
                accepted ? <div className='w-1/3 max-w-screen-md bg-phoneBlock px-14 pt-16'>
                    <div className='flex flex-col'>
                        <div className='text-xl text-1xl font-bold text-center'>Ввведите ваш номер мобильного телефона
                        </div>
                        <form>
                            <input type='text' value={numberValue}/>
                        </form>
                        <span className='text-center'>и с Вами свяжется наш менеджер для дальшейшей консультации</span>
                    </div>
                    <ScreenKeyBoard addNumber={addNumber} clearNumberInput={clearNumberInput} falseError={falseError}/>
                    {
                        !falseError ? <AgreementForm dataProcessingAgreementHandler={dataProcessingAgreementHandler}/> :
                            <div className='text-red-600 text-center font-bold mt-8'>НЕВЕРНО ВВЕДЕН НОМЕР</div>
                    }
                    <Button onClick={acceptedNumberHandler}>подтвердить номер</Button>
                </div> : <ApplicationAccepted/>
            }
        </>
    );
};

export default PhoneNumberBlock;
