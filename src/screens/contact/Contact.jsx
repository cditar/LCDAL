import React from "react";
import LOGO from '../../assets/images/LOGO_BLACK.png'
import { Menu } from '../../components/menu/Menu';
import './Contact.css'

export const Contact = () => {
  return (
    <>
      <Menu color="black" />
      <div className="contactContainer">
        <div className="leftContainer" >
          <div>Diego Río</div>
          <div><b>Productor ejecutivo</b></div>
          <div>diego@lacasadeallado.com</div>
        </div>

        <img src={LOGO} width={275} alt='logo' style={{ marginLeft: 35, marginRight: 35 }} />

        <div className="rightContainer">
          <div>Amparo Viau</div>
          <div><b>Coordinadora de producción</b></div>
          <div>amparo@lacasadeallado.com</div>
        </div>
      </div>

      <div className="centerContainer">
        <div>
          Somos un colectivo creativo audiovisual con sede en Buenos Aires, Argentina.
        </div>
        <div>
          hola@lacasadeallado.com.ar
        </div>
      </div>

    </>
  );
};
