import React from "react";
import LOGO from '../../assets/images/LOGO_BLACK.png'
import { Menu } from '../../components/menu/Menu';
import './Contact.css'
import { motion, useIsPresent } from "framer-motion";

export const Contact = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <Menu color="black" />
      <div className="contactContainer">
        <div className="leftContainer" >
          <div>Diego Río</div>
          <div><b>Productor ejecutivo</b></div>
          <div>diego@lacasadeallado.com.ar</div>
        </div>

        <img src={LOGO} width={275} alt='logo' style={{ marginLeft: 35, marginRight: 35 }} />

        <div className="rightContainer">
          <div>Amparo Viau</div>
          <div><b>Coordinadora de producción</b></div>
          <div>amparo@lacasadeallado.com.ar</div>
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