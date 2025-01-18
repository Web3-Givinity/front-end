import Image from "next/image"
import { BsThreeDotsVertical } from "react-icons/bs"
import Button from "../elements/buttons/Button"
import { chartImg } from "../../../image"


export const HeroSection = () => {
    return (
        <>
            <section className="w-full h-screen bg-[url('/heroImg.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex justify-end w-full">
                    <div className="w-1/2 flex flex-col">
                        <h1 className="text-left text-white text-[70px] font-medium leading-[80px] mt-44">A small act of love can create a big difference.</h1>
                        <div className="flex flex-col px-6">
                            <div className="flex justify-end">
                                <Button type="button" className="py-[10px] px-20 my-6 text-white bg-primary-400 rounded-full" label="Join Us" />
                            </div>

                            <div className="flex justify-end">
                                <div className="flex flex-col gap-2 p-6 rounded-lg shadow-md shadow-gray-300 bg-white border border-[#E9EAEB] w-3/4">
                                    <div className="flex justify-between">
                                        <p className="font-medium">Lives Transformed Through Your <br /> Generosity</p>
                                        <BsThreeDotsVertical className="text-gray-400 cursor-pointer" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-4xl">10,000+</p>
                                        <Image width={150} height={150} src={chartImg} alt="chart" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
