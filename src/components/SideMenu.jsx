import { Button, Divider, Input } from '@nextui-org/react'
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { IoMdBookmarks } from "react-icons/io";
import { IoMdFolder } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaFolderPlus } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

import { IoLogIn } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";

import { ScrollShadow } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from 'react';

const SideMenu = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex flex-col border bg-stone-50 rounded-lg min-w-80 p-2 font-[Inter] font-semibold text-[15px] leading-6 tracking-tight max-md:hidden">
            <div className='flex justify-center items-center gap-2 rounded-lg px-2 py-4 shadow-lg'>
                <div className='block w-8 h-8 fill-current bg-[#613EEA] rounded text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" version={1.0} viewBox="40.56 3.06 105.86 105.86"><defs><clipPath id="a"><path d="M74.05 12.496h59.454V24H74.05Zm0 0" /></clipPath><clipPath id="b"><path d="M74.05 26h59.454v45.953H74.05Zm0 0" /></clipPath><clipPath id="c"><path d="M73 83h31.242v16.504H73Zm0 0" /></clipPath><clipPath id="d"><path d="M53.484 12.496H70v87.008H53.484Zm0 0" /></clipPath><clipPath id="e"><path d="M40.563 3.063h105.859v105.859H40.562Zm0 0" /></clipPath></defs><g clipPath="url(#a)"><path d="M74.05 23.645h59.454V12.496H74.05v11.149" /></g><g clipPath="url(#b)"><path d="M122.363 47.398c-2.828 1.215-6.101 1.844-9.71 1.844H74.05V38.098h38.601c4.543 0 9.703-2.684 9.703-9.293v-2.477h11.149v25.188c0 13.004-8.465 20.437-20.852 20.437H74.051V60.805h38.601c4.543 0 9.703-2.684 9.703-9.29l.008-4.117" /></g><g clipPath="url(#c)"><path d="M104.242 99.48V83.176h-30.27V99.48h30.27" /></g><g clipPath="url(#d)"><path d="M69.996 99.48V12.523H53.484V99.48h16.512" /></g><g clipPath="url(#e)"><path d="M138.172 3.063h-89.36c-4.55 0-8.25 3.699-8.25 8.25v89.359c0 4.55 3.7 8.25 8.25 8.25h89.36c4.55 0 8.25-3.7 8.25-8.25v-89.36c0-4.55-3.7-8.25-8.25-8.25Zm5.5 97.609c0 3.039-2.461 5.5-5.5 5.5h-89.36c-3.039 0-5.5-2.461-5.5-5.5v-89.36c0-3.039 2.461-5.5 5.5-5.5h89.36c3.039 0 5.5 2.461 5.5 5.5Zm0 0" /></g></svg>
                </div>
                <div className='bg-gradient-to-l'>
                    <h1 className='text-sm text-[#1A1B2D]'>LinkMark &#8482;</h1>
                </div>
            </div>
            <ScrollShadow className='overflow-y-auto h-full flex flex-col flex-grow' size={15} visibility="both" hideScrollBar>
                <nav>
                    <ul className='mb-2'>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdBookmarks className='w-7 h-7' /> <span>All Bookmarks</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                        <li><a className='flex gap-2 items-center p-3 bg-[#613EEA] text-white mt-2 rounded-lg' href="#"><IoMdFolder className='w-7 h-7' /> <span>New Folder</span></a></li>
                    </ul>
                </nav>
            </ScrollShadow>

            <div className='my-2 flex flex-col gap-1'>
                <div className='flex gap-1'>
                    <Button fullWidth="true" startContent={<FaFolderPlus className='w-4 h-4' />}>Add Folder</Button>
                    <Button fullWidth="true" endContent={<FaPlus className='w-4 h-4' />}>Add Bookmark</Button>
                </div>
                <Input
                    type="email"
                    variant='bordered'
                    placeholder="Search Bookmarks"
                    labelPlacement="outside"
                    classNames={{
                        inputWrapper: [
                            "!border-stone-400",
                            "focus-within:!border-[#613EEA]",
                        ],
                    }}
                    startContent={
                        <MdSearch className="w-5 h-5 text-[#535763] pointer-events-none flex-shrink-0" />
                    }
                />
            </div>



            <Divider className='mt-auto' orientation="horizontal" />

            <div className='mt-2 flex p-1 justify-center gap-1 bg-stone-200 rounded-[40px] text-[#535763] shadow-sm relative isolate group' onMouseLeave={() => setIsHovered(false)}>
                <span className={`absolute bg-[#613EEA] -z-[1] transition-all duration-250 top-1 bottom-1 w-1/2 py-1 pe-4 ps-2 rounded-[32px] shadow-[0px -1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 2px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 8px -4px rgba(0, 0, 0, 0.25)] ${isHovered ? 'left-[calc(50%-0.25rem)]' : 'left-1'}`}></span>
                <button className={`flex py-1 pe-4 ps-2 justify-center items-center gap-1 flex-1 rounded-[32px] transition-colors duration-250 ${!isHovered && "text-white"}`} onMouseEnter={() => setIsHovered(false)}><IoMdArrowRoundUp className='w-5 h-5' /> <span>Sign up</span></button>
                <button className={`flex py-1 pe-4 ps-2 justify-center items-center gap-2 flex-1 rounded-[32px] transition-colors duration-250 ${isHovered && "text-white"}`} onMouseEnter={() => setIsHovered(true)}><IoLogIn className='w-5 h-5' /> <span>Log in</span></button>
            </div>


            <div className='mt-2 flex p-1 justify-center gap-1 bg-stone-200 rounded-[40px] text-[#535763] shadow-sm relative isolate'>
                <span className={`absolute -z-[1] ${theme === 'light' ? "left-1 bg-[#FFFFFF]" : "left-[calc(50%-0.25rem)] bg-black"} transition-all duration-250 top-1 bottom-1 w-1/2 py-1 pe-4 ps-2 rounded-[32px] shadow-[0px -1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 2px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 8px -4px rgba(0, 0, 0, 0.25)]`}></span>
                <button onClick={() => setTheme('light')} className='hover:text-gray-900 flex py-1 pe-4 ps-2 justify-center items-center gap-2 flex-1 rounded-[32px] transition-all duration-250'><IoMdSunny className='w-5 h-5' /> <span>Light</span></button>
                <button onClick={() => setTheme('dark')} className={`${theme === "dark" && "text-white hover:text-white"} hover:text-gray-900 flex py-1 pe-4 ps-2 justify-center items-center gap-2 flex-1 rounded-[32px] transition-all duration-250`}><IoMdMoon className='w-5 h-5' /> <span>Dark</span></button>
            </div>
        </div>
    )
}

export default SideMenu