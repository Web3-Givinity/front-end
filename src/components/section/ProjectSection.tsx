import React from 'react'
import TitleSection from '../elements/TitleSection'
import CardProject from '../fragments/CardProject'
import { projectImg1, projectImg2 } from '../../../image'

export const ProjectSection = () => {
    return (
        <>
            <section className="p-4 mt-14">
                <TitleSection label="Projects" />
                <p className="text-5xl my-6">Success Stories from Your Donations</p>
                <div className="flex gap-4 flex-grow">
                    <div className="w-1/2">
                        <CardProject image={projectImg1.src} />
                    </div>
                    <div className="w-1/2">
                        <CardProject image={projectImg2.src} />
                    </div>
                </div>
            </section>
        </>
    )
}
