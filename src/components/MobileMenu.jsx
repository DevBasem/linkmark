import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaFolderPlus } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { ScrollShadow } from "@nextui-org/react";


const MobileMenu = () => {
    return (
        <div className="md:hidden flex items-center justify-between min-h-14 p-3 bg-[#F5F6F7] border-t-2 text-gray-700 bg-opacity-90 backdrop-blur-md fixed bottom-0 w-svw">
            <ScrollShadow orientation="horizontal" size={0} hideScrollBar className="flex-1 flex items-center justify-evenly gap-5 flex-row-reverse px-1 text-xs overflow-x-auto border-2 border-gray-400 rounded-lg">
                <button className="group flex flex-col items-center p-1 hover:text-black transition-all" ><FaPlus className="w-5 h-5 transition-all group-hover:bg-[rgba(97,62,234,0.1)] group-hover:shadow-[0px_0px_35px_10px_rgba(97,62,234,0.2)]" /> <span>Bookmark</span></button>
                <button className="group flex flex-col items-center p-1 hover:text-black transition-all"><FaFolderPlus className="w-5 h-5 transition-all group-hover:bg-[rgba(97,62,234,0.1)] group-hover:shadow-[0px_0px_35px_10px_rgba(97,62,234,0.2)]" /><span>Folder</span></button>
            </ScrollShadow>

            <div className="mx-10 relative flex justify-center items-center bg-slate-700">
                <div className="bg-[#A9C0FF] p-4 w-16 h-16 rounded-full absolute">
                    <div className="absolute bg-[#613EEA] inset-1 rounded-full flex justify-center items-center">
                        <div className='w-8 h-8 fill-current rounded text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" version={1.0} viewBox="40.56 3.06 105.86 105.86"><defs><clipPath id="a"><path d="M74.05 12.496h59.454V24H74.05Zm0 0" /></clipPath><clipPath id="b"><path d="M74.05 26h59.454v45.953H74.05Zm0 0" /></clipPath><clipPath id="c"><path d="M73 83h31.242v16.504H73Zm0 0" /></clipPath><clipPath id="d"><path d="M53.484 12.496H70v87.008H53.484Zm0 0" /></clipPath><clipPath id="e"><path d="M40.563 3.063h105.859v105.859H40.562Zm0 0" /></clipPath></defs><g clipPath="url(#a)"><path d="M74.05 23.645h59.454V12.496H74.05v11.149" /></g><g clipPath="url(#b)"><path d="M122.363 47.398c-2.828 1.215-6.101 1.844-9.71 1.844H74.05V38.098h38.601c4.543 0 9.703-2.684 9.703-9.293v-2.477h11.149v25.188c0 13.004-8.465 20.437-20.852 20.437H74.051V60.805h38.601c4.543 0 9.703-2.684 9.703-9.29l.008-4.117" /></g><g clipPath="url(#c)"><path d="M104.242 99.48V83.176h-30.27V99.48h30.27" /></g><g clipPath="url(#d)"><path d="M69.996 99.48V12.523H53.484V99.48h16.512" /></g><g clipPath="url(#e)"><path d="M138.172 3.063h-89.36c-4.55 0-8.25 3.699-8.25 8.25v89.359c0 4.55 3.7 8.25 8.25 8.25h89.36c4.55 0 8.25-3.7 8.25-8.25v-89.36c0-4.55-3.7-8.25-8.25-8.25Zm5.5 97.609c0 3.039-2.461 5.5-5.5 5.5h-89.36c-3.039 0-5.5-2.461-5.5-5.5v-89.36c0-3.039 2.461-5.5 5.5-5.5h89.36c3.039 0 5.5 2.461 5.5 5.5Zm0 0" /></g></svg>
                        </div>
                    </div>
                </div>

            </div>

            <ScrollShadow orientation="horizontal" size={0} hideScrollBar className="flex-1 flex items-center justify-evenly gap-5 px-1 text-xs overflow-x-auto border-2 border-gray-400 rounded-lg me-[5px]">

                <button className="group flex flex-col items-center p-1 hover:text-black transition-all"><MdSearch className="w-6 h-6 transition-all group-hover:bg-[rgba(97,62,234,0.1)] group-hover:shadow-[0px_0px_35px_10px_rgba(97,62,234,0.2)]" /><span>Search</span></button>
                <button className="group flex flex-col items-center p-1 hover:text-black transition-all"><IoMdSunny className="w-6 h-6 transition-all group-hover:bg-[rgba(97,62,234,0.1)] group-hover:shadow-[0px_0px_35px_10px_rgba(97,62,234,0.2)]" /><span>Light</span></button>

            </ScrollShadow>
        </div >
    )
}

export default MobileMenu