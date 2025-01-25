import Image from 'next/image'
import React from 'react'
import { nenekImg } from '../../../image'
import { InputRange } from '../elements/inputs/InputRange'

export const CardHighlight = () => {
    return (
        <>
            <div className="flex flex-col">
                <Image width={280} height={280} alt="gambar" src={nenekImg} className="w-auto h-auto" />
                <p className="font-semibold text-[16px] my-3">Help the you family after Fire Loss</p>
                <InputRange />
                <div className="flex items-center justify-between mt-2">
                    <p className="text-[16px]">$221,987</p>
                    <p className="text-[16px] text-primary-400">$200000000</p>
                </div>
            </div>
        </>
    )
}
