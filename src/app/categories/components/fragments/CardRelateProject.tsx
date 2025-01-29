import { InputRange } from '@/components/elements/inputs/InputRange'
import Image from 'next/image'
import React from 'react'

type CardRelateProjectProps = {
    image?: string
}

const CardRelateProject = ({ image }: CardRelateProjectProps) => {
    return (
        <>
            <div className="flex flex-col h-full">
                <Image width={280} height={280} alt="gambar" src={image || ''} className="w-auto h-auto flex-grow " />
                <p className="font-semibold text-[16px] my-3 cursor-pointer">Help the you family after Fire Loss</p>
                <InputRange />
                <div className="flex items-center justify-between mt-2">
                    <p className="text-[16px]">$221,987</p>
                    <p className="text-[16px] text-primary-400">$200000000</p>
                </div>
            </div>
        </>
    )
}

export default CardRelateProject