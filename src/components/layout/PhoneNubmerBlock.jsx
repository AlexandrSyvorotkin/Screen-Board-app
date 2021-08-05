import React from 'react';
import ScreenKeyBoard from "./ScreenKeyBoard";

const PhoneNumberBlock = () => {



    return (
        <div className='w-1/3 max-w-screen-md bg-phoneBlock px-14 pt-20'>
            <div className='text-xl text-2xl text-center'>Ввведите ваш номер мобильного телефона</div>
            <span className='text-center'>и с Вами свяжется наш менеджер для дальшейшей консультации</span>
            <ScreenKeyBoard/>
        </div>
    );
};

export default PhoneNumberBlock;
