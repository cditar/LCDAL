import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import './Directors.css'
import HoverVideoPlayer from 'react-hover-video-player';
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { Menu } from "../../components/menu/Menu";
import { useContext } from "react";
import { FirebaseContext } from "../../context/firebaseContext";

export const Directors = () => {
  const [background, setBackground] = useState();
  const [showBackground, setShowBackground] = useState(false);
  const { stills } = useContext(FirebaseContext);
  const isPresent = useIsPresent();

  const rightDirectors = [
    {
      name: "Anita Piñero",
      id: "ana-piñero",
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
      <Menu color={showBackground ? 'white' : 'black'} />
      <AnimatePresence>
        <motion.div
          className='directorsRowContainer'
          key='directorsRowContainerKey'
          initial={{ backgroundColor: ["rgba(0,0,0,0)"] }}
          animate={{ backgroundColor: ["#2F2B5E", "rgba(255,255,255,255)"] }}
          transition={{
            duration: 0.5,
          }}
        >
          {showBackground &&
            <HoverVideoPlayer
              videoSrc={background}
              focused={true}
            />
          }
          <Box className="columnLeftContainer">
            {leftDirectors.map((item) => (
              <AnimatePresence>
                <motion.div
                  key={item.id}
                  style={{ margin: 15, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                  initial={{ x: "130%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: '-100%', opacity: 0, backgroundColor: 'red' }}
                  transition={{ duration: Math.random(0.2, 1.2) }}
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
                </motion.div>
              </AnimatePresence>
            ))}
          </Box>
          <Box className="columnRightContainer">
            {rightDirectors.map((item) => (
              <AnimatePresence>
                <motion.div
                  key={item.id}
                  style={{ margin: 15, display: 'flex', alignItems: 'center' }}
                  initial={{ x: "130%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: '-100%', opacity: 0, backgroundColor: 'red' }}
                  transition={{ duration: Math.random(0.2, 1.2) }}
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
                </motion.div>
              </AnimatePresence>
            ))}
          </Box>
        </motion.div >
      </AnimatePresence >
      <motion.div
                initial={{ scaleX: 2 }}
                animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
                style={{ originX: isPresent ? 0 : 2 }}
                className="directorsTransition"
            />
    </>
  );
};
