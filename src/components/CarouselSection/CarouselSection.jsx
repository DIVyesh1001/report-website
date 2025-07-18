import React, { useState } from 'react';
import reportPDF from '../../assets/report.pdf';

export default function CarouselSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDownload = (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = formData;

        // Simple validation
        if (!firstName || !lastName || !email) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a hidden link and trigger download
        const link = document.createElement('a');
        link.href = reportPDF;
        link.setAttribute('download', '2024_Report.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-white px-8 py-16 flex items-start justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-22">

                {/* Left Side */}
                <div className="space-y-8 m-10">
                    {/* Carousel (static preview here) */}
                    

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://placehold.co/600x400" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://placehold.co/600x400" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://placehold.co/600x400" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://placehold.co/600x400" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://placehold.co/600x400" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
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
                <div className="bg-white shadow-xl p-8 rounded-4xl w-full max-w-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Get Your Free Copy</h2>

                    <form onSubmit={handleDownload} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">
                                First Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">
                                Last Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">
                                Business Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
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
