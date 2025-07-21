import React,{useState} from 'react'
import FlipCard from '../FlipCard/FlipCard'

export default function KeyDataSection() {
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
        <div className='flex flex-row p-10 gap-10 bg-[#fdf7ed]'>
            <div className='grid grid-row-1 flex-1'>
                <span className='text-5xl mb-5' >KEY DATA</span>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 mr-10 mb-10'>
                    <FlipCard front={"Front"} back={"back"} />
                    <FlipCard front={"Front"} back={"back"} />
                    <FlipCard front={"Front"} back={"back"} />
                    <FlipCard front={"Front"} back={"back"} />
                </div>
                <div className=''>
                    <span className='text-5xl '>KEY INSIGHTS</span>
                    <p className='text-xl mb-5 mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aperiam unde corporis aliquid laboriosam, debitis voluptate repellat deserunt voluptas deleniti!</p>
                    <p className='text-xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aperiam unde corporis aliquid laboriosam, debitis voluptate repellat deserunt voluptas deleniti!</p>
                </div>
            </div>
            {/* form */}
            <div className='flex-1 align-center justify-center items-center'>

                <div className="bg-[#f6e7d6] shadow-xl justify-self-center p-8 rounded-4xl w-full max-w-lg border border-[#c6714a] ">
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
    )
}
