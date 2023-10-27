import { Routes, Route } from 'react-router-dom';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';


export const AppRouter = () => {
    return (
        <Routes>
            {/* Login and Register */}
            <Route path="/auth/*" element={<AuthRoutes />} />
            
            {/* JournalApp */}
            <Route path="/*" element={<JournalRoutes />} />

        </Routes>
    )
}
