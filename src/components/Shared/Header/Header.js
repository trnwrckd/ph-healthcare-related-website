import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { logOut, user, isLoading } = useAuth();

    return (
        <div className="custom-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"></img>
                    </a>

                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className = "nav-item">
                                    <NavLink to="/home"  className="common" activeClassName="active">Home</NavLink>
                                </li>
                                <li className = "nav-item">
                                <NavLink to="/shop"  className="common" activeClassName="active">Shop</NavLink>
                                </li>
                                <li className = "nav-item">
                                <NavLink to="/login"  className="common" activeClassName="active">Login</NavLink>
                                </li>
                                <li className = "nav-item">
                                    {!isLoading && <span>{user.displayName}</span>}
                                </li>
                                <li className = "nav-item">{user.email && <button className='btn btn-danger' onClick={logOut}>Logout</button>}</li>
                            </ul>
                        </div>
                        </div>
                </div>
                </nav>
            <nav className="d-flex justify-content-end align-items-center me-5">
                
            </nav>
            <div>
            </div>
        </div>
    );
};

export default Header;