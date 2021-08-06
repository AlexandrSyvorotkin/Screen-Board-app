import React from 'react';
import Vod from "../assets/Promo.jpg";
import BtnClose from '../assets/BtnClose.jpg'
import Button from "./UI/Button";

const PromoZone = () => {
    return (
        <div>
            <img src={Vod} alt=""/>
            <Button styles={'btnClose'}>
                <img src={BtnClose} alt=""/>
            </Button>
        </div>
    );
};

export default PromoZone;
