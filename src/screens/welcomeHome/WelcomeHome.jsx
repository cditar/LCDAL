import './WelcomeHome.css';
import { Grid } from '@mui/material';
import { NavLink } from "react-router-dom";
import LOGO_WELCOME from '../../assets/images/LOGO_WELCOME_BLANCO.png';

export const WelcomeHome = () => (
    <Grid className='container'>
        <iframe src="https://player.vimeo.com/video/751750588?h=8f671cf938&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;background=1&amp;muted=1&amp;player_id=0&amp;app_id=58479" width="1360" height="763" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="TE ENCONTRE | JULIETA VENEGAS" className="videoBackground"></iframe>
            <NavLink to={`/works`} className='worksLinks' >
                <img src={LOGO_WELCOME} alt='logo_home' />
            </NavLink>
    </Grid>
);