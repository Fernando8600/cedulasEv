"use client";
import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/Logo.png';
import Analisis from '@/pages/Analisis';
const AppHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function toggleMenu() {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            document
                .getElementsByTagName('html')[0]
                .classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    }

    return (
        <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
            {/* Header menu links and small screen hamburger menu */}
            <div className="flex justify-between items-center px-4 sm:px-0">
                <div className='ml-10'>
                    <Link href="/">
                        <Image width={400} height={100}
                            src="/img/Logo.png"
                            className="w-36"
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Small screen hamburger menu */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="focus:outline-none"
                        aria-label="Hamburger Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                        >
                            {showMenu ? (
                                <FiX className="text-3xl" />
                            ) : (
                                <FiMenu className="text-3xl" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Header links small screen */}
            <div
                className={
                    showMenu
                        ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
                        : 'hidden'
                }
            >
                <Link
                    href="/Analisis"
                    className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                    aria-label="Analisis"
                >
                    Analisis
                </Link>
                <Link
                    href="/"
                    className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                    aria-label="Evaluaciones"
                >
                    Evaluaciones
                </Link>
            </div>

            {/* Header links large screen */}
            <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                <Link
                    href="/"
                    className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                    aria-label="Evaluaciones"
                >
                    Evaluaciones
                </Link>
                <Link
                    href="/Analisis"
                    className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                    aria-label="Analisis"
                >
                    Analisis
                </Link>

            </div>

            {/* Header right section buttons */}
            <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
            </div>
        </div>
    );
};

export default AppHeader;
