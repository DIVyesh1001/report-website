import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative  min-h-screen bg-[#fdf7ed] px-6 md:px-12 py-16 flex overflow-hidden">
            

            <div className='flex flex-col relative z-10'>
                <div className='flex flex-col'>
                    <span className='text-8xl font-times'>K-Beauty in </span>
                    <span className='text-8xl mt-5 font-times'>India:2025 Report </span>
                </div>
                <div className='mt-10'>
                    <span className='text-3xl'>Trends & Consumer insights by Datum,</span><br />
                    <span className='text-3xl '>in patnership with Kindlife & Unomer</span>
                </div>
                
                <a
                    href="src/assets/report.pdf"
                    download
                    className="inline-block mt-10 w-60 bg-[#c6714a] text-white text-sm text-center md:text-base px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-[#e0b394] shadow-md"
                >
                    DOWNLOAD REPORT
                </a>
                <div className='grid grid-cols-3 mt-10'>
                    <img src='src\assets\images\Colorlogo.png' className='bg-cover w-50'></img>
                    <img src='src\assets\images\kindlife-nobackground.png' className='bg-cover w-50'></img>
                    <img src='src\assets\images\unomer-nobackground.png' className='bg-cover w-50'></img>
                </div>
            </div>


            {/* hero image */}
            <div className='overflow-hidden'>
                <img src="src\assets\images\main-image.png" alt=""  className='absolute z-5  w-[80vh] '/>
            </div>
        </section>
    );
}
