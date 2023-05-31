import React, { useEffect, useState, useCallback, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import arrowBack from '../../assets/images/arrow-back.png';
import LOADING from '../../assets/images/LOADING.png';
import { VideoContainer } from '../../components/videoContainer/VideoContainer';
import '../directors/Directors.css'
import { FirebaseContext } from '../../context/firebaseContext';
import { useMediaQuery } from '@material-ui/core';
import { FooterBar } from '../../components/footerBar/FooterBar';

export const WorksId = () => {
    const location = useLocation();
    const { name } = location.state;
    const [showContent, setShowContent] = useState(false);
    const [separatedVideos, setSeparatedVideos] = useState([]);
    const [videos, setVideos] = useState([]);
    const { getVideosByCategory } = useContext(FirebaseContext);
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
            const gettedVideos = getVideosByCategory(name);
            setVideos(gettedVideos);
        }
        if (videos.length && !separatedVideos.length) {
            matches ? randSplit(1, 2) : randSplit(2, 4);
        }
        setTimeout(() => setShowContent(true), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videos.length, name, getVideosByCategory, matches]);

    return (
        <div>
            {
                !showContent ?
                    <div className='loadingContainer'>
                        <img src={LOADING} alt="loading" className='loading' />
                    </div>
                    :
                    <div className='generalContainer'>
                        {separatedVideos.length &&
                            separatedVideos.map((item) =>
                                <div className='rowContainer'>
                                    {
                                        item.map((video) => {
                                            return <VideoContainer backTo={location.pathname} key={video.name} directors={video.director} id={name} title={video.name} name={name} src={video.url} image={video.image} imageAlt={name} />
                                        }
                                        )
                                    }
                                </div>)}
                    </div>
            }
            <FooterBar goBackText='works' name={name} path='/works'/>
        </div>
    )
}