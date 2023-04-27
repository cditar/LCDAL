import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VideoId.css'
import arrowBack from '../../assets/images/arrow-back.png';
import { Menu } from '../../components/menu/Menu';
import { motion, useIsPresent } from "framer-motion";

export const VideoId = () => {
  const isPresent = useIsPresent();
    const location = useLocation();
    console.log(location.state);

    return (
        <>
            <Menu color='white' />
            <div className='videoIdContainer'>
                <video width='50%' controls controlsList="nodownload">
                    <source src={location.state.src} type="video/mp4" />
                </video>
                <div className='videoIdInfoContainer'>
                    <div style={{ fontWeight: 800, paddingBottom: 20 }}>{location.state.title}</div>
                    <div style={{ backgroundColor: 'white', width: '100%', marginBottom: 20, height: 1}}/>
                    {/* <div>{location.state.name}</div> */}
                    <div>{location.state.directors.map((item) => (<div style={{ backgroundColor: '#2F2B5E', margin: 5, padding: 5, color: "white", letterSpacing: 1, fontSize: 16, fontWeight: 400, textTransform: 'uppercase' }}>{item.replace('-', ' ')} </div>))}</div>
                </div>
            </div>
            <div className="stickyDownbarDirectorId">
                <Link to={location.state.backTo} state={{ name: location.state.name, id: location.state.id }} className='go-back-directors-button'>
                    <img src={arrowBack} width={15} height={15} alt="arrowBackButton" />
                    <div className="go-back-text"> volver </div> </Link>
                <div className="director-id-name"> {location.state.name} </div>
            </div>
            <motion.div
                initial={{ scaleX: 2 }}
                animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
                style={{ originX: isPresent ? 0 : 2 }}
                className="contactTransition"
            />
        </>
    )
}