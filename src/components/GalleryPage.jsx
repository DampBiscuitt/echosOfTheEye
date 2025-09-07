import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import MasonryGrid from './MasonryGrid';

const GalleryPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <NavBar />
            <main className="max-w-5xl mx-auto px-4 py-10">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className='mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7da2c7] to-[#939eb6] shadow transition-opacity hover:opacity-80 outline-none border-none'
                >
                    ← Back
                </button>
                <MasonryGrid />
            </main>
        </div>
    );
};

export default GalleryPage;
