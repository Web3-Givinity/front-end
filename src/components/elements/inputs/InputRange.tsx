import React from 'react'
import { BsHeartFill } from 'react-icons/bs'

export const InputRange = () => {
    return (
        <>
            <div className="w-full bg-gray-200 rounded-full relative">
                <div className="w-full h-2 bg-transparent appearance-none absolute top-0 left-0 z-[1]"></div>
                <div className="bg-primary-400 h-2 rounded-full w-4/5"></div>
            </div>
        </>
    )
}
