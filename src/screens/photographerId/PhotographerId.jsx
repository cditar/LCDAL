import React, { useContext, useState, useCallback, useEffect } from "react";
import './PhotographerId.css';
import {useLocation } from "react-router-dom";
import { FirebaseContext } from "../../context/firebaseContext";
import { FooterBar } from "../../components/footerBar/FooterBar";


export const PhotographerId = () => {
  const queryName = window.location.hash.replace('#/photographers/', '');
  const { getImagesByName } = useContext(FirebaseContext);
  const location = useLocation();
  const [images, setImages] = useState([]);
  const { name } = location.state;


  const gettedImages = useCallback(async () => {
    const data = await getImagesByName(queryName);
    if (data.length) {
      setImages(data);
    }
  }, [queryName, getImagesByName]);

  useEffect(() => {
    gettedImages();
  }, [gettedImages]);


  useEffect(() => {
    if (images.length) {
      const element = document.querySelector("#horizontal");
      element.addEventListener('wheel', (event) => {
        event.preventDefault();
        element.scrollBy({
          left: event.deltaY < 0 ? -50 : 50,

        });
      });
    }
  }, [images]);

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
      <FooterBar goBackText='photographers' name={name} path='/photographers' />
    </>
  );
};
