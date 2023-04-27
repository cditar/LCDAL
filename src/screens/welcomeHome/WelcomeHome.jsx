import './WelcomeHome.css';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import HoverVideoPlayer from 'react-hover-video-player';
import React, { useState } from 'react';
import { motion, useIsPresent } from 'framer-motion';
import { useContext } from 'react';
import { FirebaseContext } from '../../context/firebaseContext';
import WHITE_LOGO_COMPLETE from '../../assets/images/WHITE_LOGO_COMPLETE.png'

export const WelcomeHome = () => {
    const { stills } = useContext(FirebaseContext);
    const [isPlayingVideo, setIsPlayingVideo] = useState(true);
    const isPresent = useIsPresent();
    const navigate = useNavigate();

    return (
        <Grid className='container' onClick={() => navigate('/works')}>
            {
                stills.length &&
                <HoverVideoPlayer
                    videoSrc={stills[1]}
                    focused={isPlayingVideo}
                    className='welcome-background'
                    key='welcomeVideo'
                    hoverOverlayWrapperClassName='overlayWrapper'
                    hoverOverlay={
                        <img src={WHITE_LOGO_COMPLETE} alt='whiteLogoAlt' style={{ width: 400, heigth: 400, cursor: 'pointer'}} className='videoImage' />
                    }
                    style={{ display: '-webkit-box', backgroundColor: 'black', objectFit: 'cover', marginLeft: -1, height: '100%', width: '100%' }}
                />
            }
            <div className='worksLinks' onMouseOver={() => setIsPlayingVideo(true)}>
                {/* <AnimatedLogo /> */}
                {/* <img alt="welcomeLogo" src={WHITE_LOGO} /> */}
            </div>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </Grid>
    )
};