import React from 'react'

const keyInsights = [
    {
        imgURL: 'https://i.postimg.cc/3RMY40xX/brain.png',
        heading: 'Gen Z & Alpha Redefine Beauty Discovery',
        content: 'Discovery is led by peer recs, influencers, K-culture & AI search — not traditional ads.'
    },
    {
        imgURL: 'https://i.postimg.cc/y6ysxd4R/kpop.png',
        heading: 'Cultural Influence Converts to Sales',
        content: 'K-pop, K-dramas & K-fashion drive beauty adoption beyond metros into Tier-2 India.'
    },
    {
        imgURL: 'https://i.postimg.cc/tJCfY9Wd/star.png',
        heading: 'Influencers & Reviews Seal the Deal',
        content: '51% trust K-idol endorsements; 86% say reviews drive final purchase.'
    },
    {
        imgURL: 'https://i.postimg.cc/vmFN5r5Z/mobile-shopping-1.png',
        heading: 'Omnichannel is Vital, But Digital Wins First',
        content: 'Trial and discovery start online — from Q-commerce to D2C and repeat buying.'
    }
]





export default function KeyInsights() {
    return (
        <div className=''>
            <div className='mb-5'>
                <span className='text-5xl font-semibold'>KEY INSGHTS</span>
            </div>
        <div className='grid grid-rows-4 gap-5'>
            {keyInsights.map((insights) => (
                <div
                    key={insights.heading}
                    className='flex flex-col lg:flex-row'>
                    <img src={insights.imgURL} alt="" 
                    className='h-20 w-20 lg:h-20 mr-8 place-self-center ' />
                    <div className='flex flex-col h-full '>
                        <span className='text-2xl font-semibold mb-2'>{insights.heading}</span>
                        <span className='text-md '>{insights.content}</span>
                    </div>
                </div>))}
        </div>
        </div>
    )
}
