import React from 'react';
import Vod from "../assets/Promo.jpg";
import BtnClose from '../assets/BtnClose.jpg'
import Button from "./UI/Button";

const PromoZone = ({setAccepted}) => {

    const closeAppHandler = () => {
        setAccepted(true)
    }

    return (
        <div>
            <img src={Vod} alt=""/>
            <Button onClick={closeAppHandler} styles={'btnClose'}>
                <img src={BtnClose} alt=""/>
            </Button>
        </div>
    );
};

export default PromoZone;
