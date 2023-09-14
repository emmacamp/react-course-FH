import { Routes, Route, Navigate, } from 'react-router-dom'
import { HomePage } from "./HomePage"
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { NavBar } from './NavBar'
import { UserProvaider } from './context/UserProvaider'

export const MainApp = () => {
    return (
        <UserProvaider>
            <NavBar />
            <hr />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<AboutPage />} />
                    {/* <Route path="*" element={<h1>404</h1>} /> */}
                    <Route path="*" element={<Navigate to='/about' />} />
                </Routes>
            </div>
        </UserProvaider>
    )
}
