import { Routes, Route } from 'react-router-dom'
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarverPage, SearchPage } from '../pages'

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

                </Routes>
            </div>
        </>
    )
}
