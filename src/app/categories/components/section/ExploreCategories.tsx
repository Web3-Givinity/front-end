import React from 'react'
import CardExploreCategories from '../fragments/CardExploreCategories'
import { iconMedical } from '../../../../../image'
import { categories } from '@/constants/categories'
import Link from 'next/link'


export const ExploreCategories = () => {
    return (
        <>
            <section className="px-14 my-24">
                <div className="text-center">
                    <h2 className="text-[45px] mb-6">Explore Our Categories</h2>
                    <p className="text-lg font-light text-gray-600">Explore advanced features that help you engage, inspire, and grow your support.</p>

                    <div className="mt-12 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            categories.map((item, index) => (
                                <Link key={index} href={`/categories/${item.slug}`}>
                                    <CardExploreCategories image={iconMedical.src} title={item.title} project={item.project} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
