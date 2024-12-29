import { mulishBold, mulishLight, outerSansRegular } from '@/app/fonts/font'
import React from 'react'
import Image from 'next/image'

const Section4 = () => {
  return (
    <div className="md:max-w-[1600px] mx-auto text-black" data-aos="fade-up">
        <div className='flex flex-col-reverse md:flex-row gap-4 h-auto md:h-screen justify-center items-top md:p-20 p-8'>
            <div className='w-full md:w-1/2 '>
                <div className={`mb-8`}>
                    <h2 className={`${outerSansRegular.className} text-3xl md:text-5xl`}>TRAIN WITH PURPOSE</h2>
                </div>
                <div className={`mb-16`}>
                    <ol className={`${outerSansRegular.className} text-xl md:text-3xl list-decimal ml-5 md:ml-10`}>
                        <li>Hypertrophy/Endurance</li>
                        <li>Strength/Endurance</li>
                        <li>Maximal Output</li>
                        <li>Deload</li>
                    </ol>
                </div>

                <div className={`mb-4`}>
                    <p className={`mb-4 text-xl md:text-2xl ${mulishLight.className}`}>Every session has a <span className={`${mulishBold.className}`}>purpose</span> and is designed to help you achieve <span className={`${mulishBold.className}`}>fat loss, build muscle</span>, and improve your <span className={`${mulishBold.className}`}>overall fitness</span>.</p>
                    <p className={`mb-4 text-xl md:text-2xl ${mulishLight.className}`}>Our program runs for <span className={`${mulishBold.className}`}>2 months (8 weeks)</span> and focuses on building strength, endurance, conditioning, and cardio. <span className={`${mulishBold.className}`}>Not a short-term bootcamp like Senam did before,</span> this program is designed to help you achieve long-term results and make consistent progress over time.</p>
                    <p className={`mb-4 text-xl md:text-2xl ${mulishLight.className}`}>After 8 weeks, the program cycles back to Week 1, keeping your training balanced and purposeful. Each phase integrates GRID and GROUND sessions into a complete fitness journey</p>
                </div>

            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <Image src={'/assets/comingSoon/senamClub_comingsoon3.png'} alt='senamClubComingSoon3' width={500} height={800} className='h-full w-full md:w-auto' />

            </div>
        </div>
    </div>
  )
}

export default Section4