import React, { useState } from 'react';
import './Works.css'
import { Menu } from '../../components/menu/Menu';
import { NavLink } from 'react-router-dom';
import { useFirestoreVideos } from '../../hooks/useFirestoreVideos';
import HoverVideoPlayer from 'react-hover-video-player';

export const Works = () => {
    const [showMusicBckg, setShowMusicBckg] = useState(false);
    const [showFilmsBckg, setShowFilmsBckg] = useState(false);
    const [showCommercialsBckg, setShowCommercialsBckg] = useState(false);
    const { stills } = useFirestoreVideos();

    return (
        <>
            <Menu color={showMusicBckg || showFilmsBckg || showCommercialsBckg ? 'white' : 'black'} />
            <div className='worksContainer'>
                {showMusicBckg && <HoverVideoPlayer videoSrc={stills[4]} focused={true} className='works-videoContainer'/>}
                {showFilmsBckg && <HoverVideoPlayer videoSrc={stills[0]} focused={true} className='works-videoContainer'/>}
                {showCommercialsBckg && <HoverVideoPlayer videoSrc={stills[6]} focused={true} className='works-videoContainer'/>}
                <div className='dataWorksContainer'>
                        <NavLink
                            onMouseOver={() => setShowMusicBckg(true)}
                            onMouseLeave={() => setShowMusicBckg(false)}
                            to={`/works/music-videos`}
                            state={{ name: 'music-videos' }}
                            className="worksName"
                        > MUSIC VIDEOS </NavLink>
                        <NavLink
                            onMouseOver={() => setShowFilmsBckg(true)}
                            onMouseLeave={() => setShowFilmsBckg(false)}
                            to={`/works/films`}
                            state={{ name: 'films' }}
                            className="worksName"
                        > FILMS </NavLink>
                        <NavLink
                            onMouseOver={() => setShowCommercialsBckg(true)}
                            onMouseLeave={() => setShowCommercialsBckg(false)}
                            to={`/works/commercials`}
                            state={{ name: 'commercials' }}
                            className="worksName"
                        > COMMERCIALS </NavLink>
                    </div>
            </div>
        </>
    )
}