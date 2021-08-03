import React from 'react';
import ScreenKeyBoard from "./ScreenKeyBoard";

const PhoneNumberBlock = () => {
    return (
        <div className='w-1/3 h-screen bg-phoneBlock'>
            <h1>Ввведите ваш номер телефона</h1>
            <span>и мы свяжемся с вами для дальшейшей консультации</span>
            <ScreenKeyBoard/>
        </div>
    );
};

export default PhoneNumberBlock;
