import React from 'react';
import AboutImg from '../public/assets/img/atcoding.svg';
import Image from 'next/image';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className="py-16 bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 xl:flex-row xl:gap-20">
          {/* <Image
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={AboutImg}
          /> */}
          {/* <Image
            className="object-cover h-full w-[600px] md:mx-auto lg:mx-0"
            src={AboutImg}
          /> */}

          <Image
            className="object-cover h-full w-[600px] md:mx-auto lg:mx-0  rounded-2xl"
            width="600"
            height="400"
            src="https://res.cloudinary.com/slavavisuals/image/upload/v1674611216/profile/heroimage5.jpg"
          />

          <div className="flex flex-col items-center text-center xl:w-3/4 lg:items-center lg:text-left">
            <div className="flex flex-col md:w-3/4 xl:w-full">
              <div className="relative flex justify-center h-[40px] md:h-[100px] border-none">
                <svg
                  height="100"
                  width="450"
                  className="hidden md:block stroke-[#646464] text-[100px] font-display uppercase fill-transparent tracking-tight"
                >
                  <text x="0" y="75">
                    About
                  </text>
                </svg>
                <h2 className="absolute text-3xl font-medium transform lg:text-4xl lg:font-extrabold md:top-1/2 md:-translate-x-10 xl:-translate-x-16 md:-translate-y-1/2">
                  My work
                </h2>
              </div>

              <p className="my-6 text-xl font-light text-left text-gray-100 xl:w-full">
                To create the visual elements and functionality of a website or
                application I use various frameworks and libraries. My most
                recent ones include <strong>React.JS</strong>,{' '}
                <strong>Next.JS</strong>, <strong>ES6</strong>,{' '}
                <strong>HTML5</strong>, <strong>CSS3/SASS</strong>,{' '}
                <strong>Tailwind CSS</strong> and many others.
                <br />
                I often take on side projects in addition to my regular work.
                This side job allows me to explore new technologies and
                techniques, and to work on projects that align with my personal
                interests and passions. Working on these side projects keeps me
                motivated, as it allows me to be creative and take ownership of
                my work.
                <br /> Additionally, I ensure that the website or application is
                optimized for search engines and is mobile-friendly, and I keep
                an eye on the latest web development trends and technologies to
                improve my skills and deliver better results. <br />
              </p>
            </div>
            <Link
              className="w-full mt-4 text-center transition-all btn bg-accent hover:cursor-pointer hover:bg-secondary-hover xl:w-full md:w-3/4"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Contact me
            </Link>
            {/* <button className="transition-all btn btn-md bg-accent hover:bg-secondary-hover">
              Contact me
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
