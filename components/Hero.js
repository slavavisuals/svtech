import React from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center pt-24 pb-8 overflow-hidden bg-primary lg:bg-cover lg:bg-center xl:pb-10 xl:h-fit"
    >
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center h-full xl:flex-row">
          {/* Text and button grouped */}
          <div className="flex flex-col items-center order-2 xl:order-1 xl:w-3/4">
            <div className="flex flex-col items-center py-5 space-y-2 text-lg font-light md:py-8 md:w-3/4 lg:items-start lg:text-xl xl:order-1">
              <p className="text-left text-gray-300">
                As a Front End software engineer, I am known for approaching
                problems in a unique way.
              </p>
              <p className="text-left text-gray-300">
                Instead of adding complexity, I strive to simplify and
                streamline solutions.
              </p>
              <p className="text-left text-gray-300">
                My projects are both visually appealing and user-friendly,
                making them easy for anyone to use.
              </p>
              <p className="text-left text-gray-300 ">
                <span className="font-semibold">My name is Slava</span>, and I
                am driven by the desire to challenge the status quo and solve
                complex problems.
              </p>
            </div>

            <Link
              className="btn w-full md:w-3/4 text-center text-sm xl:text-lg h-[48px] bg-accent hover:cursor-pointer hover:bg-secondary-hover   transition-all order-3"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Want to hire me for your next project?
            </Link>
          </div>

          <div className="flex order-1 xl:order-2 xl:self-end">
            <Image
              alt="myself"
              className="object-cover h-full w-[400px] md:w-[600px] md:mx-auto lg:mx-0 rounded-2xl"
              width="600"
              height="400"
              src="https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1674611216/profile/heroimage2.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
