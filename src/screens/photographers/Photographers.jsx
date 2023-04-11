import React, { useState } from 'react';
import './Photographers.css'
import MUSIC_VIDEOS from '../../assets/images/works-musicvideos.jpg';
import FILMS from '../../assets/images/works-films.jpg';
import COMMERCIALS from '../../assets/images/works-commercials.jpg';
import { Menu } from '../../components/menu/Menu';
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useIsPresent } from 'framer-motion';

export const Photographers = () => {
    const [showMusicBckg, setShowMusicBckg] = useState(false);
    const [showFilmsBckg, setShowFilmsBckg] = useState(false);
    const [showCommercialsBckg, setShowCommercialsBckg] = useState(false);
    const isPresent = useIsPresent();

    // Animación de transicion igual que works
    // TODO: Agregar la imágen en el pausedOverlay
    return (
        <>
            <Menu color={showMusicBckg || showFilmsBckg || showCommercialsBckg ? 'white' : 'black'} />
            <AnimatePresence>
                <motion.div
                    className='worksContainer'
                    key='photographersRowContainerKey'
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    {showMusicBckg && <img style={{ objectFit: 'cover' }} alt='music-videos' src={MUSIC_VIDEOS} className='worksBackground' />}
                    {showFilmsBckg && <img style={{ objectFit: 'cover' }} alt='films' src={FILMS} className='worksBackground' />}
                    {showCommercialsBckg && <img style={{ objectFit: 'cover' }} alt='commercials' src={COMMERCIALS} className='worksBackground' />}

                    <div className='dataWorksContainer'>
                        <motion.div
                            key='music'
                            initial={{ x: "130%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 0.6 }}
                        >
                            <NavLink to={`/photographers/lola`} className='worksName' onMouseLeave={() => setShowMusicBckg(false)} onMouseOver={() => setShowMusicBckg(true)}> ANA PIÑERO </NavLink>
                        </motion.div>

                        <motion.div
                            key='films'
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 0.8 }}
                        >
                            <NavLink to={`/photographers/malu`} className='worksName' onMouseLeave={() => setShowFilmsBckg(false)} onMouseOver={() => setShowFilmsBckg(true)}> MALU BORUCHOWICZ </NavLink>
                        </motion.div>

                        <motion.div
                            key='films'
                            initial={{ x: "180%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1 }}
                        >
                            <NavLink to={`/photographers/lola`} className='worksName' onMouseLeave={() => setShowCommercialsBckg(false)} onMouseOver={() => setShowCommercialsBckg(true)}> LOLA PIÑERO </NavLink>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <motion.div
                initial={{ scaleX: 2 }}
                animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
                style={{ originX: isPresent ? 0 : 2 }}
                className="photographersTransition"
            />
        </>
    )
}