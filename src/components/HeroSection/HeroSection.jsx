import React from 'react';

export default function HeroSection() {
    return (
        <section className="grid max-w-screen-full px-15 bg-[#fdf7ed]  lg:gap-8 xl:gap-0  lg:grid-cols-12">
            
            {/* Content */}
            <div className="mr-auto lg:col-span-7">
                <div>
                    <h1 className=" text-5xl md:text-7xl lg:text-7xl leading-tight">
                        K-Beauty in
                    </h1>
                    <h1 className="font-times text-5xl md:text-7xl lg:text-7xl mt-1 leading-tight">
                        India: 2025 Report
                    </h1>
                </div>

                <div className="text-xl md:text-2xl mt-5 mb-10 leading-relaxed">
                    <p>Trends & Consumer insights by Datum.</p>
                </div>

                <a
                    href="#download"
                    className="inline-block w-60 bg-[#c6714a] text-white text-center text-sm md:text-base px-6 py-3 mt-1 mb-5 rounded-full font-semibold transition duration-300 hover:bg-[#e0b394] shadow-md"
                >
                    DOWNLOAD REPORT
                </a>

                {/* Partner Logos */}
                <div className="grid  grid-cols-3 gap-4 mt-8 mb-8 sm:mb-2">
                    <img src="https://i.postimg.cc/28RnmZfT/Colorlogo.png" alt="Datum" className="object-contain w-full h-8" />
                    <img src="https://i.postimg.cc/zGqWHYvg/kindlife-nobackground.png" alt="Kindlife" className="object-contain w-full h-8 " />
                    <img src="https://i.postimg.cc/jdHPjSxT/unomer-nobackground.png" alt="Unomer" className="object-contain w-full h-8" />
                </div>
            </div>

            {/* Hero Image */}
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
                <img
                    src="https://i.postimg.cc/0yZSpXKH/main-image.png"
                    alt="Main Visual"
                    className="w-full max-w-[400px] md:max-w-[600px] rounded-xl lg:max-w-[70vh] object-contain z-0"
                />
            </div>
        </section>
    );
}
