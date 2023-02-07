import React from 'react';
import Image from 'next/image';
import { skills } from './data';

const Skills = () => {
  return (
    <section className="bg-tertiary py-16">
      <div className="container mx-auto">
        <div className="text-center text-3xl font-extrabold pb-8 text-gray-100 font-primary ">
          My technology stack
        </div>

        <div className="grid grid-cols-8 md:grid-flow-col">
          {skills.map((skill, index) => {
            return (
              <div
                data-tip={skill.alt}
                className="
                flex items-center justify-center md:relative"
                key={index}
              >
                <Image
                  alt={skill.alt}
                  title={skill.alt}
                  width="auto"
                  className="lg:h-[96px]
                  
                  "
                  src={skill.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
