import Image from 'next/image';
import React from 'react'

type CardExploreCategoriesProps = {
    image: string;
    title: string;
    project: string
}

const CardExploreCategories = ({ image, title, project }: CardExploreCategoriesProps) => {
    return (
        <>
            <div className="w-full h-80 flex flex-col items-center justify-center py-1 px-4 rounded-[20px] bg-primary-400 cursor-pointer">
                <div className="bg-white rounded-[20px] p-4 mb-8">
                    <Image src={image} width={500} height={500} alt="icon-medical" className="w-12 h-12" />
                </div>
                <p className="text-white font-light text-2xl mb-8">{title}</p>
                <p className="font-light text-lg">{project}</p>
            </div>
        </>
    )
}

export default CardExploreCategories