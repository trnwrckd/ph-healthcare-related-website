import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { logOut, user, isLoading } = useAuth();

    return (
        <div className="custom-nav fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid px-3">
                    
                    <a className="navbar-brand" href="https://react-firebase-authentic-c6866.web.app/">
                        <img src="./images/navlogo.webp" alt="" width="30" height="30"></img>
                        <span className="logo-text">CovidSupport™</span>
                    </a>

                    <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className = "nav-item">
                                <NavLink to="/home"  className="common" activeClassName="active">Home</NavLink>
                            </li>
                            <li className = "nav-item">
                            <NavLink to="/shop"  className="common" activeClassName="active">Shop</NavLink>
                            </li>
                            <li className = "nav-item">
                            <NavLink to="/contact"  className="common" activeClassName="active">Contact</NavLink>
                            </li>
                            <li className = "nav-item">
                                {!isLoading && <span className="fs-6 me-2">{user.displayName}</span>}
                            </li>
                            <li className = "nav-item">
                            {
                                user.email ?
                                        <button className='btn-logout' onClick={logOut}>Logout
                                            <i className="fas fa-sign-out-alt ms-1"></i>
                                        </button>
                                : <NavLink to="/login" className="common" activeClassName="active">Login</NavLink>
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            
    );
};

export default Header;