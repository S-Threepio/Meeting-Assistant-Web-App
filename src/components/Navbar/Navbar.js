import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Button } from '../Button';


class Navbar extends Component {

    constructor() {
        super()
    }

    componentDidMount(){
            console.log(this.props.isClicked)
    }



    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={() => this.props.clickHandler(!this.props.isClicked)}>
                    <i className='fas fa-bars'></i>
                </div>
                <h1 className="navbar-logo">MSSDA<i className="fab fa-react"></i></h1>

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
                <Button>Log out</Button>
            </nav>

        )
    }
}

export default Navbar