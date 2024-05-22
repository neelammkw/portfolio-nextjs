import React, { useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import article1 from "../../public/images/articles/article-1.png";
import article2 from "../../public/images/articles/article-2.png";
import article3 from "../../public/images/articles/article-3.png"
import article4 from "../../public/images/articles/article-4.png"
import article5 from "../../public/images/articles/article-5.png";
import article6 from "../../public/images/articles/article-6.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect"

const AnimatedImage = animated(Image);
const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block ";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none ";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
      style={{x:x, y:y}}
      whileInView={{opacity:1, transition:{duration: 0.2}}}
      ref={imgRef}
        src={img}
        alt={title} priority sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw" 
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Define spring animation for scale effect
  const scaleProps = useSpring({
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  });

  // Define spring animation for fade effect
  const fadeProps = useSpring({
    opacity: isHovered ? 1 : 0.8,
  });

  // Combine scale and fade animations
  const combinedProps = { ...scaleProps, ...fadeProps };

  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
        <AnimatedImage
          src={img}
          alt={title}
          className="w-full h-auto"
          style={combinedProps}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} priority sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw" 
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2"> {summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease: "easeInOut"}}}
    viewport={{once:true}} className="realtive w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:text-light dark:border-light dark:bg-dark sm:flex-col">
      <MovingImg title={title} img={img} link={link} />

      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};
const Articles = () => {
  return (
    <>
      <Head>
        <title>SHAN WEBTENCHO | Articles Page</title>
        <meta
          name="description"
          content="Portfolio-Neelam-Full-Stack-Developer Next.js React.js MERN Developer"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words can change the World!" className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-4xl xs:!text-2xl" />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="Project GetMeAChai - Patreon Clone in Next.js | Sigma Web Development Course"
              summary="With a blend of creativity and technical acumen, you are now equipped to embark on your Patreon clone journey in Next.js."
              time="9 min read"
              link="https://story-stream.netlify.app/project-getmeachai-patreon-clone-in-nextjs-sigma-web-development-course/66269e49b782675ddd4e1ca5"
              img={article1}
            />
            <FeaturedArticle
              title="Apple Is Skipping Its Spring Event This Year"
              summary="Instead announce new products online, Expected releases include a new Mac, iPad, Apple Pencil, and Magic Keyboard."
              link="https://story-stream.netlify.app/apple-is-skipping-its-spring-event-this-year/66269c5ab782675ddd4e1c9a"
              time="5 min read"

              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Python for javascript developers"
              date="March 25, 2024"
              link="https://story-stream.netlify.app/python-for-javascript-developers/6601c14d2a40defa6fad4229"
              img={article5}
            />
            <Article
              title="Launching the AI Opportunity Initiative for Europe"
              date="April 22, 2024"
              link="https://story-stream.netlify.app/launching-the-ai-opportunity-initiative-for-europe/66269d47b782675ddd4e1c9e"
              img={article3}
            />
            <Article
              title="Mastering Next.js 14 for Online Banking Apps"
              date="May 9, 2024"
              link="https://www.linkedin.com/pulse/mastering-nextjs-14-online-banking-apps-neelam-makwana-b9ohf/?trackingId=ghJoBBcgt6VkqpIsAYqpFg%3D%3D"
              img={article4}
            />
            <Article
              title="Lets build this project in Nextjs"
              date="March 25, 2024"
              link="https://story-stream.netlify.app/lets-build-this-project-in-nextjs/6601bfed2a40defa6fad421f"
              img={article6}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
