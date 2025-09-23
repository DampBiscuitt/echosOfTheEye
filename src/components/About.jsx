import React from 'react'
import aboutImg from '../assets/gallery/front.JPG'
import RevealOnScroll from './RevealOnScroll'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 bg-gradient-to-r from-[#7da2c7] to-[#939eb6] bg-clip-text text-transparent">More about me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-black hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text loading-right
                            bg-gradient-to-r from-[#7da2c7] to-[#ff710d] bg-clip-text text-transparent leading-right">Education</h3>
              <ul className="text-left space-y-4">
                <li>
                  <span className="block text-lg font-bold text-gray-900">B Computer Science / B Actuarial Studies</span>
                  <span className="block text-base text-gray-700">UNSW</span>
                  <span className="block text-sm text-gray-500">2023–2026</span>
                </li>
                <li>
                  <span className="block text-lg font-bold text-gray-900">Graduated Moorbank Highschool</span>
                  <span className="block text-sm text-gray-500">2022</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-black hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text loading-right
                            bg-gradient-to-r from-[#7da2c7] to-[#ff710d] bg-clip-text text-transparent leading-right">Volunteering</h3>
              <ul className="text-left space-y-4">
                <li>
                  <strong>Actuarial Society</strong>
                  <ul className="list-disc ml-6">
                    <li>Publications Subcommittee Member (2023)</li>
                    <li>Multi-media Subcommittee Member (2024)</li>
                    <li>Publications Director (2025)</li>
                  </ul>
                </li>
                <li>
                  <strong>Software Development Society</strong>
                  <ul className="list-disc ml-6">
                    <li>UI/UX Subcommittee Member (2024)</li>
                    <li>Chaos Subcommittee Member (2025)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl p-[3px] bg-gradient-to-r from-[#7da2c7] to-[#f09d62] shadow-lg min-h-[380px]">
            <div className="relative h-full w-full rounded-2xl bg-white p-[6px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img
                  src={aboutImg}
                  alt="About"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
