import React from "react";
import './FooterBar.css';
import { Link } from "react-router-dom";
import arrowBack from '../../assets/images/arrow-back.png';


export const FooterBar = ({ path, goBackText, name, state}) => {
    return (
        <div className="stickyDownbar">
            <Link to={path} className='go-back-button' state={state}>
                <img src={arrowBack} width={18} height={18} alt="arrowBackButton" />
                <div className="go-back-text"> {goBackText} </div> </Link>
            <div className="sticky-downbar-name"> {name} </div>
        </div>
    )
};
