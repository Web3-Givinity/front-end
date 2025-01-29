'use client'
import Image from 'next/image';
import React from 'react'
import { BsCreditCard, BsWalletFill } from 'react-icons/bs';
import { iconConvert } from '../../../../../image';

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
                    <p className='text-2xl text-primary-400 font-medium'>wallet</p>

                    <div className="flex flex-col justify-center mt-6 items-center">
                        <h1 className='font-medium text-[40px] my-4'>Make a Donation</h1>
                        <p className="text-2xl font-light">Lorem ipsum dolor sit amet, consectetur </p>

                        <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <label htmlFor="card" className="cursor-pointer">
                                <input type="radio" name="jenisPayment" id="card" value="card" className="peer sr-only w-full " />
                                <div className="rounded-2xl relative overflow-hidden hover:shadow ring-2 ring-transparent peer-checked:text-primary-400 peer-checked:ring-primary-400
                                peer-checked:border-none peer-checked:ring-offset-2 peer-checked:scale-105 hover:duration-200 hover:transition-all hover:ease-in-out px-16 py-3 border border-gray-400 text-gray-400">
                                    <span className='flex items-center gap-2'>
                                        <BsCreditCard />
                                        <p>
                                            Card
                                        </p>
                                    </span>
                                </div>
                            </label>

                            <label htmlFor="wallet" className="cursor-pointer">
                                <input type="radio" name="jenisPayment" id="wallet" value="wallet" className="peer sr-only w-full " />
                                <div className="rounded-2xl relative overflow-hidden hover:shadow ring-2 ring-transparent peer-checked:text-primary-400
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
                                <p className='text-3xl'>1230000</p>
                                {/* <div className="">
                                    <select
                                        className="block select appearance-none p-3 w-full rounded leading-tight focus:outline-none text-sm"
                                        id="priceFilter"

                                    >
                                        <option value="">Price</option>
                                        <option value="0-50">$0 - $50</option>
                                        <option value="51-100">$51 - $100</option>
                                        <option value="101-200">$101 - $200</option>
                                    </select>
                                </div> */}
                                <select id="money" className="text-2xl max-w-40  focus:outline-none">
                                    <option selected>USD</option>
                                    <option value="US" className='text-sm'>United States</option>
                                    <option value="CA" className='text-sm'>Canada</option>
                                    <option value="FR" className='text-sm'>France</option>
                                    <option value="DE" className='text-sm'>Germany</option>
                                </select>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
