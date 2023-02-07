import React, { useState } from 'react';

// import icons
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';

import { navigation } from './data';

// import components
import { Social } from './data';

// import framer
import { motion } from 'framer-motion';

// import Link
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  //framer motion variants
  const circleVarints = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulValues = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <Bars3BottomRightIcon className="w-8 h-8" />
      </div>
      {/* circle */}
      <motion.div
        variants={circleVarints}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>
      {/* menu */}
      <motion.ul
        variants={ulValues}
        initial="hidden"
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XMarkIcon className="w-8 h-8" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                onClick={() => setIsOpen(false)}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl cursor-pointer capitalize"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
