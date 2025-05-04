import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { useState, useEffect } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleHeaderScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
    
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleHeaderScroll);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <header className={`w-full h-20 flex px-4 justify-between md:justify-around items-center text-white fixed z-100 ${isScrolled ? "bg-white" : "bg-transparent"} transition-all duration-300 ease-in-out`}>
            <a href="#home" className={`font-montserrat font-bold text-2xl ${isScrolled ? "text-primary" : "text-white"}`}>OceanPure</a>
            <nav>
                <button onClick={() => setIsOpen(true)} className="inline md:hidden"><IoMenu size={32} className={`${isScrolled ? "text-black" : "text-white"}`} /></button>
                <ul className="gap-6 hidden md:flex">
                    <li>
                        <a href="#about" className={`link ${isScrolled ? "text-primary-dark" : "text-white"}`}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#impact" className={`link ${isScrolled ? "text-primary-dark" : "text-white"}`}>Impact</a>
                    </li>
                    <li>
                        <a href="#projects" className={`link ${isScrolled ? "text-primary-dark" : "text-white"}`}>Projects</a>
                    </li>
                    <li>
                        <a href="#donate" className={`font-bold cursor-pointer px-5 py-4 border-2 rounded-[8px] border-primary hover:bg-primary transition-colors duration-300 ease font-montserrat ${isScrolled ? "text-primary-dark" : "text-white"}`}>Donate</a>
                    </li>
                </ul>
                {isOpen &&
                    <div className="bg-primary-dark fixed inset-0 z-30">
                        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-5 text-white text-3xl"><RxCross2 size={28} /></button>
                        <ul className="h-full gap-10 flex flex-col justify-center items-center">
                            <li>
                                <a onClick={() => setIsOpen(false)} href="#about" className="text-3xl font-bold font-montserrat">
                                    About
                                </a>
                            </li>
                            <li>
                                <a onClick={() => setIsOpen(false)} href="#impact" className="text-3xl font-bold font-montserrat">Impact</a>
                            </li>
                            <li>
                                <a onClick={() => setIsOpen(false)} href="#projects" className="text-3xl font-bold font-montserrat">Projects</a>
                            </li>
                            <li>
                                <a onClick={() => setIsOpen(false)} href="#donate" className="text-3xl font-bold font-montserrat">Donate</a>
                            </li>
                        </ul>
                    </div>
                }

            </nav>
        </header>
    )
}

export default Header;