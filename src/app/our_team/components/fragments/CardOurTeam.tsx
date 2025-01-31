import Image from 'next/image'
import React from 'react'
import { BsEnvelopeFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

type CardOurTeamProps = {
    image?: string
}

export const CardOurTeam = ({ image }: CardOurTeamProps) => {
    return (
        <>
            <div className="flex flex-row items-center gap-4 h-full">
                <Image src={image || ''} width={300} height={300} alt='img-team' className='' />

                <div className="flex flex-col">
                    <h2 className='font-semibold text-lg'>Lorem Ipsum dolor</h2>
                    <p className='text-sm font-light my-2'>lorem ipsum dolor</p>

                    <div className="flex flex-row items-center gap-3 text-primary-400">
                        <BsInstagram />
                        <BsLinkedin />
                        <BsTwitter />
                        <BsEnvelopeFill />
                    </div>
                    <p className='text-sm font-light my-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing</p>

                </div>
            </div>
        </>
    )
}
