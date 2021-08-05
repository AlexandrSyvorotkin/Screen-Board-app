import './App.css';
import PhoneNumberBlock from "./components/layout/PhoneNubmerBlock";
import React, {useState} from "react";
import Vod from '../src/assets/VOD.png'
import ApplicationAccepted from "./components/ApplicationAccepted";

function App() {
    const [accepted, setAccepted] = useState(true)


    return (
        <div className='flex'>
            {accepted ? <PhoneNumberBlock/> : <ApplicationAccepted/>}
            <div>
                <img src={Vod} alt=""/>
            </div>
        </div>
    );
}

export default App;
