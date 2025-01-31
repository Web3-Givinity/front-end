import { Footer } from '@/components/fragments/Footer'
import { Navbar } from '@/components/fragments/Navbar'
import Image from 'next/image'
import React from 'react'
import { imgTeam1 } from '../../../image'
import { BsEnvelopeFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { ourTeam } from '@/constants/ourTeam'
import { CardOurTeam } from './components/fragments/CardOurTeam'

type Props = {}

const OurTeam = (props: Props) => {
    return (
        <>
            <Navbar />
            <main>
                {/* hero section */}
                <section className="relative mx-14 mt-36 h-screen bg-[url('/img-ourteam.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center rounded-3xl">
                    {/* Overlay untuk efek brightness */}
                    <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

                    {/* Konten tetap di atas overlay */}
                    <div className="relative text-center">
                        <h1 className="font-bold text-[72px] text-white">Meet Our Beautiful Team</h1>
                    </div>
                </section>


                {/* team background section */}
                <section className='mx-14 my-24 flex items-center gap-4'>
                    <div className="w-4/12">
                        <h1 className='font-semibold text-4xl'>Team Background </h1>
                    </div>
                    <div className="w-8/12">
                        <p className='font-light text-lg text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    </div>
                </section>

                {/* join us section */}
                <section className='my-24 flex flex-col items-center justify-between gap-6 bg-primary-400 rounded-2xl py-10 px-24'>
                    <h1 className='font-light text-[45px] text-white'>Lorem ipsum dolor sit amet, consectetur </h1>

                    <p className='font-light text-lg text-white text-center mb-10'>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>

                    <div className=" flex justify-center border border-white rounded-full py-1 px-14 cursor-pointer">
                        <p className="text-white text-[28px] font-light">Join Us</p>
                    </div>
                </section>

                <section className='mx-14 my-24'>
                    <h1 className='font-semibold text-4xl mb-4'>Member</h1>
                    <p className='font-light text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" >
                        {
                            ourTeam.map((item, index) => (
                                <CardOurTeam image={item.image.src} />
                            ))
                        }
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default OurTeam