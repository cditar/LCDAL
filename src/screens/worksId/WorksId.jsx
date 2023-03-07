import React, { useEffect, useState, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import arrowBack from '../../assets/images/arrow-back.png';
import LOADING from '../../assets/images/LOADING.png';
import { VideoContainer } from '../../components/videoContainer/VideoContainer';
import { useWorksVideos } from '../../hooks/useWorksVideos';
import '../directors/Directors.css'

export const WorksId = () => {
    const location = useLocation();
    const { name } = location.state;
    const [showContent, setShowContent] = useState(false);
    const [separatedVideos, setSeparatedVideos] = useState([]);
    const { videos } = useWorksVideos(name);

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
        if (videos.length && !separatedVideos.length) {
            randSplit(2, 4);
        }
        setTimeout(() => setShowContent(true), 2000);
    }, [randSplit, separatedVideos, videos]);

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
                                        item.map((video) =>
                                            <VideoContainer key={video.name} title={video.name} name={name} src={video.url} />
                                        )
                                    }
                                </div>)}
                    </div>
            }
            <div className="stickyDownbarDirectorId">
                <NavLink to='/works' className='go-back-directors-button'>
                    <img src={arrowBack} width={20} height={20} alt="arrowBackButton" />
                    <div className="go-back-text"> works </div> </NavLink>
                <div className="director-id-name"> {name} </div>
            </div>
        </div>
    )
}