import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Image from 'next/image';
import TransitionEffect from "@/components/TransitionEffect"

export default function Home() {
  return (
    <>
      <Head>
  <title>Neelam&apos;s Portfolio - Full Stack Developer</title>
  <meta name="description" content="Welcome to Neelam Makwana&apos;s portfolio. Explore the projects and skills of a passionate Full Stack Developer specializing in Next.js, React, and the MERN stack." />
  
  <meta property="og:title" content="Neelam&apos;s Portfolio - Full Stack Developer" />
  <meta property="og:description" content="Discover the projects and skills of Neelam Makwana, a dedicated Full Stack Developer with expertise in Next.js, React, and the MERN stack." />
  

  <meta name="keywords" content="Neelam Makwana, Full Stack Developer, Next.js, React.js, MERN stack, Web Developer, Portfolio, JavaScript, Node.js, MongoDB, Express.js" />
  <meta name="author" content="Neelam Makwana" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <link rel="canonical" href="https://portfolio-neelammkw.netlify.app" />

  <link rel="icon" href="/favicon.ico" />
</Head>

      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-14 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <motion.div
              className="w-[50%] rounded-full md:w-[80%]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.video
                src={require("../../public/hero1.mp4")}
                autoPlay
                muted
                loop priority="true" sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw" 
                className="rounded-full w-full lg:hidden md:inline-block md:w-full h-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </motion.div>
            <div className="w-1/2 p-5 m-2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl !text-left xl:!text-center lg:!text-4xl sm:!text-2xl"
              />
              <motion.p
                className="my-4 text-base font-medium md:text-sm sm:tet-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </motion.p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <motion.div>
                  <Link
                    href="/Resume-Neelam.pdf"
                    target={"_blank"}
                    download
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base "
                >
                  <Link href="mailto:neelammkw@gmail.com">Contact</Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Layout>
        
        <HireMe />
        
        <div className="absolute right-8 bottom-8 inline-block w-10 md:hidden">
          <Image
            src={lightBulb}
            alt="SHAN WEBTECHNO"
            className="w-full h-auto"
            priority="true" sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw" 
          />
        </div>
      </main>
    </>
  );
}
