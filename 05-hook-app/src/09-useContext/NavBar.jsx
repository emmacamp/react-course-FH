import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <header className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-5 px-2">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">UseContext</Link>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav ms-auto'>
                            {/* <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to='/'>
                                Home
                            </NavLink> */}
                            <NavLink to='/' className="nav-link ">Home</NavLink>
                            <NavLink to='/about' className="nav-link" >About</NavLink>
                            <NavLink to='/login' className="nav-link" >Login</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
