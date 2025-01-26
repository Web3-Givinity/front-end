'use client'

import { Footer } from "@/components/fragments/Footer"
import { Navbar } from "@/components/fragments/Navbar"
import Image from "next/image"
import { bgImgCategoriesSlug, imgCategoriesSlug1, imgCategoriesSlug2, imgCategoriesSlug3 } from "../../../../image"
import Button from "@/components/elements/buttons/Button"
import TitleSection from "@/components/elements/TitleSection"
import { CardHighlight } from "@/components/fragments/CardHighlight"


export default function Page({ params }: { params: { slug: string } }) {

    return (
        <>
            <Navbar />
            <main>
                {/* hero section */}
                <section className=" w-full px-14">
                    <div className="flex gap-4 mt-64">
                        <div className="w-1/2">
                            <div className="relative">
                                <Image width={500} height={500} alt="bg-categories-slug" src={bgImgCategoriesSlug} className="absolute translate-x-0 -translate-y-10 w-full h-96 z-0" />
                                <Image width={500} height={500} alt="img-categories-slug" src={imgCategoriesSlug3} className="absolute -top-24 right-8 w-60 h-60 z-30" />
                                <Image width={500} height={500} alt="img-categories-slug" src={imgCategoriesSlug2} className="absolute w-64 h-64 -top-10 left-[10%] z-20" />
                                <Image width={500} height={500} alt="img-categories-slug" src={imgCategoriesSlug1} className="absolute w-60 h-60 top-32 left-[25%] z-10" />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <TitleSection label="Categories" />
                            <h1 className="font-medium text-[72px] mb-4">{params.slug}</h1>
                            <p className="font-light text-gray-400 leading-7 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                            <Button type="button" className="py-[10px] px-14 text-white bg-primary-400 rounded-full" label="Lorem" />
                        </div>
                    </div>
                </section>

                <section className="px-14 mt-44">
                    <div className="">
                        <h2 className="text-5xl mb-4">Lorem Ipsum</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                        <CardHighlight />
                        <CardHighlight />
                        <CardHighlight />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}