import React from 'react'
import { BsEnvelopeFill, BsInstagram, BsTelephoneFill, BsTwitter, BsTwitterX, BsYoutube } from 'react-icons/bs'

export const Footer = () => {
    return (
        <>
            <footer className="bottom-0 mt-14">
                <div className=" border-y px-14 border-gray-400 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                        {/* column 1 */}
                        <div className="flex flex-col col-span-2">
                            <h3 className="font-semibold text-lg mb-4">Logo</h3>
                            <p className='font-light text-gray-400 text-sm max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do t e</p>
                        </div>
                        {/* column 2 */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg mb-4">Home</h3>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Highlight Campaign</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">About Us</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Steps</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Project</li>
                            </ul>
                        </div>
                        {/* column 3 */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg mb-4">Team</h3>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Background</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Join Us</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Member</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Hero</li>
                            </ul>
                        </div>
                        {/* column 4 */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg mb-4">Categories</h3>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Explore</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Categories</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm text-gray-400 transition-all duration-200 ease-in-out">Latest Project</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between my-6 px-14">
                    <p className="text-sm">© 2025 Givinity. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-primary-400">
                        <BsYoutube size={25} />
                        <BsTwitter size={25} />
                        <BsTelephoneFill size={25} />
                        <BsInstagram size={25} />
                        <BsEnvelopeFill size={25} />

                    </div>
                </div>
            </footer>
        </>
    )
}
