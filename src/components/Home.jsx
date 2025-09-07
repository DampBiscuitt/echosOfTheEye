import React from 'react'

import me from '../assets/me.jpg'
import MarqueeBackground from './MarqueeBackground'
import RevealOnScroll from './RevealOnScroll'

const Home = () => {
    return (
        <section
            id='home'
            className='min-h-screen flex items-center justify-center relative gap-25 pt-0'
        >
            {/* <RevealOnScroll> */}
            <MarqueeBackground top="top-1/4" speed={30} className="z-0" />
            <img
                src={me}
                alt="Me"
                className="w-[30vw] max-w-md h-auto rounded relative z-10"
            />
            <div className='text-left relative z-10 px-2 max-w-[40ch] mt-40'>
                <h1
                    className='text-base md:text-2xl font-bold mb-4 gradient-text loading-right
                            bg-gradient-to-r from-[#7da2c7] to-[#ff710d] bg-clip-text text-transparent leading-right'>
                    Fancy seeing you here!
                </h1>
                <p className="text-sm md:text-base">
                    Welcome to my page, my name is <b>Sandy ☺</b>.<br />
                    Enjoy the random photos and writings of things that happen in my life.
                </p>
            </div>
            {/* </RevealOnScroll> */}
        </section>
    )
}

export default Home
