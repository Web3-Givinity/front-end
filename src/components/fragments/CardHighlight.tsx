'use client'

import Image from 'next/image'
import React from 'react'
import { InputRange } from '../elements/inputs/InputRange'
import { useRouter } from 'next/navigation';


type CardHighlightProps = {
    highlight?: string;
    categorySlug?: string[];
    img?: string;
}
export const CardHighlight = ({ highlight, img, categorySlug }: CardHighlightProps) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/categories/${categorySlug}/detail/${highlight}`)
    }

    return (
        <>
            <div className="flex flex-col">
                <Image width={280} height={280} alt="gambar" src={img || ''} className="w-auto h-auto" />
                <p className="font-semibold text-[16px] my-3 cursor-pointer" onClick={handleClick}>{highlight}</p>
                <InputRange />
                <div className="flex items-center justify-between mt-2">
                    <p className="text-[16px]">$221,987</p>
                    <p className="text-[16px] text-primary-400">$200000000</p>
                </div>
            </div>
        </>
    )
}
