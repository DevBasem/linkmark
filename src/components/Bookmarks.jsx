import { ScrollShadow } from "@nextui-org/react"
import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import testImage from "../assets/images/hero-card-complete.jpeg"
import { motion } from "framer-motion"


import { IoMdBookmarks } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import MobileMenu from "./MobileMenu"


const tabs = [
    { id: "all", label: "All", icon: <IoMdBookmarks className="w-4 h-4" /> },
    { id: "fav", label: "Favourites", icon: <FaStar className="w-4 h-4" /> },
    { id: "mv", label: "Most Visited", icon: <RiUserStarFill className="w-4 h-4" /> },
    { id: "az", label: "A-Z" },
    { id: "1", label: "basem" },
    { id: "2", label: "nada" },
    { id: "3", label: "basem" },
    { id: "4", label: "nada" },
    { id: "5", label: "basem" },
    { id: "6", label: "nada" },
    { id: "7", label: "A-Z" },
    { id: "8", label: "A-Z" },
    { id: "9", label: "A-Z" },
    { id: "10", label: "A-Z" },
];

const Bookmarks = () => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState("");
    const [scrollStarted, setScrollStarted] = useState(false);
    const [isFirefoxFlag, setIsFirefoxFlag] = useState(false);

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const getheaderHeight = () => {
        if (headerRef.current !== null) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }

    const handleScroll = (event) => {
        // Check if scroll position is greater than 0
        const scrolled = event.target.scrollTop > 0;
        // Update scrollStarted state based on scroll position
        if (!isFirefoxFlag) {
            setScrollStarted(scrolled);
        }
    };

    useEffect(() => {
        getheaderHeight();

        // Function to handle window resize
        const handleResize = () => {
            getheaderHeight(); // Recalculate header height on resize
        };

        window.addEventListener("resize", handleResize); // Add event listener for window resize
        return () => {
            window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
        };
    }, [headerRef]);

    useEffect(() => {
        // Function to check if the browser is Firefox and disable handleScroll
        const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

        if (isFirefox) {
            setIsFirefoxFlag(true);
        }
    }, []);


    return (
        <div className="flex flex-col max-h-full relative max-md:pb-[76.8px]">
            <motion.header className="bg-[#613EEA] text-white bg-opacity-90 backdrop-blur-md p-4 absolute max-md:fixed top-0 z-50 w-full md:rounded-lg"
                ref={headerRef}
                layout
            >
                <div className={`antialiased max-md:flex max-md:items-center max-md:gap-2 ${scrollStarted ? "flex items-center gap-2 animate-fade-in-right" : "animate-fade-in-down"}`}
                >
                    <h2 className="text-2xl font-medium tracking-tight text-nowrap">Your Bookmarks</h2>

                    <ScrollShadow orientation="horizontal" hideScrollBar className="overflow-x-auto flex-grow md:mt-2">
                        <ul className="flex gap-2 relative isolate">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.id}
                                >
                                    <a className={`flex relative items-center gap-1 px-4 rounded-full transition-colors duration-250 border-2`}
                                        onMouseEnter={() => setActiveTab(tab.id)}
                                        href="#"
                                    >
                                        {activeTab === tab.id && (
                                            <motion.div className="rounded-full absolute -inset-[1px] bg-white border-2 z-10 border-white "
                                                style={{ borderRadius: 9999 }}
                                                layoutId="bubble"
                                                transition={{
                                                    ease: "easeInOut",
                                                    duration: 0.25,
                                                }}
                                            />
                                        )}

                                        <span className={`relative z-20 transition-colors duration-250 mix-blend-difference`}>{tab.icon}</span> <span className={`relative z-20 transition-colors duration-250 mix-blend-difference text-nowrap`}>{tab.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ScrollShadow>

                </div>
            </motion.header>

            <ScrollShadow className={`@container overflow-y-auto transition-all duration-250 mt-[${headerHeight}]`} style={{ marginTop: scrollStarted ? 0 : headerHeight }} size={10} hideScrollBar visibility="bottom" onScroll={handleScroll}>
                <div className="grid @md:grid-cols-1 @lg:grid-cols-2 @xl:grid-cols-3 @2xl::grid-cols-4 2xl:grid-cols-4 gap-4 mx-2 my-4">
                    {[...Array(40)].map((_, index) => (
                        <Card key={index} className="py-4">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                                <small className="text-default-500">12 Tracks</small>
                                <h4 className="font-bold text-large">ALX MVP</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    removeWrapper={true}
                                    alt="Card background"
                                    className="object-cover w-full"
                                    src={testImage}
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </ScrollShadow>

            <MobileMenu />
        </div >
    )
}

export default Bookmarks