import Image from 'next/image'
import React from 'react'
import { aboutImg } from '../../../image'
import { about } from '@/constants/about'

export const AboutSection = () => {
    return (
        <>
            <section className="px-14 my-24">
                <div className="flex relative items-center justify-between">
                    <div className="">
                        <div className="absolute top-0 right-1/2 mr-4">
                            <div className="max-w-72 flex justify-center border border-primary-400 rounded-full py-2 px-6">
                                <p className="text-primary-400 text-lg font-light">About Us</p>
                            </div>
                        </div>
                        <div className="p-4 max-w-xl absolute left-20 top-16 rounded-xl bg-white">
                            <p className="font-light text-xl leading-8">"We are a platform driven by the mission to connect generosity with those who need it most. Our goal is to make giving simple, impactful, and meaningful, empowering individuals to create real change in the lives of others. Together, we believe that even the smallest act of kindness can spark hope and build a brighter future for everyone."</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image width={500} height={500} alt="about-img" src={aboutImg} className="w-full h-full" />
                    </div>
                </div>

                <div className="px-28 mt-32">
                    <p className="text-5xl mb-16">Small Steps, Big Impact</p>
                    <div className="flex flex-col gap-10">
                        {
                            about.map((item, index) => (
                                <div className="flex items-center gap-4" key={index}>
                                    <div className="flex items-center justify-center w-12 h-12 bg-primary-400 rounded-full">
                                        <p className="text-2xl text-white">{item.number}</p>
                                    </div>
                                    <p className="text-2xl leading-8 text-gray-400 font-light">{item.text}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
