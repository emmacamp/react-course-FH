import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/context/AuthProvider';


export const Navbar = () => {

    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link"
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse  w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ms-auto">
                        <span
                            className="nav-item nav-link text-primary"
                            to="/"
                        >
                            {user?.name}
                        </span>
                        <button
                            onClick={onLogout}
                            className="nav-item nav-link"
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}