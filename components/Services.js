import React from 'react';

import { services } from './data';

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center h-[40px] md:h-[100px] border-none">
            <svg
              height="100"
              width="600"
              className="hidden md:block stroke-[#646464] text-[100px] font-display uppercase fill-transparent tracking-tight"
            >
              <text x="0" y="75">
                Services
              </text>
            </svg>
            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold md:absolute  md:top-1/2 transform md:-translate-x-10 xl:-translate-x-10 md:-translate-y-1/2">
              What I do
            </h2>
          </div>

          {/* <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for
          </h2> */}
          <p className="subtitle">
            Here is a comprehensive list of the professional services I can
            offer to enhance your business operations.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 text-gray-100 font-light text-lg">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-9 text-[42px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
