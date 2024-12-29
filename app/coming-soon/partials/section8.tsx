import { mulishBold, mulishLight, outerSansRegular } from '@/app/fonts/font'
import Image from 'next/image'
import React from 'react'

const Section8 = () => {
  return (
    <div className="md:max-w-[1600px] mx-auto" data-aos="fade-up">
        <div className="flex flex-col-reverse md:flex-row gap-4 h-auto md:h-screen justify-center items-top md:p-20 p-8 ">
            <div className="w-full md:w-2/3 flex flex-col justify-between">
                <div>
                    <h4 className={`${outerSansRegular.className} text-2xl md:text-4xl mb-10`}>Q: WHEN WILL SENAM 2025 OFFICIALLY OPEN?</h4>
                    <p className={`text-xl md:text-2xl mb-8  ${mulishLight.className}`}>The new and improved Senam is gearing up to launch in <span className='font-bold'>early February 2025!</span> We’re currently in the final stages of setting up equipment and preparing the space to deliver the ultimate strength and conditioning experience.</p>
                    <p className={`text-xl md:text-2xl mb-8  ${mulishLight.className}`}>To celebrate the launch, we’re offering an exclusive pre-sale deal for early sign-ups. This limited-time offer gives you a chance to secure your spot at a significantly discounted rate before we officially open. Don’t miss out—be part of the first wave of participants to experience the new Senam!</p>
                </div>
                <div >
                    <p className={`text-xl md:text-2xl  ${mulishLight.className}`}>{`IF YOU HAVE ANY QUSTIONS. PLEASE DON'T HESITATE TO SEND AN EMAIL OR WHATSAPP US`}</p>                
                    <p className={`text-xl md:text-xl  ${mulishBold.className}`}>senamclub@gmail.com</p>                
                    <p className={`text-xl md:text-xl  ${mulishBold.className}`}>+60176062018</p>                
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <Image
                src={"/assets/comingSoon/senamClub_comingsoon7.png"}
                alt="senamClubComingSoon7"
                width={500}
                height={800}
                className="h-full w-full md:w-auto"
            />
            </div>
        </div>
    </div>
  )
}

export default Section8