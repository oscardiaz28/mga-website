"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavLink = ( {href, children} : {href: string, children: React.ReactNode} ) => {
    const pathName = usePathname();
    const isActive = pathName === href

    return (
        <Link href={href} className={`${"block py-6 px-7"} ${isActive ? "bg-secondary" : "bg-primary" }`}>
            {children}
        </Link>
    )
}


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLUListElement>(null)
    const pathName = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [pathName])

    return (
        <div className="navbar relative z-20">

            <div className="topbar bg-primary py-2 px-2">

                <div className="max-w-screen-xl px-5 mx-auto h-full flex flex-col md:flex-row md:justify-between gap-2 items-center text-center">

                    <div className="h-full flex flex-col md:flex-row gap-2 md:gap-20">

                        <div className="text-white flex items-center gap-4 h-full">
                            <IoIosSend className="text-secondary text-xl" />
                            <p>mgaingenieros@gmail.com</p>
                        </div>

                        <div className="text-white flex items-center justify-center gap-2">
                            <a href="" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#124E68]">
                                <FaFacebookF className="text-secondary text-sm mt-[2px]" />
                            </a>
                            <a href="" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#124E68]">
                                <FaTwitter className="text-secondary text-sm mt-[2px]" />
                            </a>
                            <a href="" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#124E68]">
                                <AiFillInstagram className="text-secondary text-sm mt-[2px]" />
                            </a>
                        </div>

                    </div>

                    <button
                        className="bg-secondary text-white w-full px-2 py-1 rounded-2xl max-w-sm md:w-auto md:px-4 md:rounded-md">Contacto</button>

                </div>

            </div>

            <div className="bar">
                <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col sm:flex-row flex-wrap justify-between gap-4 md:flex-row md:items-center md:justify-between md:p-5">
                    <div className="">
                        <img src="/img/logo.png" alt="" className="block w-full max-w-32 lg:max-w-36" />
                    </div>

                    <div className="flex gap-4">
                        <div className="border-[1px] border-[#f1f1f1] flex-shrink-0 grid place-items-center w-10 h-10">
                            <IoCallSharp className="text-secondary text-xl" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold"><span className="text-secondary font-semibold">Free Call </span>+51912350853</p>
                            <p className="text-gray-400 text-xs">Atención Lun 9:00am</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="border-[1px] border-[#f1f1f1] flex-shrink-0 grid place-items-center w-10 h-10">
                            <IoCallSharp className="text-secondary text-xl" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold">Ubicación</p>
                            <p className="text-gray-400 text-xs">Calle Arica #124</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="max-w-screen-xl mx-auto lg:px-5">
                <nav className=" bg-primary text-white lg:flex lg:items-center justify-between">

                    <button className="flex items-center gap-2 px-4 py-3 lg:hidden cursor-pointer"
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >
                        <IoMenu className="text-xl mt-[0.5px]" />
                        <p>Menu</p>
                    </button>

                    <ul ref={menuRef} className={`${"bg-primary text-white w-full lg:flex lg:relative transition-all duration-300"} 
                    ${"overflow-hidden lg:hidden"}`} style={{ maxHeight: isOpen ? `${menuRef.current?.scrollHeight}px` : "0px" , transition: "all 0.25s ease-in-out" }} >
                        <Link href={"/"} className="block p-2 px-4">Home</Link>
                        <Link href={"/nosotros"} className="block p-2 px-4">Nosotros</Link>
                        <Link href={"/servicios"} className="block p-2 px-4">Servicios</Link>
                        <Link href={"/proyectos"} className="block p-2 px-4">Proyectos</Link>
                        <Link href={"/contacto"} className="block p-2 px-4">Contacto</Link>
                        <button className="bg-[#1E273C] p-1 px-3 rounded-sm m-2 uppercase text-[12px] font-semibold lg:hidden">Solicitar</button>
                    </ul>

                    <ul className="hidden lg:flex bg-primary text-white w-full">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/nosotros">Nosotros</NavLink>
                        <NavLink href="/servicios">Servicios</NavLink>
                        <NavLink href="/proyectos">Proyectos</NavLink>
                        <NavLink href="/contacto">Contacto</NavLink>
                    </ul>

                    <button className="hidden lg:block bg-[#1E273C] p-1 px-4 rounded mx-5">Solicitar</button>

                </nav>
            </div>

        </div>

    )
}