import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import LOADING from '../../assets/images/LOADING.png';
import { VideoContainer } from '../../components/videoContainer/VideoContainer';
import './DirectorId.css'
import { useSpring, animated } from '@react-spring/web'
import { FirebaseContext } from '../../context/firebaseContext';
import { useMediaQuery } from '@material-ui/core';
import { FooterBar } from '../../components/footerBar/FooterBar';

export const DirectorId = () => {
    const [showContent, setShowContent] = useState(false);
    const [separatedVideos, setSeparatedVideos] = useState([]);
    const location = useLocation();
    const { name, id } = location.state;
    const { getVideosByDirector } = useContext(FirebaseContext);
    const [videos, setVideos] = useState([]);
    const matches = useMediaQuery('(max-width:720px)');

    const randSplit = useCallback((min, max) => {
        if (min > videos.length || max <= min)
            return [videos];
        let res = [], i = 0, rnd;
        while (i < videos.length) {
            rnd = Math.floor(Math.random() * (max - min)) + min;
            res.push(videos.slice(i, i + rnd));
            i += rnd;
        }
        setSeparatedVideos(res);
    }, [videos]);

    useEffect(() => {
        if (!videos.length) {
            const gettedVideos = getVideosByDirector(id);
            setVideos(gettedVideos);
        }
        if (videos.length && !separatedVideos.length) {
            matches ? randSplit(1, 2) : randSplit(2, 3);
        }
        setTimeout(() => setShowContent(true), 2000);
    }, [videos.length, name, getVideosByDirector, randSplit, id, separatedVideos, matches]);

    const animation = useSpring({
        loop: true,
        from: { opacity: 0 },
        to: [{ opacity: 1 }, { opacity: 0 }]
    });

    return (
        <div>
            {
                !showContent ?
                    <animated.div style={animation} className='loadingContainer'>
                        <img src={LOADING} alt="loading" className='loading' />
                    </animated.div>
                    :
                    <div className='generalContainer'>
                        {separatedVideos.length &&
                            separatedVideos.map((item) => (
                                <div className='rowContainer'>
                                    {
                                        item.map((video) =>
                                            <VideoContainer backTo={location.pathname} key={video.name} directors={video.director} id={id} title={video.name} name={name} src={video.url} image={video.image} imageAlt={name} />
                                        )
                                    }
                                </div>))
                        }
                    </div>
            }
            <FooterBar goBackText='directors' name={name} path='/directors'/>
        </div>
    )
}