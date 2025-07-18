import React from 'react'
import FlipCard from '../FlipCard/FlipCard'

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-pink-100 px-8 py-12 flex items-start justify-center ">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 ml-10 mr-10 mt-10 ">
                {/* Left Section */}
                <div>
                    <h1 className="text-4xl font-bold text-black mb-4  font-times">2024 Consumer Buying Behavior Report</h1>
                    <p className="text-gray-700 mb-6  ">
                        Intelligence Node surveyed 1000+ US shoppers to decode the nuances of consumer behavior in an ever-evolving retail landscape. The research assesses the impact of inflation on US consumers, understanding how economic factors shape purchasing decisions, particularly as shoppers increasingly leverage digital tools like image search and online product research for the best prices. The report also spotlights several key themes surrounding the digital shopper today including the digital shelf, sustainable retail, product content, and more. This understanding is critical for retailers and brands to tailor their strategies in a changing economic landscape.
                    </p>
                    <a href="src\assets\report.pdf"
                        download className="bg-red-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-500">
                        DOWNLOAD REPORT
                    </a>
                </div>

                {/* Right Section */}
                <div>
                    <h2 className="flex flex-col text-2xl font-bold text-black mb-6">
                        <span className='text-center'>Top trends based on the survey of</span>
                        <span className='text-center'>1000 US shoppers:</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FlipCard
                            front="Price sensitivity reaches new heights"
                            back="Shoppers are more price-conscious than ever before due to inflation."
                        />
                        <FlipCard
                            front="Free, fast delivery wins hearts"
                            back="Delivery expectations continue to shape purchase decisions."
                        />
                        <FlipCard
                            front="Shoppers use tested channels to discover products online"
                            back="Search engines, reviews, and comparison tools are key discovery methods."
                        />
                        <FlipCard
                            front="Product page content gains importance"
                            back="High-quality content builds trust and drives conversions."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
