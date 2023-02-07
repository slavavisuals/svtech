import React from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start font-light">
            <p className="pt-4 pb-2 md:pt-2 md:pb-2 max-w-[480px] text-xl text-left  text-gray-300">
              As a Front End software engineer, I am known for approaching
              problems in a unique way.
            </p>
            <p className="pt-4 pb-2 md:pt-2 md:pb-2 max-w-[480px] text-xl text-left  text-gray-300">
              Instead of adding complexity, I strive to simplify and streamline
              solutions.
            </p>
            <p className="pt-4 pb-2 md:pt-2 md:pb-2 max-w-[480px] text-xl text-left  text-gray-300">
              My finished work projects are both visually appealing and
              user-friendly, making them easy for anyone to use.
            </p>
            <p className="pt-4 pb-2 md:pt-2 md:pb-2 max-w-[480px] text-xl text-left  text-gray-300">
              My name is Slava, and I am driven by the desire to challenge the
              status quo and solve complex problems.
            </p>

            <Link
              className="btn text-center btn-md bg-accent hover:cursor-pointer hover:bg-secondary-hover mt-4 md:btn-lg transition-all"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Want to hire me for your next project?
            </Link>
          </div>
          <div className="hidden lg:flex justify-end items-end ">
            <Image
              alt="myself"
              className="object-cover h-full w-[600px] md:mx-auto lg:mx-0 rounded-2xl"
              width="600"
              height="400"
              src="https://res.cloudinary.com/slavavisuals/image/upload/v1674611216/profile/heroimage2.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
