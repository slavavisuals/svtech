import React, { useState, useEffect } from 'react';

// import data
import { experienceData, projectsData } from './data';
import { experienceNav } from './data';

const Experience = () => {
  const [workItem, setWorkItem] = useState({ name: 'slava tech inc' });
  const [workDescription, setWorkDescription] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    //get workDescription based on selected item
    const newWorkItem = experienceData.filter((singleExpItem) => {
      return singleExpItem.name.toLowerCase() === workItem.name;
    });
    //setFade(true);
    setWorkDescription(newWorkItem);
  }, [workItem]);

  const handleClick = (e, index) => {
    setWorkItem({ name: e.target.textContent.toLowerCase() });

    setActive(index);
  };

  //console.log('workItem: ', workItem);

  return (
    <div
      id='experience'
      className='section bg-primary text-gray-100 min-h-[900px] '
    >
      <div className='container flex flex-col mx-auto main-wrapper'>
        {/* Heading */}
        {/* <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Experience
          </h2>
          <div className="mb-16 w-2/4 text-center">
            Here are some companies where I had pleasure to work in
          </div>
        </div> */}

        <div className='relative flex justify-center h-[40px] md:h-[100px] border-none'>
          <svg
            height='100'
            width='750'
            className='hidden md:block stroke-[#646464] text-[100px] font-display uppercase fill-transparent tracking-tight'
          >
            <text x='0' y='75'>
              Experience
            </text>
          </svg>
          <h2 className='absolute text-3xl font-medium transform lg:text-4xl lg:font-extrabold md:top-1/2 md:-translate-x-10 xl:-translate-x-16 md:-translate-y-1/2'>
            Companies
          </h2>
        </div>

        <p className='mx-auto my-6 text-gray-100'>
          Here are some companies where I had pleasure to work in
        </p>

        {/* main thing */}
        <div className='flex flex-col xl:flex-row items-start justify-center gap-x-2 md:gap-x-10 xl:h-[300px]'>
          {/* Work Exp Nav */}

          <nav className='mb-3 md:mb-12 md:mt-24'>
            <ul className='flex justify-around items-start w-full text-gray-100 lg:flex-row xl:flex-col'>
              {experienceNav.map((item, index) => {
                return (
                  <li
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    key={index}
                    className={`${
                      active === index ? 'active' : ''
                    } cursor-pointer capitalize my-1 px-[0.3rem] md:px-3 text-[0.7rem] font-semibold md:text-lg`}
                  >
                    <span className='transition-all duration-300'>
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Work experience Item */}
          <section className='grid gap-y-12'>
            {workDescription.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-start text-center xl:w-[800px] md:mx-auto`}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
