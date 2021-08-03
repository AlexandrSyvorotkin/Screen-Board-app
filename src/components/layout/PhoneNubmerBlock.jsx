import React from 'react';
import ScreenKeyBoard from "./ScreenKeyBoard";
import AgreementForm from "./AgreementForm";
import Button from "../UI/Button";

const PhoneNumberBlock = () => {
    return (
        <div className='w-1/3 h-screen bg-phoneBlock'>
            <h1>Ввведите ваш номер мобильного телефона</h1>
            <span>и мы свяжемся с вами для дальшейшей консультации</span>
            <ScreenKeyBoard/>
            <AgreementForm/>
            <Button>подтвердить номер</Button>
        </div>
    );
};

export default PhoneNumberBlock;
