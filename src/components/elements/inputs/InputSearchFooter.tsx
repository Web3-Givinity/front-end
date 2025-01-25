import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const InputSearchFooter = () => {
    return (
        <>

            <div className=" flex items-center">
                <div className="px-4 py-2 border boreder-gray-400 flex items-center gap-2">
                    <span className=""><BsSearch /></span>
                    <input type="text" placeholder="Enter your email to get the latest news..." className="w-full focus:outline-none bg-transparent text-sm truncate" />
                </div>
                <button type="button" className="px-6 py-2 bg-[#0077FF] text-white">Search</button>
            </div>
        </>
    )
}
