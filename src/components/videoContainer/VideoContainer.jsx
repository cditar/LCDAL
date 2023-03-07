import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import './videoContainer.css'

export const VideoContainer = ({ src, name, artist, title }) => {

    const openNewWindow = () => {
        window.open(src, 'popUpWindow');
    }

    return (
            <HoverVideoPlayer
                style={{ display: '-webkit-box', backgroundColor: 'black', objectFit: 'cover', marginLeft: -1, height: '100%', width: '100%' }}
                videoSrc={src}
                onClick={() => openNewWindow()}
                pausedOverlayWrapperClassName='videoInfoContainer'
                pausedOverlay={
                    <>
                        <div className='videoTitle'> {title} </div>
                        <div className='videoArtist'> {artist} </div>
                        <div className='videoDirector'> {name} </div>
                    </>
                }
            />
    )
}
