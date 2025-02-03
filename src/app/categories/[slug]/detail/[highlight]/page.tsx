'use client'

import { Footer } from '@/components/fragments/Footer';
import { Navbar } from '@/components/fragments/Navbar';
import { use } from 'react'
import { BsChevronRight } from 'react-icons/bs';
import { HeroDetailCatSection } from '@/app/categories/components/section/HeroDetailCatSection';
import { ProblemSolutionSection } from '@/app/categories/components/section/ProblemSolutionSection';
import { ProgresDetailCatSection } from '@/app/categories/components/section/ProgresDetailCatSection';
import { RelatedProjectSection } from '@/app/categories/components/section/RelatedProjectSection';
import { ModalDonate } from '@/app/categories/components/fragments/ModalDonate';
import { useState } from 'react';
import { dataDonors } from '@/constants/dataDonors';


export default function DetailHighlight({ params }: { params: Promise<{ slug: string; highlight: string }> }) {

    const [showModal, setShowModal] = useState(false)
    const { slug, highlight } = use(params)

    return (
        <>
            <Navbar />
            <main className="">
                <div className="h-screen px-14">
                    <div className="flex flex-row items-center gap-4 text-gray-400 text-sm mt-28">
                        <p>Categories</p>
                        <span><BsChevronRight /></span>
                        <p>{decodeURIComponent(slug)}</p>
                        <span><BsChevronRight /></span>
                        <p className='text-primary-400'>detail</p>
                    </div>
                    <HeroDetailCatSection params={params} setShowModal={setShowModal} />
                </div>

                {/* problem & solution section */}
                <ProblemSolutionSection />

                {/* progres detail section*/}
                <ProgresDetailCatSection />


                <section className='px-14 mt-24'>
                    <h1 className='text-[45px] font-semibold mb-4'>Donors</h1>
                    <table className="w-full border-separate border-spacing-y-4">
                        <thead className={`bg-primary-400 border-gray-200 border-b-2 text-white`}>
                            <tr className='rounded-lg'>
                                <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">No</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Nama Lengkap</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Jenis Kelamin</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Alamat</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y divide-gray-100`}>

                            {
                                dataDonors.map((item, index) => (

                                    <tr className={`bg-white shadow-lg `} key={index}>
                                        <td className={`p-3 text-sm}  whitespace-nowrap`}>
                                            {index + 1}
                                        </td>
                                        <td className={`p-3 text-sm whitespace-nowrap`}>
                                            {item.name}
                                        </td>
                                        <td className={`p-3 text-sm whitespace-nowrap`}>
                                            {item.jenisKelamin}
                                        </td>
                                        <td className={`p-3 text-sm  whitespace-nowrap`}>
                                            {item.alamat}
                                        </td>
                                        <td className={`p-3 text-sm  whitespace-nowrap`}>
                                            {item.status}
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </section>

                {/* project relate section */}
                <RelatedProjectSection />
            </main>

            {/* modal donate */}
            <ModalDonate isVisible={showModal} onClose={() => setShowModal(false)} />
            <Footer />
        </>
    )
}
