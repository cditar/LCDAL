import React from 'react';
import { useLocation } from 'react-router-dom';
import './VideoId.css'
import { Menu } from "../../components/menu/desktop/Menu";
import { motion, useIsPresent } from "framer-motion";
import { MenuMobile } from '../../components/menu/mobile/MenuMobile';
import { useMediaQuery } from '@mui/material';
import { FooterBar } from '../../components/footerBar/FooterBar';

export const VideoId = () => {
    const isPresent = useIsPresent();
    const location = useLocation();
    const matches = useMediaQuery('(max-width:720px)');

    return (
        <>
            {matches ? <MenuMobile /> : <Menu color='white' />}

            <div className='videoIdContainer' key={location.state.key}>
                <video width='50%' controls controlsList="nodownload" className='videoStyle'>
                    <source src={location.state.src} type="video/mp4" />
                </video>
                <div className='videoIdInfoContainer'>
                    <div style={{ fontWeight: 800, paddingBottom: 20 }}>{location.state.title}</div>
                    <div style={{ backgroundColor: 'white', width: '100%', marginBottom: 20, height: 1 }} />
                    <div>{location.state.directors.map((item) => (<div style={{ backgroundColor: '#2F2B5E', margin: 5, padding: 5, color: "white", letterSpacing: 1, fontSize: 16, fontWeight: 400, textTransform: 'uppercase' }}>{item.replace('-', ' ')} </div>))}</div>
                </div>
            </div>
            <FooterBar path={location.state.backTo} state={{ name: location.state.name, id: location.state.id }} name={location.state.title} goBackText={location.state.name}/>
            <motion.div
                initial={{ scaleX: 2 }}
                animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
                style={{ originX: isPresent ? 0 : 2 }}
                className="contactTransition"
            />
        </>
    )
}