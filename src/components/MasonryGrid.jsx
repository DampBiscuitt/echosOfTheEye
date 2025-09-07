import React from 'react'

import img1 from '../assets/gallery/IMG_0658.JPG';
// Dynamically import all images from the gallery folder
const images = Object.values(import.meta.glob('../assets/gallery/*.{JPEG,JPG,jpg,jpeg,png}', { eager: true, import: 'default' }));

const MasonryGrid = () => {
    return (
        <div className="columns-2 md:columns-3 gap-2">
            {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt="Gallery"
                    className="w-full mb-2 rounded shadow break-inside-avoid"
                />
            ))}
        </div>
    )
}

export default MasonryGrid
