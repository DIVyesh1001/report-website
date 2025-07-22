import React, { useState } from 'react';
import Card from '../Card/Card';
export default function KeyDataSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDownload = (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = formData;

    if (!firstName || !lastName || !email) {
        alert('Please fill in all fields.');
        return;
    }

    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1SWQbXI7qtzgFSvu0XM4cd_UN14WHKnoA/view?usp=sharing';
    link.setAttribute('download', 'KBeauty_Report.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


    return (
        <section className="bg-[#fdf7ed] px-4 md:px-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* KEY DATA Cards */}
                <div className=''>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">KEY DATA</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        <Card heading="$45B" text="beauty and personal care market size in India by 2030" />
                        <Card heading="$1.5B" text="K-beauty market size in India by 2030 " />
                        <Card heading="25.9%" text="CAGR (2024-30) for K-beauty segment" />
                        <Card heading="2X" text="increase in K-beauty buyers in India by 2030" />
                    </div>
                </div>

                {/* Tilted Image */}
                <div className="flex justify-center items-center">
                    <img
                        className="rounded-lg mb-6 transform perspective-[1000px] rotate-y-[10deg] rotate-x-[15deg] shadow-xl max-w-full w-[90%] md:w-[75%] lg:w-[70%]"
                        src="https://i.postimg.cc/28rNP03w/Screenshot-2025-07-22-120523.png"
                        alt="Key Visual"
                    />
                </div>
            </div>

            {/* KEY INSIGHTS Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">KEY INSIGHTS</h2>
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">

                        <div>
                            <strong>Gen Z & Gen Alpha Are Redefining Beauty Discovery:</strong> These consumers are tech-native, curiosity-led, and community-driven. Discovery happens through AI search, peer recommendations, influencers, and K-culture touchpoints - not through traditional advertising.
                        </div>

                        <div>
                            <strong>Cultural Influence Is Converting Curiosity Into Consumption:</strong> From K-pop and K-dramas to K-food and fashion, Korean culture is shaping beauty preferences, accelerating adoption beyond metros into Tier-2 India.
                        </div>


                        <div>
                            <strong>Influencers & Reviews Drive Decisions, Not Discounts Alone:</strong> Authentic creators, social proof, and real-world efficacy matter more than promotions. 51% are likely to buy K-Beauty endorsed by K-pop idols. 86% say reviews seal the purchase.
                        </div>

                        <div>
                            <strong>Omnichannel Matters But Digital Leads the Way:</strong> Consumers are fluid across platforms—from quick commerce to D2C websites—but digital-first discovery dominates. Offline is important for trust, but digital drives trial and repeat.
                        </div>

                        
                    </div>
                </div>

                {/* DOWNLOAD FORM */}

                <div id='download' className="bg-[#f6e7d6] place-self-center h-fit w-full shadow-xl p-8 rounded-3xl border border-[#c6714a]">
                    <h2 className="text-3xl sm:text-4xl text-center mb-6">Download the full Report</h2>
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
                            disabled={!formData.firstName || !formData.lastName || !formData.email}
                            className={`w-full text-white text-sm md:text-base px-6 py-3 rounded-full font-semibold transition duration-300 shadow-md 
        ${!formData.firstName || !formData.lastName || !formData.email
                                    ? 'bg-[#c6714a] opacity-50 cursor-not-allowed'
                                    : 'bg-[#c6714a] hover:bg-[#e0b394]'}`}
                        >
                            DOWNLOAD REPORT
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-3">
                            We're committed to keeping your information safe.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
