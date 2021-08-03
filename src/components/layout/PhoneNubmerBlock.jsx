import React, {useState} from 'react';
import ScreenKeyBoard from "./ScreenKeyBoard";
import AgreementForm from "./AgreementForm";
import Button from "../UI/Button";

const PhoneNumberBlock = () => {

    const [input, setInput] = useState('')

    return (
        <div className='w-1/3 h-screen bg-phoneBlock px-14'>
            <h1 className='text-xl'>Ввведите ваш номер мобильного телефона</h1>
            <span>и с Вами свяжется наш менеджер для дальшейшей консультации</span>
            <div>
                <form>
                    <input type='number' value={input}/>
                </form>
            </div>
            <ScreenKeyBoard/>
            <AgreementForm/>
            <Button>подтвердить номер</Button>
        </div>
    );
};

export default PhoneNumberBlock;
