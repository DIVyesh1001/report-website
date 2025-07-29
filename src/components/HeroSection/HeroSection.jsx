import React from 'react';

export default function HeroSection() {
    return (
        <section className="grid max-w-screen-full px-15 bg-[#9EAEFE]  lg:gap-8 xl:gap-8 lg:grid-cols-12">
            
            {/* Content */}
            <div className="mr-auto lg:ml-15 lg:mt-8 lg:col-span-6 ">
                <div>
                    <h1 className=" text-5xl md:text-7xl lg:text-7xl ">
                        K-Beauty in
                    </h1>
                    <h1 className="font-times text-5xl md:text-7xl lg:text-7xl mt-1 leading-tight">
                        India: 2025 Report
                    </h1>
                </div>

                <div className="text-xl md:text-2xl mt-5 mb-8 leading-relaxed">
                    <p>Trends & Consumer insights by Datum.</p>
                </div>

                <a
                    href="#download"
                    className="inline-block w-60 bg-[#c6714a] text-white text-center text-sm md:text-base px-6 py-3 mt-1 mb-5 rounded-full font-semibold transition duration-300 hover:bg-[#e0b394] shadow-md"
                >
                    DOWNLOAD REPORT
                </a>

                {/* Partner Logos */}
                <div className="grid  grid-cols-3 pl-left gap-4 mt-8 mb-8 sm:mb-2">
                    <div className=''>
                        <img src="https://i.postimg.cc/28RnmZfT/Colorlogo.png" alt="Datum" className="object-contain  w-full h-8" />
                    </div>
                    <div className=''>
                    <img src="https://i.postimg.cc/zGqWHYvg/kindlife-nobackground.png" alt="Kindlife" className="object-contain  w-full h-8" />

                    </div>
                    <img src="https://i.postimg.cc/jdHPjSxT/unomer-nobackground.png" alt="Unomer" className="object-contain  w-full h-8" />
                </div>
                <div className=" text-xl md:text-2xl mt-10 mb-8 ">
                    <span className='text-xl'>From K-pop to K-dramas, culture is fueling the rise of K-Beauty in India. With data from 30 cities, this report reveals what’s driving the next beauty wave.</span>
                </div>
            </div>

            {/* Hero Image */}
            <div className="lg:mt-0 lg:col-span-6  lg:flex rounded-xl ">
                <img
                    src="https://i.postimg.cc/VNFs9DSf/kindlife-one-pag.png"
                    alt="Main Visual"
                    className="w-full max-w-[400px] md:max-w-[600px] rounded-xl lg:max-w-[100vh]   object-cover z-0"
                />
            </div>

        </section>
    );
}
