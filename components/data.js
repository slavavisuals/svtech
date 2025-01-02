//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { RiFlowChart } from 'react-icons/ri';

// projects images
import Project1 from '../public/assets/img/projects/p1.webp';
import Project2 from '../public/assets/img/projects/p2.webp';
import Project3 from '../public/assets/img/projects/p3.webp';
import Project4 from '../public/assets/img/projects/p4.webp';
import Project5 from '../public/assets/img/projects/p5.webp';
import Project6 from '../public/assets/img/projects/p6.webp';

// skills images
import SkillImg1 from '../public/assets/img/skills/html5.png';
import SkillImg2 from '../public/assets/img/skills/css3.png';
import SkillImg3 from '../public/assets/img/skills/js.png';
import SkillImg4 from '../public/assets/img/skills/reactjs.png';
import SkillImg5 from '../public/assets/img/skills/nextjs.png';
import SkillImg6 from '../public/assets/img/skills/nodejs.png';
import SkillImg7 from '../public/assets/img/skills/git.png';
import SkillImg8 from '../public/assets/img/skills/tail.png';

// testimonial images
import TestiImage1 from '../public/assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from '../public/assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from '../public/assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'experience',
    href: 'experience',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/@slavavisuals',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/slavavisuals/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/slavavisuals/',
  },
];

export const brands = [
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673930959/companies/cg.png',
    width: 422,
    height: 36,
    alt: 'Canada Goose',
    href: 'https://www.canadagoose.com',
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1675918133/companies/costco-wholesale.png',
    alt: 'Costco',
    href: 'https://www.costco.ca',
    width: 182,
    height: 50,
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1675918206/companies/wave.png',
    width: 381,
    height: 50,
    alt: 'WirelessWave',
    href: 'https://www.wirelesswave.ca',
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1675918273/companies/tbooth.png',
    width: 313,
    height: 50,
    alt: 'Tbooth Wireless',
    href: 'https://www.tboothwireless.ca',
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1675918333/companies/wireless-etc.png',
    width: 423,
    height: 50,
    alt: 'Wireless etc',
    href: 'https://www.mobility.costco.ca',
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136355/companies/intelex_m6pjhi.png',
    alt: 'Intelex',
    width: 273,
    height: 50,
    href: 'https://www.intelex.com',
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136485/companies/synergy_gvjsso.png',
    alt: 'Synergy Networx',
    width: 273,
    height: 50,
    href: 'https://www.synergynetworx.com',
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136636/companies/index-exchange_fnvtjn.png',
    alt: 'Index exchange',
    width: 112,
    height: 50,
    href: 'https://www.indexexchange.com',
  },
  {
    img: 'https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136485/companies/osc-new_bff4kw.png',
    alt: 'Ontario Security Commision',
    width: 158,
    height: 50,
    href: 'https://osc.ca',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// work experience
export const experienceNav = [
  {
    name: 'slava tech inc',
    year: 'Feb 2023 - Current',
  },
  {
    name: 'evans hunt',
    year: 'Feb 2024 - Oct 2024',
  },
  {
    name: 'wellington-altus',
    year: 'Mar 2023 - Sep 2023',
  },
  {
    name: 'glentel',
    year: 'Dec 2020 - Mar 2023',
  },
  {
    name: 'canada goose',
    year: '2017-2020',
  },
  {
    name: 'intelex',
    year: '2015-2017',
  },
  {
    name: 'synergy networx',
    year: '2013-2015',
  },
  {
    name: 'index exchange',
    year: 'Jan 2013 - July 2013',
  },
  {
    name: 'OSC',
    year: 'July 2012 - Sept 2012',
  },
];

export const experienceData = [
  {
    id: '0',
    name: 'slava tech inc',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
     <div class="ml-3 w-max h-auto md:w-[204px] md:h-[50px] flex items-center justify-center"><h3 class="font-semibold text-black">Slava Tech Inc.</h3></div>
    </div>
    <div class="pl-4 text-xl text-left md:pl-6">Feb 2024 - Present</div>
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-none">
        Operating as independent contractor I provide contracting services to clients in various industries,
        specializing in front-end development, CMS integration, and scalable solutions.
      </li>
    </ul>
    </div>`,
  },
  {
    id: '1',
    name: 'evans hunt',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="ml-3 w-max h-auto md:w-[204px] md:h-[50px]" src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1732566044/experience/evans-hunt.png' alt="glentel logo" />
    </div>
    <div class="pl-4 text-xl text-left md:pl-6">Feb 2024 - Current</div>
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        Led front-end development for a client project in the hotel and resort management industry,
        catering to thousands of customers.
      </li>
      <li class="list-square">
        Implemented and integrated a Headless CMS using Sanity IO and NextJS, enhancing content
        delivery and management.
      </li>
      <li class="list-square">
        Configured and maintained Azure Pipelines for continuous integration and deployment (CI/CD),
        improving development workflows.
      </li>
      <li class="list-square">Developed Node.js backend scripts for automation and efficient data retrieval, increasing
        operational efficiency.
      </li>
      <li class="list-square">Created and integrated external APIs for dynamic form management, improving data handling and
        user interactions</li>
      <li class="list-square">Conducted numerous UI enhancements and bug fixes, significantly improving application stability
        and user satisfaction.</li>
    </ul>
    </div>`,
  },
  {
    id: '2',
    name: 'wellington-altus',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="ml-3 w-max h-auto md:w-[204px] md:h-[50px]" src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1732566044/experience/wellington-altus.png' alt="wellington-altus logo" />
      
    </div>
    <div class="pl-4 text-xl text-left md:pl-6">May 2023 - Feb 2024</div>
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        Led the development and maintenance of a React.js and Next.js application with a strong focus on
        integrating Strapi CMS, enhancing content management workflows, and enabling smooth product
        launches.
      </li>
      <li class="list-square">
        Collaborated with cross-functional teams to build and optimize Next.js components, improving user
        experience and efficiency in content delivery.
      </li>
      <li class="list-square">
        Integrated Strapi CMS with AWS services to ensure scalable, secure, and reliable content
        management and application performance.
      </li>
      <li class="list-square">Acted as the in-house expert on Strapi CMS, providing solutions for issues and continuously
        improving the platform to meet stakeholder requirements and product vertical launches.</li>
    </ul>
    

    
    </div>`,
  },
  {
    id: '3',
    name: 'glentel',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="ml-3 w-max h-auto md:w-[204px] md:h-[50px]" src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673133665/companies/glentel-logo_rub3d2.png' alt="glentel logo" />
    </div>
    <div class="pl-4 text-xl text-left md:pl-6">Dec 2020 - May 2023</div>
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        Lead developer responsible for maintaining Glentel's web properties (<span class="font-bold">Costco Mobility</span>, <span class="font-bold">Wireless Wave</span>, and <span class="font-bold">Tbooth Wireless)</span>
      </li>
      <li class="list-square">
        Designed and implemented new features and functionalities for the eCommerce sites using React.js/Next.js and Sanity CMS
      </li>
      <li class="list-square">
        Architected and built scalable custom CMS templates for marketing campaigns, promotions, and web banners
      </li>
      <li class="list-square">Assessed technical feasibility and prototyped software solutions using cutting-edge front-end technologies</li>
      <li class="list-square">Performed code reviews and managed code deployment through Azure DevOps CI/CD pipelines</li>
      <li class="list-square">Mentored junior front-end engineers and contributed to their technical growth and development</li>
    </ul>
    

    
    </div>`,
  },
  {
    id: '4',
    name: 'canada goose',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="w-max md:w-[292px] md:h-[50px]"src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673135744/companies/cg_ldj8po.png' alt="glentel logo" />
    </div>
    <div class="pl-4 text-xl text-left md:pl-6">April 2017 - November 2020</div>
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        Designed and built scalable and secure user experiences for high-traffic websites with a global footprint across 13+ countries
      </li>
      <li class="list-square">
        Ensured platform-agnostic design implementations for maximum compatibility and user accessibility
      </li>
      <li class="list-square">
        Led an international team of cross-functional collaborators, including software engineers, UX designers, product managers, and partners
      </li>
      <li class="list-square">
        Facilitated continuous improvement through CI/CD pipelines and test automation
      </li>
      <li class="list-square">
        Utilized Azure cloud for optimized performance through CDN global edge endpoint web optimization
      </li>
    </ul>

    </div> 
    `,
  },
  {
    id: '5',
    name: 'intelex',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="w-max h-auto md:w-[273px] md:h-[50px]" src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136355/companies/intelex_m6pjhi.png' alt="glentel logo" />
    </div>
    <div class="pl-4 text-xl text-left md:pl-6">April 2015 - February 2017</div>
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        Developed highly scalable SAAS applications serving over 1.3 million users globally
      </li>
      <li class="list-square">
        Responsible for end-to-end design and implementation of key UX/UI deliverables, ensuring consistency across all offerings
      </li>
      <li class="list-square">
        Maintained platform-agnostic solutions for scalable performance on Mobile (Android/iOS) and web environments
      </li>
      <li class="list-square">
        Employed automated testing and deployment through git push to CI/CD pipelines
      </li>
      <li class="list-square">
        Utilized industry-recognized CMS solutions and their respective APIs, along with CDN technologies, for robust and low-latency optimization for static and geo-edge locations.
      </li>
    </ul>
    </div>
    `,
  },
  {
    id: '6',
    name: 'synergy networx',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="w-max h-auto md:w-[273px] md:h-[50px]" src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136485/companies/synergy_gvjsso.png' alt="glentel logo" />
    </div>
    <div class="text-xl text-left">March 2014 - March 2015</div>
    <p class="font-light text-left">Responsible for end-to-end UI/UX development and implementation of a SAAS based Hedge Fund Investment Relations Platform and Hosting Company.</p> 
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        Utilized HTML5/CSS3/XML with PHP
      </li>
      <li class="list-square">
        Developed mobile websites using WordPress CMS / Drupal CMS
      </li>
      <li class="list-square">
        Developed custom websites for hedge funds and pharmaceutical clients
      </li>

    </ul>
    </div>
    `,
  },
  {
    id: '7',
    name: 'index exchange',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="w-max h-auto md:w-[112px] md:h-[50px]" src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136636/companies/index-exchange_fnvtjn.png' alt="glentel logo" />
    </div>
    <div class="text-xl text-left">Jan 2013 - July 2013</div>
    <p class="font-light text-left">As a contractor for multi-national advertising and technology automation company for real-time transact ad impressions I was responsible for front end programming and developing dynamic web applications.</p> 
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        leveraged HTML5/CSS3, JavaScript, and JSON to develop dynamic and engaging web pages
      </li>
      <li class="list-square">
        Developed and tested applications with multiple browsers and devices, including smartphones and tablets
      </li>
      

    </ul>
    </div>
    `,
  },
  {
    id: '8',
    name: 'osc',
    description: `
    <div class="flex flex-col gap-y-2 text-sm md:text-xl">
    <div class="flex items-center justify-center bg-white py-3 mb-1 md:mb-3 rounded-lg w-full md:w-[320px]">
      <img class="w-max h-auto md:w-[158px] md:h-[50px]" src='https://res.cloudinary.com/slavavisuals/image/upload/q_auto:best/v1673136485/companies/osc-new_bff4kw.png' alt="glentel logo" />
    </div>
    <div class="text-xl text-left">July 2012 - Sept 2012 (Internship)</div>
    <p class="font-light text-left">As an Intern I was tasked with updating the company's online presence</p> 
    <ul class="pl-4 font-light list-outside text-left md:pl-6">
      <li class="list-square">
        Maintained and updated the company's website using HTML5 and the Open Text CMS platform
      </li>
      <li class="list-square">
      Oversaw production, modification, and maintenance of website user interface
      </li>
      <li class="list-square">
      Ensured a seamless and user-friendly experience for visitors
      </li>

    </ul>
    
    </div>
    `,
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    alt: 'HTML5',
  },
  {
    image: SkillImg2,
    alt: 'CSS/CSS3',
  },
  {
    image: SkillImg3,
    alt: 'JavaScript',
  },
  {
    image: SkillImg4,
    alt: 'React.js',
  },
  {
    image: SkillImg5,
    alt: 'Next.js',
  },
  {
    image: SkillImg6,
    alt: 'Node.js',
  },
  {
    image: SkillImg7,
    alt: 'Git',
  },
  {
    image: SkillImg8,
    alt: 'Tailwind CSS',
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Front End',
    description:
      'As a front-end developer, I use HTML, CSS, and JavaScript to design and build the user interface and user experience of a website or application for an optimal end-user experience.',
  },
  {
    icon: <AiOutlineCloudServer />,
    name: 'Back End',
    description:
      'For the back end I develop and maintain the infrastructure and server-side logic for websites and applications to ensure smooth functioning and data flow.',
  },
  {
    icon: <BsTools />,
    name: 'Website Maintenance',
    description:
      "I provide ongoing support, updates and troubleshooting to keep the website running optimally. This includes tasks such as fixing bugs, adding new features, and keeping the website's software and security up-to-date.",
  },
  {
    icon: <RiFlowChart />,
    name: 'DevOps',
    description:
      'I help organizations and indivisuals to develop, test and deploy websites and web applications faster and more efficiently by automating and streamlining the software development process.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Canada, Remote',
    description: 'Serving clients worldwide',
  },
];
