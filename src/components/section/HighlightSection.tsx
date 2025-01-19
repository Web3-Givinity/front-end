import React from 'react'
import TitleSection from '../elements/TitleSection'
import Image from 'next/image'
import { nenekImg } from '../../../image'
import { InputRangeWithIcon } from '../elements/inputs/InputRangeWithIcon'
import { CardHighlight } from '../fragments/CardHighlight'

export const HighlightSection = () => {
    return (
        <>
            <section className="p-4 mt-14">
                <TitleSection label="Higlight Campage" />
                <p className="text-5xl my-6">Join the Movement to Make a Difference</p>

                <div className="flex items-start gap-4">
                    <div className="w-1/2">
                        <div className="flex flex-col h-auto">
                            <Image width={500} height={500} alt="gambar" src={nenekImg} className="w-full h-full" />
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
                            <CardHighlight />
                            <CardHighlight />
                            <CardHighlight />
                            <CardHighlight />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
