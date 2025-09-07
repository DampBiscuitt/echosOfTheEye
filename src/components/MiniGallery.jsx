import React from 'react';
import { useNavigate } from 'react-router-dom';
import Viewer from './viewer';
import RevealOnScroll from './RevealOnScroll';

const miniGallery = () => {
  const navigate = useNavigate();
  return (
    <section
      id="gallery"
      className="min-h-screen items-center py-25"
    >
      {/* <RevealOnScroll> */}
        <div className='max-w-3xl mx-auto px-4 ml-30'>
          <h2 className='text-left text-3xl font-bold mb-8 bg-gradient-to-r from-[#7da2c7] to-[#ff710d] bg-clip-text text-transparent'>
            {" "}
            Gallery
          </h2>

        </div>
        <Viewer />

        <div className="max-w-3xl mx-auto mt-5">
          <button
            className='ml-4 px-5 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#7da2c7] to-[#939eb6] shadow transition-opacity hover:opacity-80 outline-none border-none cursor-pointer text-base'
            type="button"
            onClick={() => navigate('/gallery')}
          >
            See more here...
          </button>
        </div>
      {/* </RevealOnScroll> */}
    </section>
  )
}

export default miniGallery
