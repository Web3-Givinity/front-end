'use client'
import Image from 'next/image';
import React from 'react'
import { BsChevronDown, BsCurrencyBitcoin, BsWalletFill, BsX } from 'react-icons/bs';
import { iconBtnDonate, iconConvert } from '../../../../../image';

type ModalDonateProps = {
    isVisible: boolean;
    onClose: () => void;
}

export const ModalDonate = ({ isVisible, onClose }: ModalDonateProps) => {

    if (!isVisible) return null;

    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper-card') onClose();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center h-screen z-[9999]" id='wrapper-card' onClick={handleClose}>
                <div className="w-[600px] rounded-xl bg-white p-6">
                    {/* modal header */}
                    <div className="flex items-center justify-between">
                        <p className='text-2xl text-primary-400 font-medium'>wallet</p>
                        <button onClick={onClose} className='text-gray-300  font-medium active:scale-105 active:text-primary-400 transition-all duration-200 ease-in-out '><BsX size={40} /></button>
                    </div>

                    {/* modal body */}
                    <div className="flex flex-col justify-center mt-6 items-center">
                        <h1 className='font-medium text-[40px] my-4'>Make a Donation</h1>
                        <p className="text-2xl font-light">Lorem ipsum dolor sit amet, consectetur </p>

                        {/* form */}
                        <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <label htmlFor="card" className="cursor-pointer">
                                <input type="radio" name="jenisPayment" id="card" value="card" className="peer sr-only w-full " />
                                <div className="rounded-2xl relative overflow-hidden hover:shadow ring-2 ring-transparent peer-checked:text-[#F7931A] peer-checked:ring-primary-400
                                peer-checked:border-none peer-checked:ring-offset-2 peer-checked:scale-105 hover:duration-200 hover:transition-all hover:ease-in-out px-16 py-3 border border-gray-400 text-gray-400">
                                    <span className='flex items-center gap-2'>
                                        <BsCurrencyBitcoin />
                                        <p>
                                            Bitcoin
                                        </p>
                                    </span>
                                </div>
                            </label>

                            <label htmlFor="wallet" className="cursor-pointer">
                                <input type="radio" name="jenisPayment" id="wallet" value="wallet" className="peer sr-only w-full " />
                                <div className="rounded-2xl relative overflow-hidden hover:shadow ring-2 ring-transparent peer-checked:text-[#F7931A]
                                peer-checked:ring-primary-400
                                peer-checked:border-none peer-checked:ring-offset-2 peer-checked:scale-105 hover:duration-200 hover:transition-all hover:ease-in-out px-16 py-3 border border-gray-400 text-gray-400">
                                    <span className='flex items-center gap-2'>
                                        <BsWalletFill />
                                        <p>
                                            Wallet
                                        </p>
                                    </span>
                                </div>
                            </label>

                            <div className="w-full border border-gray-400 rounded-2xl px-10 py-2 col-span-2 group focus-within:border-primary-400 focus-within:border-2 transition-all ease-in-out duration-200">
                                <input type="number" className="bg-transparent focus:outline-none w-full text-center" placeholder="20,000" />
                            </div>

                            <div className="flex items-center justify-center col-span-2">
                                <Image width={10} height={10} src={iconConvert} alt="img-highlight-detail" className='' />
                                <Image width={10} height={10} src={iconConvert} alt="img-highlight-detail" className='' />
                            </div>

                            <div className="w-full flex items-center justify-between border border-gray-400 rounded-2xl px-10 py-2 col-span-2 group focus-within:border-primary-400 focus-within:border-2 transition-all ease-in-out duration-200">
                                <p className='text-3xl text-center ml-10'>1230000</p>
                                <div className="relative flex items-center max-w-40 text-primary-400">
                                    <select
                                        id="money"
                                        className="appearance-none text-sm w-full bg-white rounded-md py-2 px-3 focus:outline-none"
                                    >
                                        <option selected value="USD">USD</option>
                                        <option value="IDR">IDR</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>

                                    {/* Custom Arrow Icon */}
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                        <BsChevronDown size={14} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center center my-6 px-16">
                        <input
                            type="checkbox"
                            name="checkbox"
                            className="w-4 h-4 mr-2 rounded-2xl text-primary-400 border-none"
                        />
                        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur </p>
                    </div>

                    {/* button modal */}
                    <div className="mx-16 py-3 rounded-2xl bg-primary-400 text-white font-medium ">
                        <button type='submit' className='w-full flex items-center justify-center gap-2'>
                            <span><Image width={25} height={25} src={iconBtnDonate} alt="icon-btn" className='' /></span>
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
