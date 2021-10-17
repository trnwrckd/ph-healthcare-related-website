import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const { logOut ,user} = useAuth();
    return (
        <div>
            <nav>
                <NavLink to="/home" activeClassName="active" className="common">Home</NavLink>
                <NavLink to="/secret" activeClassName="active" className="common">Secret</NavLink>
                <NavLink to="/login" activeClassName="active" className="common">Login</NavLink>
                <NavLink to="/register" activeClassName="active" className="common">Register</NavLink>
                {user.email && <button className='btn btn-danger' onClick={logOut}>Logout</button>}
            </nav>
            <div>
                {
                    user.displayName && <p>Welcome {user.displayName} </p>
                }
            </div>
        </div>
    );
};

export default Header;