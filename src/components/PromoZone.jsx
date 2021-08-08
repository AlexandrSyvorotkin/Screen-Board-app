import React from 'react';
import Vod from "../assets/Promo.jpg";
import BtnCloseW from '../assets/BtnCloseW.jpg'
import BtnCloseB from '../assets/BtnCloseB.png'
import Button from "./UI/Button";

const PromoZone = ({accepted, setAccepted}) => {

    const closeAppHandler = () => {
        setAccepted(true)
    }

    return (
        <div>
            <img src={Vod} alt=""/>
            <Button onClick={closeAppHandler} styles={'btnClose'}>
                <img src={accepted ? BtnCloseW : BtnCloseB} alt=""/>
            </Button>
        </div>
    );
};

export default PromoZone;
