import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from '../heroes/routes/PrivateRoute'
import { PublicRoute } from '../heroes/routes/PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route index element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}
