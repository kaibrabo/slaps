import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/kai_logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
        	<div className="header-container">
            	<header className="header">
                    <div className="logo">
						<Link to='/'>
							<img src={logo} alt="logo" className="logo invert"/>
						</Link>
                    </div>

                    <nav className="nav">
						<div>
							<Link to='/library'>
								<button className='library-btn'>Library</button>
							</Link>
						</div>
	                    <div>
	                    	<button className="login-btn">Login</button>
	                    </div>
                    </nav>
				</header>
        	</div>
        );
    }
}

export default Header;