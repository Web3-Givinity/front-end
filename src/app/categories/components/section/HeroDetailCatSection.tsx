import Image from 'next/image'
import React from 'react'
import { use } from 'react'
import { imgDetailHighlight } from '../../../../../image'
import { InputRange } from '@/components/elements/inputs/InputRange'
import Button from '@/components/elements/buttons/Button'
import { BsShareFill } from 'react-icons/bs'
import { DoughnutChart } from '../elements/DoughnutChart'

export const HeroDetailCatSection = ({ params, setShowModal }: { params: Promise<{ slug: string; highlight: string }>, setShowModal: (value: boolean) => void }) => {

    const { slug, highlight } = use(params)

    return (
        <>
            <section className='mt-20 flex items-center justify-between gap-4'>
                <div className="w-7/12 flex flex-col">
                    <h1 className='font-semibold text-4xl'>{decodeURIComponent(highlight)}</h1>
                    <Image width={200} height={200} src={imgDetailHighlight} alt="img-highlight-detail" className='w-full h-full my-6' />
                    <InputRange />
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-[16px]">$221,987 Raised</p>
                        <p className="text-[16px] text-primary-400">Goal $200000000</p>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <Button type="button" className="w-full py-[10px] px-8 text-white bg-primary-400 rounded-full" label="Donate" onClick={() => { setShowModal(true) }} />
                        <BsShareFill size={25} className='cursor-pointer' />
                    </div>
                </div>
                <div className="w-5/12 ml-10">
                    <DoughnutChart />
                </div>
            </section>
        </>
    )
}
