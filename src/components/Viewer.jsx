import React, { useState } from 'react'

import img6 from '../assets/gallery/IMG_0658.JPG';
import img2 from '../assets/gallery/IMG_0681.JPG';
import img4 from '../assets/gallery/IMG_0712.JPG';
import img5 from '../assets/gallery/IMG_0692.JPG';
import img1 from '../assets/gallery/flower.JPG';

const Viewer = () => {

    const [expandedIndex, setExpandedIndex] = useState(0);

    const sliding = [
        { image: img1 },
        { image: img2 },
        { image: img4 },
        { image: img5 },
        { image: img6 },

    ];

    const handleClick = (index) => {
        setExpandedIndex(index);
    }

    return (
        <div className='px-8'>
            <div className='max-w-7xl h-[50vh] flex items-center justify-center gap-1'>
                {sliding.map((panel, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`h-full rounded-2xl bg-white cursor-pointer transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? 'w-[60%]' : 'w-[10%] hover:bg-black'}`}
                    >
                        <img src={panel.image} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Viewer
