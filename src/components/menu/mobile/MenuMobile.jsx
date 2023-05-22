import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import './MenuMobile.css';
import { blackMenu } from '../../../screens/const/Menu';
import hamburIcon from '../../../assets/images/hambur.svg';
import closeIcon from '../../../assets/images/closeIcon.svg';
import { NavLink } from 'react-router-dom';

export const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='menuMobileContainer'>
            <Button onClick={() => setIsOpen(true)}>
                <img alt='MobileMenuHamburIcon' src={hamburIcon} width={30} key='hamburIcon' />
            </Button>
            <img alt='mobileMenuLogo' className='mobileMenuLogo' src={blackMenu[2].image} width={150} key={blackMenu[2].id} />
            <Drawer
                anchor='left'
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className='drawerContainer'>
                    <Button onClick={() => setIsOpen(false)} className='buttonClose'>
                        <img alt='MobileMenuHamburIcon' src={closeIcon} width={25} key='hamburIcon' />
                    </Button>
                    <div className='drawerList'>
                        <NavLink className='mobileMenuItem' key={blackMenu[0].id} to={blackMenu[0].to}> {blackMenu[0].name} </NavLink>
                        <NavLink className='mobileMenuItem' key={blackMenu[1].id} to={blackMenu[1].to}> {blackMenu[1].name} </NavLink>
                        <NavLink className='mobileMenuItem' key={blackMenu[3].id} to={blackMenu[3].to}> {blackMenu[3].name} </NavLink>
                        <NavLink className='mobileMenuItem' key={blackMenu[4].id} to={blackMenu[4].to}> {blackMenu[4].name} </NavLink>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}