import './App.css';
import PhoneNumberBlock from "./components/layout/PhoneNubmerBlock";
import React from "react";
import PromoZone from "./components/PromoZone";

function App() {

    return (
        <div className='flex'>
            <PhoneNumberBlock/>
            <PromoZone/>
        </div>
    );
}

export default App;
