import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import './videoContainer.css'
import { useNavigate } from 'react-router-dom';

export const VideoContainer = ({ id, src, name, artist, title, image, imageAlt, directors, backTo }) => {
    const navigate = useNavigate();
    const openNewWindow = () => {
        navigate(`/video/${id}/${title}`, { state: { id, src, artist, title, image, name, directors, backTo, key: name } });
    }

    return (
        <HoverVideoPlayer
            key={name}
            style={{ display: '-webkit-box', backgroundColor: 'black', objectFit: 'cover', marginLeft: -1, height: '100%', width: '100%' }}
            videoSrc={src}
            onClick={() => openNewWindow()}
            pausedOverlayWrapperClassName='videoInfoContainer'
            pausedOverlay={
                <div className='pausedOverlayContainer'>
                    <div className='videoTitle'>{title}</div>
                    <img src={image} alt={imageAlt} className='videoImage' />
                </div>
            }
        />
    )
}
