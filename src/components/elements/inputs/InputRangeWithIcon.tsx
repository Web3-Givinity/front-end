import React from 'react'
import { BsHeartFill } from 'react-icons/bs'

export const InputRangeWithIcon = () => {
    return (
        <>
            <div className="w-full bg-gray-200 rounded-full relative">
                <div className="w-full h-2 bg-transparent appearance-none absolute top-0 left-0 z-[1]"></div>
                <div className="bg-primary-400 h-2 rounded-full w-4/5"></div>
                <div className="cursor-pointer absolute top-0 left-[80%] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-primary-400 z-[1]">
                    <BsHeartFill />
                </div>
            </div>
        </>
    )
}
