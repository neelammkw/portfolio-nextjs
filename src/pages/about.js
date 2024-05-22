import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/photo.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect"
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const About = () => {
  return (
    <>
   <Head>
  <title>About | Neelam Makwana - Full Stack Developer</title>
  <meta
    name="description"
    content="Learn more about Neelam Makwana, a passionate Full Stack Developer with expertise in Next.js, React.js, and the MERN stack. Discover Neelam's journey, skills, and projects."
  />

  
  <meta property="og:title" content="About | Neelam Makwana - Full Stack Developer" />
  <meta
    property="og:description"
    content="Explore the professional background of Neelam Makwana, a Full Stack Developer specializing in Next.js, React.js, and the MERN stack. Discover skills, experience, and projects."
  />
  <meta property="og:image" content="/images/profile/photo.png" />
  <meta property="og:url" content="https://www.yourportfolio.com/about" />
  <meta property="og:type" content="website" />

  
  <meta
    name="keywords"
    content="Neelam Makwana, Full Stack Developer, Next.js, React.js, MERN stack, Web Developer, Portfolio, JavaScript, Node.js, MongoDB, Express.js"
  />
  <meta name="author" content="Neelam Makwana" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="canonical" href="https://www.yourportfolio.com/about" />

 
  <link rel="icon" href="/favicon.ico" />
</Head>
   <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Inspiration Ignites Ambition!"
            className="mb-14 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start  justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light ">
                Biography
              </h2>
              <p className="font-medium">
                Hey there, I&apos;m Neelam, an enthusiastic full-stack web developer
                committed to creating captivating, user-friendly, and innovative
                digital experiences. With over 1+ year of hands-on experience
                in the field, I&apos;m constantly exploring inventive approaches to
                bring my clients&apos; visions to life.
              </p>
              <p className="my-4 font-medium">
                Whether I&apos;m working on a website or mobile app I bring my
                commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to
                bring my skills and passion to your next project.
              </p>
              <p className="my-4 font-medium">

              Having taken a pause to prioritize family responsibilities, I am now reinvigorated and eager to contribute my passion, renewed skills, and a continuous learning mindset to an innovative organization. During this time, I have utilized platforms like YouTube to independently learn new skills, ensuring that I am well-equipped to add significant value to my next professional endeavor.
              </p>
            </div>
            <div className="col-span-3 relative rounded-2xl border-2  border-solid border-dark dark:bg-light p-10  bg-dark dark:border-light xl:col-span-4 md:order-1 h-auto md:col-span-8 md:h-[300px] md:w-[300px] h-[500px] w-[400px] md:mx-auto
           ">
              <div className=" absolute -top-4 right-1 p-3 w-[102%] h-[103%]  border border-dark  dark:border-light  z-10 rounded-2xl  bg-light dark:bg-dark">
                <Image
                  src={profilePic}
                  alt="SHAN WEBTECHNO"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-auto p-5  dark:border-dark rounded-[2.5rem]" priority sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" 
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col  items-end justify-center xl:items-center">
                <span className="inline-block text-4xl font-bold sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-lg sm:text-base xs:text-sm">
                 
                  Projects
                </h2>
              </div>{" "}
              <div className="flex flex-col  items-end justify-center xl:items-center">
                <span className="inline-block text-4xl font-bold dark:text-light sm:text-3xl xs:text-2xl"><AnimatedNumbers value={0} />New !</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-lg sm:text-base xs:text-sm">
                  Be My Client
                </h2>
              </div>{" "}
              <div className="flex flex-col  items-end justify-center xl:items-center">
                <span className="inline-block text-4xl font-bold sm:text-3xl xs:text-2xl">1+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-lg sm:text-base xs:text-sm">
                  Year experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default About;
