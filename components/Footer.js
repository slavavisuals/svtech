import React from 'react';

import { social } from './data';
import Image from 'next/image';

import Logo from '../public/assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='py-12 bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between items-center space-y-6 lg:flex-row lg:space-y-0'>
          <div className='flex justify-center items-center space-x-6'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-base text-accent' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* <div>
            <span className="text-xl font-semibold text-white font-primary">
              SV Tech
            </span>
          </div> */}
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2025 SVtech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
