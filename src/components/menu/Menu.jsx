import React from 'react';
import './Menu.css'
import { blackMenu, whiteMenu } from '../../screens/const/Menu';
import { NavLink, useLocation } from 'react-router-dom';

export const Menu = ({ color }) => {
    const location = useLocation();
    console.log("location: ", location);

    const styles = {
        menuItem: {
            color: color,
            fontWeight: 600,
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'Raccosetta',
            letterSpacing: '1px',
            fontSize: '18px',
        },
        menuItemSelected: {
            color: color,
            fontWeight: 900,
            textDecoration: 'underline',
            textTransform: 'uppercase',
            fontFamily: 'Raccosetta',
            letterSpacing: '1px',
            fontSize: '21px',
        },
    }
    return (
        <div className='menuContainer'>
            {
                color === 'white' ?
                    whiteMenu.map((item) => {
                        if (item.id === 'logo') {
                            return (<img alt='item.id' src={item.image} width={100} key={item.id} />);
                        }
                        return (<NavLink key={item.id} style={location.pathname === item.to ? styles.menuItemSelected : styles.menuItem} to={item.to}> {item.name} </NavLink>)
                    })
                    :
                    blackMenu.map((item) => {
                        if (item.id === 'logo') {
                            return (<img alt='item.id' src={item.image} width={100} key={item.id} />);
                        }
                        return (<NavLink key={item.id} style={location.pathname === item.to ? styles.menuItemSelected : styles.menuItem} to={item.to}> {item.name} </NavLink>)
                    })
            }
        </div>
    )
}