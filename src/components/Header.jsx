import React, { useState, useEffect } from 'react';
import logo from './../assets/logo.svg';
import menuIcon from './../assets/Menu.svg';
import { FaCirclePlay } from "react-icons/fa6";
import imdbLogo from './../assets/imdb-logo.svg';
import fruit from './../assets/fruit.png';
import {GoSearch} from "react-icons/go";
import { Circles } from  'react-loader-spinner'

const Header = ({movlist}) => {
    const arrayLength = movlist.length;
    const [navbar, setNavbar] = useState(false);
    const [hideSearch, setHideSearch] = useState('translate-y-[-300px]');
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        
        // setLoading(true);
        if (movlist === true) {
            setLoading(false); 
        } else {
            setLoading(true);
        }
        const timer = setInterval(() => {
            setRandomNumber(generateRandomNumber());
            // setLoading(false);
        }, 30000); // Update the random number every 30 seconds

            return () => clearInterval(timer); // Cleanup the interval on component unmount
        }, [loading]); // Empty dependency array ensures it only runs once on component mount

        function generateRandomNumber() {
            return Math.floor(Math.random() * arrayLength); // Change this as needed
        }

    const changeBackground = () => {
        if (window.scrollY >= 100){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }; 
    const randomMovie = movlist[randomNumber];
    const backgroundStyle = {
        backgroundImage: `linear-gradient(#00000080,#00000080), url(https://image.tmdb.org/t/p/w500${movlist[randomNumber].poster_path})`,
    };

    const handleSearchHide = (e) => {
        e.preventDefault();
        if (hideSearch === 'translate-y-[-300px]') {
            setHideSearch('translate-y-[60px]');
        } else {
            setHideSearch('translate-y-[-300px]');
        }
    }

    window.addEventListener('scroll', changeBackground);

    

    return (
        <header  style={!loading ? {} : backgroundStyle} className='transition-all duration-300 headerN text-white w-full min-h-screen relative flex items-center'>
            <nav className={`w-full z-50 transition duration-300 top-0 py-5 ${navbar ? 'bg-rose-950/60 backdrop-blur-sm' : 'bg-transparent'} fixed px-6 lg:px-16 xl:px-28 border-gray-200 flex items-center justify-between`}>
                <a href="#" className='flex gap-5 items-center'>
                    <img src={logo} alt="" className="navbar-brand" />
                    <p className='text-white text-lg'>MovieBox</p>
                </a>
                    
                <form className={`w-[90%] ${hideSearch} transition-all duration-300 bg-rose-700 rounded-lg md:bg-transparent shadow-xl md:translate-y-0 md:w-[50%] block absolute md:relative md:block`}>   
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 py-2 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-white focus:border-white dark:bg-transparent outline-none dark:border-white dark:placeholder-white dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="What do you want to watch?" required/>
                        <button type="submit" className="text-white absolute right-2.5 bottom-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
                            <GoSearch/>
                        </button>
                    </div>
                </form>
                <div className='flex gap-4 md:gap-6 items-center'>
                    <a href="#" className='text-white hidden md:block'>Login</a>
                    <a onClick={handleSearchHide} href="#" className='border-2 p-1.5 rounded-full text-white block md:hidden'>
                        <GoSearch/>
                    </a>
                    <img src={menuIcon} alt=".." />
                </div>
            </nav>
            
            {!loading ? <div className='w-full flex justify-center'> <Circles
                        height="80"
                        width="80"
                        color="#be123c"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        /> </div>:
            <div className="conatainer flex flex-col items-start gap-5 md:w-[75%] lg:w-[50%] px-6 lg:px-16 xl:px-28">
                <div>
                    <h2 className='transition-all hover:duration-300 duration-300 capitalize text-3xl md:text-6xl font-semibold text-white w-[100%]'>{randomMovie.title}</h2>
                </div>
                <div className='flex gap-4 items-center w-75%'>
                    <img src={imdbLogo} alt="..." />
                    <span key='rate'>86.0/100</span>
                    <p className='flex gap-3 ms-6'>
                        <img src={fruit} alt="..." />
                        <small>97%</small>
                    </p>
                </div>
                <div className='descr transition-all duration-300'>
                    {randomMovie.overview}
                </div>
                <button type="button" className="gap-3 text-white bg-rose-700 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-700">
                    <FaCirclePlay />
                    WATCH TRAILER
                </button>
            </div>}
            
        </header>
    )
}

export default Header;