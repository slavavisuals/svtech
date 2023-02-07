import React from 'react';
import AboutImg from '../public/assets/img/atcoding.svg';
import Image from 'next/image';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-24">
          {/* <Image
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={AboutImg}
          /> */}
          {/* <Image
            className="object-cover h-full w-[600px] md:mx-auto lg:mx-0"
            src={AboutImg}
          /> */}

          <Image
            className="object-cover h-full w-[450px] md:mx-auto lg:mx-0 lg:mt-32 rounded-2xl"
            width="600"
            height="400"
            src="https://res.cloudinary.com/slavavisuals/image/upload/v1674611216/profile/heroimage5.jpg"
          />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
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
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold absolute  md:top-1/2 transform md:-translate-x-10 xl:-translate-x-16 md:-translate-y-1/2">
                  My work
                </h2>
              </div>

              <p className="my-6 text-gray-100 text-left font-light text-xl">
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
              className="btn text-center btn-md bg-accent hover:cursor-pointer hover:bg-secondary-hover mt-4 md:btn-lg transition-all"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Contact me
            </Link>
            {/* <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              Contact me
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
