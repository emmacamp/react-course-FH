import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        console.log('Logout');
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

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ms-auto">
                        <span
                            className="nav-item nav-link text-primary"
                            to="/"
                        >
                            Emmanuel
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