import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Menu } from '../../components/menu/Menu';
import './Directors.css'
import { useFirestoreVideos } from '../../hooks/useFirestoreVideos';
import HoverVideoPlayer from 'react-hover-video-player';

export const Directors = () => {
  const [background, setBackground] = useState();
  const [showBackground, setShowBackground] = useState(true);
  const { stills } = useFirestoreVideos();

  const rightDirectors = [
    {
      name: "Anita Piñero",
      id: "anita-piñero",
      video: stills[1]
    },
    {
      name: "Bruno Adamovsky",
      id: "bruno-adamovsky",
      video: stills[5]
    },
    {
      name: "Miranda Johansen",
      id: "miranda-johansen",
      video: stills[7]
    },
    {
      name: "Lola Piñero",
      id: "lola-piñero",
      video: stills[3]
    },
  ];

  const leftDirectors = [
    {
      name: "Rafael Nir",
      id: "rafael-nir",
      video: stills[6],
    },
    {
      name: "Tomás Curland",
      id: "tomas-curland",
      video: stills[4],
    },
    {
      name: "Malu Boruchowicz",
      id: "malu-boruchowics",
      video: stills[0]
    },
    {
      name: "Pedro Adamovsky",
      id: "pedro-adamovsky",
      video: stills[2],
    },
  ];

  const showBackgroundAndName = (item) => {
    setShowBackground(true);
    setBackground(item.video)
  }

  return (
    <>
      <Menu color='black' />
      <div className='directorsRowContainer'>
        {showBackground &&
          <HoverVideoPlayer
            videoSrc={background}
            focused={true}
          />
        }
        <Box className="columnLeftContainer">
          {leftDirectors.map((item) => (
            <div style={{ margin: 15, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
              onMouseOver={() => showBackgroundAndName(item)}
              onMouseLeave={() => setShowBackground(false)}
            >
              <NavLink
                to={`/directors/${item.id}`}
                state={{ name: item.name, id: item.id }}
                className="directorsName"
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </Box>
        <Box className="columnRightContainer">
          {rightDirectors.map((item) => (
            <div style={{ margin: 15, display: 'flex', alignItems: 'center' }}
              onMouseOver={() => showBackgroundAndName(item)}
              onMouseLeave={() => setShowBackground(false)}
            >
              <NavLink
                to={`/directors/${item.id}`}
                state={{ name: item.name, id: item.id }}
                className="directorsName"
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </Box>
      </div>
    </>
  );
};
