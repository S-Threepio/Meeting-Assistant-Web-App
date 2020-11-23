import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Button } from '../Button';
import { Prev } from 'react-bootstrap/esm/PageItem';


class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={() => this.props.clickHandler(!this.props.isClicked)}>
                    <i className='fas fa-bars'></i>
                </div>
                <h1 className="navbar-logo">{this.props.title}<i className="fab fa-react"></i></h1>

                <ul className={this.props.isClicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item, index) => {
                            return (<li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                            )
                        })
                    }

                </ul>
                <Button><a style={{ color: 'black', textDecoration: 'none' }} href='/'>Log out</a></Button>
            </nav>

        )
    }
}

export default Navbar