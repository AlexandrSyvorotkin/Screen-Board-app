import './App.css';
import PhoneNumberBlock from "./components/layout/PhoneNubmerBlock";
import React, {useState} from "react";
import PromoZone from "./components/PromoZone";

function App() {

    const [accepted, setAccepted] = useState(true)

    return (
        <div className='flex'>
            <PhoneNumberBlock accepted={accepted} setAccepted={setAccepted}/>
            <PromoZone setAccepted={setAccepted}/>
        </div>
    );
}

export default App;
