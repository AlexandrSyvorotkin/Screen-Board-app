import React from 'react';
import ScreenKeyBoard from "./ScreenKeyBoard";
import AgreementForm from "./AgreementForm";
import Button from "../UI/Button";

const PhoneNumberBlock = () => {

    // const [phoneNumber, setPhoneNumber] = useState([])
    //
    // const addNumber = () => {
    //     setPhoneNumber([...phoneNumber, {
    //         id: phoneNumber.length,
    //         value: Math.floor(Math.random() * 10) + 1
    //     }])
    // }
    //


    // const onChangeNumber = (e) => {
    //     setNumberValue(e.target.value)
    // }





    return (
        <div className='w-1/3 h-screen bg-phoneBlock px-14'>
            <h1 className='text-xl'>Ввведите ваш номер мобильного телефона</h1>
            <span>и с Вами свяжется наш менеджер для дальшейшей консультации</span>

            {/*<div className='flex flex-row'>*/}
            {/*    {*/}
            {/*        phoneNumber.map((number) => {*/}
            {/*            return <div  key={number.id}>{number.value}</div>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
            {/*<ScreenKeyBoard addNumber={addNumber} clearNumbers={clearNumberInput}/>*/}
            <ScreenKeyBoard/>
            <AgreementForm/>
            <Button>подтвердить номер</Button>
        </div>
    );
};

export default PhoneNumberBlock;
