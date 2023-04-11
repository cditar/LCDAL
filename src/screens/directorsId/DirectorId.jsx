import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import arrowBack from '../../assets/images/arrow-back.png';
import LOADING from '../../assets/images/LOADING.png';
import { VideoContainer } from '../../components/videoContainer/VideoContainer';
import './DirectorId.css'
import { useSpring, animated } from '@react-spring/web'
import { FirebaseContext } from '../../context/firebaseContext';

export const DirectorId = () => {
    const [showContent, setShowContent] = useState(false);
    const [separatedVideos, setSeparatedVideos] = useState([]);
    const location = useLocation();
    const { name, id } = location.state;
    const { getVideosByDirector } = useContext(FirebaseContext);
    const [videos, setVideos] = useState([]);

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
        if(!videos.length){
            const gettedVideos = getVideosByDirector(id);
            setVideos(gettedVideos);
        }
        if (videos.length && !separatedVideos.length) {
            if (videos.length < 3) {
                let finalVideosArray = [];
                videos.map((video) => finalVideosArray.push(video));
                setSeparatedVideos(finalVideosArray)
            } else {
                randSplit(2, 3);
            }
        }
        setTimeout(() => setShowContent(true), 2000);
    }, [videos.length, name, getVideosByDirector]);

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
                            separatedVideos.length < 3 ?
                                separatedVideos.map((item) => (
                                    <VideoContainer key={item.name} title={item.name} name={name} src={item.url} image={item.image} imageAlt={name + 'alt'} />
                                )) :
                                separatedVideos.map((item) => (
                                    <div className='rowContainer'>
                                        {
                                            item.map((video) =>
                                                <VideoContainer key={video.name} title={video.name} name={name} src={video.url} image={video.image} imageAlt={name + 'alt'} />
                                            )
                                        }
                                    </div>))
                        }
                    </div>
            }
            <div className="stickyDownbarDirectorId">
                <Link to='/directors' className='go-back-directors-button'>
                    <img src={arrowBack} width={20} height={20} alt="arrowBackButton" />
                    <div className="go-back-text"> directors </div> </Link>
                <div className="director-id-name"> {name} </div>
            </div>
        </div>
    )
}