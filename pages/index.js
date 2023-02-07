import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTopBtn from '../components/BackToTopBtn';
import Experience from '../components/Experience';
import ExperienceSlider from '../components/ExperienceSlider';
import { useMediaQuery } from '../components/helpers';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <>
      <Head>
        <title>SVTech</title>
        <meta
          name="description"
          content="Freelance Web Developer offering top-notch web design and development services. Specializing in creating user-friendly websites and web applications that deliver exceptional results. Contact me for a free consultation."
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      {isDesktop ? <Experience /> : <ExperienceSlider />}
      {/* <Portfolio /> */}
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  );
}
