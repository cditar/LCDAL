import React from "react";
import LOGO from '../../assets/images/LOGO_BLACK.png'
import { Menu } from "../../components/menu/desktop/Menu";
import './Contact.css'
import { motion, useIsPresent } from "framer-motion";
import { useMediaQuery } from "@material-ui/core";
import { MenuMobile } from "../../components/menu/mobile/MenuMobile";

export const Contact = () => {
  const matches = useMediaQuery('(max-width:720px)');
  const isPresent = useIsPresent();

  return (
    <>
      {matches ? <MenuMobile /> : <Menu color="black" />}
      <div className="contactContainer">
        <div className="leftContainer" >
          <div>Diego Río</div>
          <div><b>Productor ejecutivo</b></div>
          <div>diego@lacasadeallado.com.ar</div>
        </div>

        <img src={LOGO} width={275} alt='logo' style={{ marginLeft: 35, marginRight: 35 }} />

        <div className="rightContainer">
          <div>Paloma Torras</div>
          <div><b>Productora</b></div>
          <div>palomatorras@lacasadeallado.com.ar</div>
        </div>
      </div>

      <div className="centerContainer">

      </div>
      <motion.div
        initial={{ scaleX: 2 }}
        animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
        style={{ originX: isPresent ? 0 : 2 }}
        className="contactTransition"
      />
    </>
  );
};
