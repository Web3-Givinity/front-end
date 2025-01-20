"use client"

import { navMenu } from "@/constants/navMenu"
import Button from "../elements/buttons/Button"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const Navbar = () => {

    const pathActive = usePathname()

    return (
        <>
            <nav className="container max-w-[1220px] m-4 top-0 left-0 fixed bg-white rounded-[30px] z-10">
                <div className="flex items-center justify-between py-4 px-10">
                    <h1 className="font-semibold text-2xl text-primary-400">Givinity</h1>
                    <div className="">
                        <ul className="flex items-center gap-12">
                            {
                                navMenu.map((item, index) => (
                                    <li key={index} className={`font-medium px-4 py-1 rounded-full transition duration-200 ease-in-out hover:text-primary-400 hover:bg-[#DEF2FA] ${pathActive === item.path ? "text-primary-400 bg-[#DEF2FA] " : "text-black"}`}>
                                        <Link href={item.path}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <Button type="button" className="py-[10px] px-8 text-white bg-primary-400 rounded-full" label="Donate" />
                </div>
            </nav>
        </>
    )
}
