import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div />}>
                <Routes>
                    <Route index element={<Home />} path="/" />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
