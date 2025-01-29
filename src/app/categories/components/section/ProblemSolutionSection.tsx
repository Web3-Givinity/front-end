import { ourSolution } from '@/constants/ourSolution'
import React from 'react'

export const ProblemSolutionSection = () => {
    return (
        <>
            <section className='flex gap-6 my-20 px-14'>
                <div className="w-1/2 flex flex-col">
                    <h1 className='text-4xl font-medium mb-4'>Whats The Probelm?</h1>
                    <p className='font-light text-gray-400 mb-10 leading-10 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud incididunt ut labore et</p>
                    <p className='font-light text-gray-400 mb-10 leading-10 text-lg'>dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>

                    <p className='font-light text-gray-400 leading-10 text-lg'>dolore magna aliqua.Ut enim ad minim veniam, quis nostrud incididunt ut labore et dolore magna aliqua.Ut enim ad magna aliqua.Ut enim ad minim veniam, quis nostrud incididunt ut </p>
                </div>
                <div className="w-1/2">
                    <h1 className='text-4xl font-medium mb-6'>Our Solution</h1>
                    {
                        ourSolution.map((item, index) => (
                            <div className="flex items-center gap-4 mb-4" key={index}>
                                <div className="flex items-center justify-center w-12 h-12 bg-primary-400 rounded-full">
                                    <p className="text-lg text-white">{item.number}</p>
                                </div>
                                <p className="text-[16px] text-gray-400 font-light">{item.text}</p>
                            </div>

                        ))
                    }
                </div>
            </section>
        </>
    )
}
