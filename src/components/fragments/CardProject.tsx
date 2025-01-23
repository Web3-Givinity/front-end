import Image from 'next/image'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

type CardProjectProps = {
    image: string;
}

const CardProject = ({ image }: CardProjectProps) => {
    return (
        <>
            <div className="group flex flex-col relative overflow-hidden cursor-pointer">
                <Image width={500} height={500} alt="gambar" src={image} className="w-full h-full" />

                <div className="p-10 absolute -bottom-24 transition-all duration-300 ease-linear bg-card-gradient group-hover:bottom-0 group-hover:py-24 group-hover:bg-card-gradient-hover">
                    <p className="text-sm text-primary-400 mb-4 group-hover:text-black">aus, Januari 2021</p>
                    <p className="text-sm text-white mb-16 group-hover:text-4xl group-hover:font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore illo laborum sequi earum sed, dolorem harum.</p>

                    <div className="flex justify-center">
                        <button type="button" className="py-2 px-4 flex items-center gap-1 rounded-full bg-white text-primary-400 text-sm">See The Project
                            <span><BsArrowRightShort size={30} /></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProject