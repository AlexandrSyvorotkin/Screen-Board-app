import React from 'react';
import ScreenKeyBoard from "./ScreenKeyBoard";

const PhoneNumberBlock = () => {

    return (
        <div className='w-1/3 h-screen bg-phoneBlock px-14'>
            <h1 className='text-xl'>Ввведите ваш номер мобильного телефона</h1>
            <span>и с Вами свяжется наш менеджер для дальшейшей консультации</span>
            <ScreenKeyBoard/>
        </div>
    );
};

export default PhoneNumberBlock;
