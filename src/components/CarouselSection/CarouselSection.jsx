import React from 'react';

export default function CarouselSection() {
    return (
        <div className="min-h-screen bg-white px-8 py-16 flex items-start justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-22">

                {/* Left Side */}
                <div className="space-y-8 m-10">
                    {/* Mock Carousel Image */}
                    <div
                        id="carouselExampleSlidesOnly"
                        class="relative"
                        data-twe-carousel-init
                        data-twe-ride="carousel">
                        {/* <!--Carousel items--> */}
                        <div
                            class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                            {/* <!--First item--> */}
                            <div
                                class="relative float-left -mr-[100%] w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
                                data-twe-carousel-item
                                data-twe-carousel-active>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                    class="block w-full"
                                    alt="Wild Landscape" />
                            </div>
                            {/* <!--Second item--> */}
                            <div
                                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
                                data-twe-carousel-item>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                    class="block w-full"
                                    alt="Camera" />
                            </div>
                            {/* <!--Third item--> */}
                            <div
                                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
                                data-twe-carousel-item>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                    class="block w-full"
                                    alt="Exotic Fruits" />
                            </div>
                        </div>
                    </div>

                    {/* Research Findings */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Here’s what our research uncovered:</h3>
                        <ul className="list-disc pl-5 space-y-3 text-gray-800">
                            <li>To counter inflation, more shoppers plan to compare products online to find the best deals and prices.</li>
                            <li>Marketplaces like Amazon and Walmart are the most preferred shopping channels amongst the majority of shoppers.</li>
                            <li>More shoppers plan to increase retail spending in 2024 vis a vis the previous year, even amidst economic instability.</li>
                            <li>Shoppers base their buying decisions on the content and image quality of product pages.</li>
                            <li>Google Search followed by Amazon.com are the top choices to begin product search online.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="bg-white shadow-xl p-8 rounded-4xl w-full max-w-lg h-110 border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Get Your Free Copy</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">First Name<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">Last Name<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">Business Email<span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 rounded-md transition"
                        >
                            DOWNLOAD REPORT
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-3">
                            We're committed to keeping your information safe.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
