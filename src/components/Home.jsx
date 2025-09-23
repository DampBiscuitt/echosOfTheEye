import React from 'react'

import me from '../assets/me.jpg'
import codeforcesLogo from '../assets/codeforcesLogo.png';
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
                {/* Social Media Icons Container */}
                <div className="flex gap-4 mt-6 items-center">
                    {/* Replace these with your actual social media links and SVGs or icon components */}
                    <a href="https://github.com/DampBiscuitt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg className="w-6 h-6 text-neutral-700 hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sandyktran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg className="w-6 h-6 text-neutral-700 hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" /></svg>
                    </a>
                    <a href="mailto:sandykvtran@email.com" aria-label="Email">
                        <svg className="w-6 h-6 text-neutral-600 hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z" /></svg>
                    </a>
                    <a href="https://codeforces.com/profile/DampBiscuitt" target="_blank" rel="noopener noreferrer" aria-label="Codeforces" className="group">
                        <img src={codeforcesLogo} alt="Codeforces" className="h-5 w-auto transition-transform group-hover:filter group-hover:brightness-0 group-hover:contrast-200" />
                    </a>
                </div>
            </div>
            {/* </RevealOnScroll> */}
        </section>
    )
}

export default Home
