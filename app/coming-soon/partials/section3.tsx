import { mulishBold, mulishLight, outerSansRegular } from '@/app/fonts/font'
import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <div className="md:max-w-[1600px] mx-auto" data-aos="fade-up">
        <div className='flex flex-col md:flex-row gap-4 h-auto md:h-screen justify-center items-top md:p-20 p-8'>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <Image src={'/assets/comingSoon/senamClub_comingsoon2.png'} alt='senamClubComingSoon2' width={500} height={800} className='h-full w-full md:w-auto' />
            </div>
            <div className='w-full md:w-1/2'>
                <div className={`mb-4`}>
                    <h2 className={`${outerSansRegular.className} text-3xl md:text-5xl`}>WHAT WE OFFER</h2>
                </div>
                <div className={`mb-4`}>
                    <p className={`${mulishLight.className} text-xl md:text-2xl`}>Senam Hub is a <span className={`${mulishBold.className}`}>strength and conditioning space</span> designed for <span className={`${mulishBold.className}`}>all fitness levels and age groups</span>. Offering a modern and inspiring environment that blends <span className={`${mulishBold.className}`}>lifestyle and community</span>, Senam is dedicated to delivering an elite workout experience.</p>
                </div>
                <div className={`mb-4`}>
                    <h4 className={`${mulishBold.className} text-xl md:text-2xl`}>Senam Wangsa Maju Membership</h4>
                    <p className={`${mulishLight.className} text-xl md:text-2xl`}>Memberships are <span className={`${mulishBold.className}`}>2 months commitment</span> that auto-renew every 2 month. You can opt to have your contract expire at the end of the 2 months before it auto-renews at no cost.</p>
                </div>
                <div className={`mb-4`}>
                    <h4 className={`${mulishBold.className} text-xl md:text-2xl`}>What Does Senam Membership Give You?</h4>
                    <ul className={`${mulishLight.className} text-xl md:text-2xl list-disc ml-5 md:ml-8`}>
                        <li><span className={`${mulishBold.className}`}>Unlimited access</span> to 20+ group strength & conditioning sessions weekly.</li>
                        <li><span className={`${mulishBold.className}`}>Nutritional advice</span> to complement your training.</li>
                        <li>Exciting <span className={`${mulishBold.className}`}>challenges</span> to keep you motivated and progressing.</li>
                        <li>Exclusive access to our <span className={`${mulishBold.className}`}>private online community</span> for support and engagement.</li>
                        <li>Special <span className={`${mulishBold.className}`}>events</span> and <span className={`${mulishBold.className}`}>workshops</span> throughout the year.</li>
                        <li>Complimentary <span className={`${mulishBold.className}`}>InBody checkups</span> to track your progress.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3