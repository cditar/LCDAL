import React from 'react';
import './Menu.css'
import { blackMenu, whiteMenu } from '../../screens/const/Menu';
import { NavLink } from 'react-router-dom';

export const Menu = ({ color }) => {
    const styles = {
        menuItem: {
            color: color,
            fontWeight: 800,
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'Raccosetta',
            letterSpacing: '1px',
            fontSize: '18px',
            '&:hover': {
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                color: color === 'white' ? 'black' : 'white'
            }
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
                        return (<NavLink key={item.id} style={styles.menuItem} to={item.to}> {item.name} </NavLink>)
                    })
                    :
                    blackMenu.map((item) => {
                        if (item.id === 'logo') {
                            return (<img alt='item.id' src={item.image} width={100} key={item.id} />);
                        }
                        return (<NavLink key={item.id} style={styles.menuItem} to={item.to}> {item.name} </NavLink>)
                    })
            }
        </div>
    )
}