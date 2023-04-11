import React from "react";
import './PhotographerId.css';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FirebaseContext } from "../../context/firebaseContext";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";


export const PhotographerId = () => {
  const name = window.location.hash.replace('#/photographers/', '');
  const { getImagesByName } = useContext(FirebaseContext);
  const [images, setImages] = useState([]);

  const gettedImages = useCallback(async() => {
    const data = await getImagesByName(name);
    if (data.length) {
      setImages(data);
    }
  }, [name, getImagesByName]);

  useEffect(() => {
    gettedImages();
  }, [gettedImages]);

  return (
    <>
      {images.length === 0 ? (
        <div
          container={true}
          direction="column"
          width="100%"
          height="100%"
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
