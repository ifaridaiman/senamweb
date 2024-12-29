import { mulishBold, mulishLight, outerSansRegular } from '@/app/fonts/font'
import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    <div className="md:max-w-[1600px] mx-auto" data-aos="fade-up">
        <div className='flex flex-col md:flex-row gap-4 h-auto md:h-screen justify-center items-top md:p-20 p-8'>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <Image src={'/assets/comingSoon/senamClub_comingsoon4.png'} alt='senamClubComingSoon4' width={500} height={800} className='h-full w-full md:w-auto' />
            </div>
            <div className='w-full md:w-1/2'>
                <div className='mb-8'>
                    <h2 className={`${outerSansRegular.className} text-3xl md:text-5xl`}>KNOW YOUR SESSION</h2>
                </div>
                <div className='mb-8'>
                    <h4 className={`${outerSansRegular.className} text-2xl md:text-4xl mb-2`}>GRID</h4>
                    <p className={`${mulishLight.className} text-xl md:text-2xl`}>Our GRID sessions prioritize strength, power, muscular endurance, and functional and hypertrophy training. By progressively overloading movement patterns, improving range of motion, and refining technique, GRID helps you build a strong, balanced, and resilient body.</p>
                </div>
                <div className='mb-8'>
                    <h4 className={`${outerSansRegular.className} text-2xl md:text-4xl mb-2`}>GROUND</h4>
                    <p className={`${mulishLight.className} text-xl md:text-2xl`}>Our GROUND sessions combine conditioning and functional movements to improve your overall cardiovascular work capacity and stamina. These workouts are designed to challenge and elevate your fitness to the next level.</p>
                </div>
                <div className='mb-8'>
                    <p className={`${mulishLight.className} text-xl md:text-2xl`}>Each day, at Senam, there are <span className={`${mulishBold.className}`}>two sessions that run simultaneously,</span> side by side: GRID (Strength Zone) and GROUND (Conditioning Zone).</p>
                </div>
                <div className='mb-8'>
                    <p className={`${mulishLight.className} text-xl md:text-2xl`}><span className={`${mulishBold.className}`}>The choice is completely up to you</span>—you can alternate between <span className={`${mulishBold.className}`}>GRID and GROUND</span> sessions each day, depending on your goals and how you feel.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Section5