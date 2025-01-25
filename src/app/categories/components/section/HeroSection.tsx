import Image from 'next/image'
import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { imgHeroCategories } from '../../../../../image'

export const HeroSection = () => {
  return (
    <>
          <section className="w-full h-screen bg-[url('/rectangle1.png')] bg-right bg-no-repeat bg-contain">
              <div className="flex items-center gap-4 mt-44 px-14">
                  <div className="w-5/12">
                      <h1 className="font-medium text-[72px] leading-[80px]">Explore Our Categories of Impact</h1>
                      <p className="mt-8 text-gray-400 font-light text-lg">Browse through a variety of causes and find the ones that resonate with you. Every category represents an opportunity to make a lasting difference in the world</p>
                  </div>
                  <div className="w-7/12">
                      <div className="relative">
                          <Image width={500} height={500} alt="img-categories" src={imgHeroCategories} className="w-full h-full" />
                          <div className="">
                              <BsArrowDown className="absolute -bottom-10 -left-10 p-6 w-28 h-28 rounded-full bg-primary-400 text-white" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

