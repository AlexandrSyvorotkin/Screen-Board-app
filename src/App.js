import './App.css';
import PhoneNumberBlock from "./components/layout/PhoneNubmerBlock";
import React from "react";
import Vod from '../src/assets/VOD.png'

function App() {

    return (
        <div className='flex'>
            <PhoneNumberBlock/>
            <div>
                <img src={Vod} alt=""/>
            </div>
        </div>
    );
}

export default App;
