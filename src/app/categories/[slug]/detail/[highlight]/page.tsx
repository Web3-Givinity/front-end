'use client'

import { Footer } from '@/components/fragments/Footer';
import { Navbar } from '@/components/fragments/Navbar';
import { BsChevronRight } from 'react-icons/bs';
import { HeroDetailCatSection } from '@/app/categories/components/section/HeroDetailCatSection';
import { ProblemSolutionSection } from '@/app/categories/components/section/ProblemSolutionSection';
import { ProgresDetailCatSection } from '@/app/categories/components/section/ProgresDetailCatSection';
import { RelatedProjectSection } from '@/app/categories/components/section/RelatedProjectSection';
import { ModalDonate } from '@/app/categories/components/fragments/ModalDonate';
import { useState } from 'react';


export default function DetailHighlight({ params }: { params: { slug: string; highlight: string } }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Navbar />
            <main className="">
                <div className="h-screen px-14">
                    <div className="flex flex-row items-center gap-4 text-gray-400 text-sm mt-28">
                        <p>Categories</p>
                        <span><BsChevronRight /></span>
                        <p>{params.slug}</p>
                        <span><BsChevronRight /></span>
                        <p className='text-primary-400'>detail</p>
                    </div>
                    <HeroDetailCatSection params={params} setShowModal={setShowModal} />
                </div>

                {/* problem & solution section */}
                <ProblemSolutionSection />

                {/* progres detail section*/}
                <ProgresDetailCatSection />

                {/* project relate section */}
                <RelatedProjectSection />
            </main>
            <ModalDonate isVisible={showModal} onClose={() => setShowModal(false)} />
            <Footer />
        </>
    )
}
