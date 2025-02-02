import React from 'react'
import Image from 'next/image'
import { imgHighlight1, imgHighlightSection2, imgHighlightSection3, imgHighlightSection4, nenekImg } from '../../../image'
import { InputRangeWithIcon } from '../elements/inputs/InputRangeWithIcon'
import { CardHighlight } from '../fragments/CardHighlight'
import Button from '../elements/buttons/Button'

export const HighlightSection = () => {
    return (
        <>
            <section className="px-14 my-24">
                <div className="max-w-56 flex justify-center border border-primary-400 rounded-full py-2 px-4">
                    <p className="text-primary-400 text-lg font-light">Highlight Campage</p>
                </div>
                <p className="text-5xl my-6">Join the Movement to Make a Difference</p>

                <div className="flex items-start gap-4">
                    <div className="w-1/2 h-full">
                        <div className="flex flex-col h-auto">
                            <div className="relative flex flex-col justify-center bg-[url('/nenek.png')] bg-no-repeat bg-cover rounded-2xl py-20 px-8 min-h-[520px]">
                                {/* Overlay untuk efek brightness */}
                                <div className="absolute inset-0 bg-highlight rounded-2xl"></div>

                                {/* Konten tetap di atas overlay */}
                                <div className="relative max-w-80">
                                    <p className="text-left leading-[40px] text-3xl text-white mb-6">Lorem ipsum dolor sit amet, consec tetur adipi sicing elit, </p>
                                    <Button className='py-2 px-16 rounded-full bg-primary-400 text-white font-light' label='Donate' />
                                </div>


                            </div>
                            <p className="font-semibold text-lg my-3">Help the you family after Fire Loss</p>
                            <InputRangeWithIcon />
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-[16px]">$221,987 Raised</p>
                                <p className="text-[16px] text-primary-400">Goal $200000000</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <CardHighlight img={imgHighlight1.src} highlight='Help the you family after Fire Loss' />
                            <CardHighlight img={imgHighlightSection2.src} highlight='Help the you family after Fire Loss' />
                            <CardHighlight img={imgHighlightSection3.src} highlight='Help the you family after Fire Loss' />
                            <CardHighlight img={imgHighlightSection4.src} highlight='Help the you family after Fire Loss' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
