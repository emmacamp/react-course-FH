import { Routes, Route } from 'react-router-dom'
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarverPage, SearchPage } from '../pages'
import { Navigate } from 'react-router-dom'

export const HeroesRoutes = () => {


    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarverPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />


                    {/* <Route path="/*" element={<Navigate to='marvel' />} /> */}
                </Routes>
            </div>
        </>
    )
}