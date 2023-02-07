'use client';
import React, { useState, useEffect } from 'react';
//components
import Logo from '../public/assets/img/logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from '../components/Socials';
import Image from 'next/image';

import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [bg, setBg] = useState('false');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        {/* <a href="#">
          <Image src={Logo} />
          <span className="">SVTech</span>
        </a> */}
        <button
          onClick={() => scrollToTop()}
          className="font-primary font-semibold text-xl"
        >
          SV Tech
        </button>

        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
