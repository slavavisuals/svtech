import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { brands } from './data';

const Brands = () => {
  //bg-tertiary
  return (
    <section className="flex-col  bg-[#e2e2e2] flex items-center py-12">
      <div className="font-semibold text-2xl text-center pb-8 text-primary">
        List of companies I built applications for:
      </div>
      <div className="container mx-auto flex md:justify-evenly gap-y-4 items-center flex-wrap justify-evenly">
        {brands.map((brand, idx) => {
          //console.log('brand', brand);
          return (
            <div key={idx} className=" px-4 py-4 xl:px-2 xl:py-3 rounded-xl">
              <Link target="_blank" href={brand.href}>
                <Image alt={brand.alt} src={brand.img} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
