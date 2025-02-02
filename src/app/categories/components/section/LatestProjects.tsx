import { InputRange } from '@/components/elements/inputs/InputRange'
import Image from 'next/image'
import React from 'react'
import { rectangle2 } from '../../../../../image'

export const LatestProjects = () => {
    return (
        <>
            <section className="px-14 mt-28">
                <div className="flex items-center gap-4">
                    <div className="w-5/12">
                        <h2 className="text-[45px] font-medium">Our Latest Projects</h2>
                    </div>
                    <div className="w-7/12">
                        <p className="text-lg font-light text-gray-400">Explore our newest initiatives and see how we’re making a difference. Join us in supporting these impactful efforts!</p>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="flex items-center flex-row gap-6">
                        <div className="w-1/2">
                            <Image width={500} height={500} alt="img-latest-project" src={rectangle2} className="w-full h-full" />
                        </div>
                        <div className="w-1/2 flex justify-between flex-col gap-14">
                            <div className="">
                                <h3 className="font-medium text-xl mb-2">Support Mobile Medical Clinics for Remote Communities</h3>
                                <p className="font-light text-[16px] text-gray-400">Help us bring essential healthcare to those who need it most. Your donation will fund mobile clinics, medical supplies, and health education for underserved communities.</p>
                            </div>

                            <div className="">
                                <InputRange />
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-[16px]">$221,987 Raised</p>
                                    <p className="text-[16px] text-primary-400">Goal $200000000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
