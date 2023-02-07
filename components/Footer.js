import React from 'react';

import { social } from './data';
import Image from 'next/image';

import Logo from '../public/assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* <div>
            <span className="font-primary font-semibold text-xl text-white">
              SV Tech
            </span>
          </div> */}
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2023 SVtech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
