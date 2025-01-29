import { relateProject } from '@/constants/relateProject'
import React from 'react'
import CardRelateProject from '../fragments/CardRelateProject'

export const RelatedProjectSection = () => {
    return (
        <>
            <section className='px-14 mt-24'>
                <h1 className='font-medium text-[45px] '>Related Projects</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                    {
                        relateProject.map((item, index) => (
                            <CardRelateProject key={index} image={item.img.src} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}
