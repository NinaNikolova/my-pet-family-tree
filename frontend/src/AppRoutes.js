import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PetPage from './pages/Pet/PetPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<HomePage />} />
            <Route path="/tag/:tag" element={<HomePage />} />
            <Route path="/pet/:id" element={<PetPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
