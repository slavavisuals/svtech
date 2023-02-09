import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { brands } from './data';

const Brands = () => {
  //bg-tertiary
  return (
    <section className="flex-col  bg-[#e2e2e2] flex items-center py-8">
      <div className="pb-8 text-xl text-center font-simple text-primary">
        My projects are working at:
      </div>
      <div className="container flex flex-wrap items-center mx-auto md:justify-evenly gap-y-4 justify-evenly">
        {brands.map((brand, idx) => {
          //console.log('brand', brand);
          return (
            <div key={idx} className="px-4 py-4 xl:px-2 xl:py-3 rounded-xl">
              <Link target="_blank" href={brand.href}>
                <Image
                  width={brand.width}
                  height={brand.height}
                  alt={brand.alt}
                  src={brand.img}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
