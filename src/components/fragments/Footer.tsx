import React from 'react'
import { BsChevronDown, BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { InputSearchFooter } from '../elements/inputs/InputSearchFooter'

export const Footer = () => {
    return (
        <>
            <footer className="bottom-0 px-14">
                <div className="flex justify-between items-center border-b border-gray-400 py-10">
                    <h2 className="font-bold text-4xl uppercase">logo</h2>
                    <InputSearchFooter />
                </div>

                <div className=" border-b border-gray-400 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {/* column 1 */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg mb-4">Company</h3>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">About Us</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Categories</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Our Team</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Donate</li>
                            </ul>
                        </div>
                        {/* column 2 */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg mb-4">Company</h3>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">About Us</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Categories</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Our Team</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Donate</li>
                            </ul>
                        </div>
                        {/* column 3 */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg mb-4">Company</h3>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">About Us</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Categories</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Our Team</li>
                                <li className="hover:text-primary-400 hover:cursor-pointer text-sm">Donate</li>
                            </ul>
                        </div>
                        {/* column 4 */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg mb-6">Company</h3>
                            <p className="text-sm mb-4">Join Us</p>

                            <div className="flex items-center gap-3 flex-row">
                                <span className="cursor-pointer"><BsYoutube size={20} /></span>
                                <span className="cursor-pointer"><BsFacebook size={20} /></span>
                                <span className="cursor-pointer"><BsTwitterX size={20} /></span>
                                <span className="cursor-pointer"><BsInstagram size={20} /></span>
                                <span className="cursor-pointer"><BsLinkedin size={20} /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between my-6">
                    <p className="text-sm">© 2025 Givinity. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-sm">
                        <p className="cursor-pointer">Home</p>
                        <p className="flex items-center gap-3 cursor-pointer">
                            Services
                            <span><BsChevronDown /></span>
                        </p>
                        <p className="cursor-pointer">Blog</p>
                        <p className="cursor-pointer">Help Center</p>
                        <p className="cursor-pointer">About</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
