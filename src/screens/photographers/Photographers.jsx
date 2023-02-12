import React, { useState } from 'react';
import './Photographers.css'
import MUSIC_VIDEOS from '../../assets/images/works-musicvideos.jpg';
import FILMS from '../../assets/images/works-films.jpg';
import COMMERCIALS from '../../assets/images/works-commercials.jpg';
import { Menu } from '../../components/menu/Menu';
import { NavLink } from "react-router-dom";

export const Photographers = () => {
    const [showMusicBckg, setShowMusicBckg] = useState(false);
    const [showFilmsBckg, setShowFilmsBckg] = useState(false);
    const [showCommercialsBckg, setShowCommercialsBckg] = useState(false);

    return (
        <>
            <Menu color={showMusicBckg || showFilmsBckg || showCommercialsBckg ? 'white' : 'black'} />
            <div className='worksContainer'>
                {showMusicBckg && <img alt='music-videos' src={MUSIC_VIDEOS} className='worksBackground' />}
                {showFilmsBckg && <img alt='films' src={FILMS} className='worksBackground' />}
                {showCommercialsBckg && <img alt='commercials' src={COMMERCIALS} className='worksBackground' />}

                <div className='dataWorksContainer'>
                    <NavLink to={`/photographers/lola`} className='worksName' onMouseLeave={() => setShowMusicBckg(false)} onMouseOver={() => setShowMusicBckg(true)}> ANA PIÑERO </NavLink>
                    <NavLink to={`/photographers/malu`} className='worksName' onMouseLeave={() => setShowFilmsBckg(false)} onMouseOver={() => setShowFilmsBckg(true)}> MALU BORUCHOWICZ </NavLink>
                    <NavLink to={`/photographers/lola`} className='worksName' onMouseLeave={() => setShowCommercialsBckg(false)} onMouseOver={() => setShowCommercialsBckg(true)}> LOLA PIÑERO </NavLink>
                </div>
            </div>
        </>
    )
}