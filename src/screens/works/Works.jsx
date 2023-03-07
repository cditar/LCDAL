import React, { useState } from 'react';
import './Works.css'
import { NavLink } from 'react-router-dom';
import { useFirestoreVideos } from '../../hooks/useFirestoreVideos';
import HoverVideoPlayer from 'react-hover-video-player';
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { Menu } from '../../components/menu/Menu';

export const Works = () => {
    const [showMusicBckg, setShowMusicBckg] = useState(false);
    const [showFilmsBckg, setShowFilmsBckg] = useState(false);
    const [showCommercialsBckg, setShowCommercialsBckg] = useState(false);
    const { stills } = useFirestoreVideos();
    const isPresent = useIsPresent();

    return (
        <>
            <Menu color={showMusicBckg || showFilmsBckg || showCommercialsBckg ? 'white' : 'black'} />
            <div className='worksContainer'               >
                {showMusicBckg && <HoverVideoPlayer videoSrc={stills[4]} focused={true} className='works-videoContainer' />}
                {showFilmsBckg && <HoverVideoPlayer videoSrc={stills[0]} focused={true} className='works-videoContainer' />}
                {showCommercialsBckg && <HoverVideoPlayer videoSrc={stills[6]} focused={true} className='works-videoContainer' />}
                <div className='dataWorksContainer'>
                    <AnimatePresence>
                        <motion.div
                            key='music'
                            initial={{ x: "130%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 0.5 }}
                        >
                            <NavLink
                                onMouseOver={() => setShowMusicBckg(true)}
                                onMouseLeave={() => setShowMusicBckg(false)}
                                to={`/works/music-videos`}
                                state={{ name: 'music-videos' }}
                                className="worksName"
                            > MUSIC VIDEOS </NavLink>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                        <motion.div
                            key='films'
                            initial={{ x: "300%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 0.7 }}
                        >
                            <NavLink
                                onMouseOver={() => setShowFilmsBckg(true)}
                                onMouseLeave={() => setShowFilmsBckg(false)}
                                to={`/works/films`}
                                state={{ name: 'films' }}
                                className="worksName"
                            > FILMS </NavLink>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                        <motion.div
                            key='films'
                            initial={{ x: "180%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 0.8 }}
                        >
                            <NavLink
                                onMouseOver={() => setShowCommercialsBckg(true)}
                                onMouseLeave={() => setShowCommercialsBckg(false)}
                                to={`/works/commercials`}
                                state={{ name: 'commercials' }}
                                className="worksName"
                            > COMMERCIALS </NavLink>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <motion.div
                initial={{ scaleX: 2 }}
                animate={{ scaleX: 0, transition: { duration: 0.6, ease: "circOut" } }}
                style={{ originX: isPresent ? 0 : 2 }}
                className="privacy-screen"
            />
        </>
    )
}