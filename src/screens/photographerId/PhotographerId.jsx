import React from "react";
import './PhotographerId.css';
import { useFirestoreImages } from "../../hooks/useFirestoreImages";
import { NavLink } from "react-router-dom";


export const PhotographerId = () => {
  const name = window.location.hash.replace('#/photographers/', '');
  const { images } = useFirestoreImages(name);
  console.log(images);
  return (
    <>
      {images.length === 0 ? (
        <div
          container
          direction="column"
          width="100%"
          height="100%"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <p style={{ fontFamily: "ItcGaramond", fontSize: 30 }}>
            Loading ...
          </p>
        </div>
      ) : (
        <>
          <div className="horizontalContainer" id='horizontal'>
            {images.length &&
              images.map((item) => {
                return (
                  <img key={item} src={item} alt={item} className='firebase-images' />
                );
              })}
          </div>
        </>
      )}
      <div className="stickyDownbar">
        <NavLink to='/photographers' className='go-back-button'> go back </NavLink>
        <div className="photographer-id-name">Lola Piñero</div>
      </div>
    </>
  );
};
