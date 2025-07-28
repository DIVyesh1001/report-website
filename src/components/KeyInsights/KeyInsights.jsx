import React from 'react'

const keyInsights = [
    {
        imgURL: 'https://picsum.photos/1000/1000',
        heading: 'Gen Z & Alpha Redefine Beauty Discovery',
        content: 'Discovery is led by peer recs, influencers, K-culture & AI search — not traditional ads.'
    },
    {
        imgURL: 'https://picsum.photos/1000/1000',
        heading: 'Cultural Influence Converts to Sales',
        content: 'K-pop, K-dramas & K-fashion drive beauty adoption beyond metros into Tier-2 India.'
    },
    {
        imgURL: 'https://picsum.photos/1000/1000',
        heading: 'Influencers & Reviews Seal the Deal',
        content: '51% trust K-idol endorsements; 86% say reviews drive final purchase.'
    },
    {
        imgURL: 'https://picsum.photos/1000/1000',
        heading: 'Omnichannel is Vital, But Digital Wins First',
        content: 'Trial and discovery start online — from Q-commerce to D2C and repeat buying.'
    }
]





export default function KeyInsights() {
    return (
        <div className='grid grid-rows-4 gap-5'>
            {keyInsights.map((insights) => (
                <div
                    key={insights.heading}
                    className='flex flex-row'>
                    <img src="https://picsum.photos/1000/1000" alt="" 
                    className='h-30 mr-5 ' />
                    <div className='flex flex-col h-full '>
                        <span className='text-3xl font-semibold mb-2'>{insights.heading}</span>
                        <span className='text-lg '>{insights.content}</span>
                    </div>
                </div>))}
        </div>
    )
}
