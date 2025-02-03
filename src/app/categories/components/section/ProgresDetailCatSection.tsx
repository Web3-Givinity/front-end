import Image from 'next/image'
import React from 'react'
import { imgProgres1, imgProgres2, imgProgres3, imgProgres4 } from '../../../../../image'

export const ProgresDetailCatSection = () => {
    return (
        <>
            <section className='px-14 py-10 bg-primary-400'>
                <div className="flex items-center justify-between">
                    <h1 className='text-4xl text-white'>Progres</h1>
                    <div className="max-w-44 flex justify-center border border-white rounded-full py-2 px-4">
                        <p className="text-white text-lg font-light">View More</p>
                    </div>
                </div>

                <div className="flex my-6 gap-4">
                    <div className="w-1/2">
                        <p className='text-lg font-light text-white opacity-50 my-4'>15 aug 2023</p>
                        <h2 className='text-white text-3xl font-semibold'>Lorem ipsum dolor sit amet</h2>

                        <p className='text-lg font-light text-white mt-4 leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud incididunt ut labore et  dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit </p>
                    </div>
                    <div className="w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <Image width={200} height={200} src={imgProgres1} alt="img-progres-1" className='w-full h-full' />
                            <Image width={200} height={200} src={imgProgres2} alt="img-progres-1" className='w-full h-full' />
                            <Image width={200} height={200} src={imgProgres3} alt="img-progres-1" className='w-full h-full' />
                            <Image width={200} height={200} src={imgProgres4} alt="img-progres-1" className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
