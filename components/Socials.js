import React from 'react';
import Link from 'next/link';

//import icons
import { social } from './data';

const Socials = () => {
  return (
    <ul className="flex space-x-6 ">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-accent"
            key={index}
          >
            {/* <a className="text-base" href={item.href}>
              {item.icon}
            </a> */}

            <Link href={item.href} legacyBehavior>
              <a className="text-base" target="_blank">
                {item.icon}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
