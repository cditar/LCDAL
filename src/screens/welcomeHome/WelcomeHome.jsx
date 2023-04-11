import './WelcomeHome.css';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import HoverVideoPlayer from 'react-hover-video-player';
import React, { useState } from 'react';
import { AnimatedLogo } from '../../animations/AnimatedLogo';
import { motion, useIsPresent } from 'framer-motion';
import { useContext } from 'react';
import { FirebaseContext } from '../../context/firebaseContext';

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
                    className='welcome-background' />
            }
            <div className='worksLinks' onMouseOver={() => setIsPlayingVideo(true)}>
                <AnimatedLogo />
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