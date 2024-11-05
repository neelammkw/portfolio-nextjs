import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import project1 from "../../public/images/projects/project-1.png";
import project2 from "../../public/images/projects/project-2.png";
import project3 from "../../public/images/projects/project-3.png";
import project4 from "../../public/images/projects/project-4.png";
import project5 from "../../public/images/projects/project-5.png";
import project6 from "../../public/images/projects/project-6.png";
import project7 from "../../public/images/projects/project-7.png";
import project8 from "../../public/images/projects/project-8.png";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedImage = animated(Image);

const FeaturedProject = ({ type, title, summary, img, link,link1, github }) => {
  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light relative shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <Link
        href={link || "#"}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
        <AnimatedImage
          src={img}
          alt={title}
          className="w-full h-auto"
          style={fadeInProps}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:pl-0 lg:w-full lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link || "#"}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link || "#"}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
          {link1 && (
            <Link
              href={link1}
              target="_blank"
              className="rounded-lg text-lg font-semibold underline dark:border-light md:text-base ml-10"
            >
              Visit Admin
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, link1, github, summary }) => {
  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link || "#"}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <AnimatedImage
          src={img}
          alt={title}
          className="w-full h-auto"
          style={fadeInProps}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link || "#"}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link || "#"}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline dark:border-light md:text-base"
          >
            Visit
          </Link>
          {link1 && (
            <Link
              href={link1}
              target="_blank"
              className="rounded-lg text-lg font-semibold underline dark:border-light md:text-base"
            >
              Visit Admin
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <div>
      <Head>
        <title>SHAN WEBTENCHO | Project Page</title>
        <meta
          name="description"
          content="Portfolio-Neelam-Full-Stack-Developer Next.js React.js MERN Developer"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Outshines Wisdom"
            className="lg:!text-6xl sm:mb-4 sm:!text-4xl xs:!text-2xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 pt-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Full Stack E-Commerce Website"
                img={project1}
                summary="full stack integrated E-Commerce website with an Admin Dashboard using React.js, Stripe for payment, MongoDB for all database management, Tailwind CSS & Shadcn UI for a stunning responsive UI design."
                link="https://fashion-fables.netlify.app"
                link1="https://fashion-fables-admin.netlify.app"
                github="https://github.com/neelammkw/eccomerce-shopping-client"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Hospital Management System"
                img={project2}
                summary="Build a Full Stack Hospital Management System with React, Node, MongoDB, Express with Admin Panel"
                link="https://hospital-management-patient.netlify.app"
                link1="https://hospital-management-admin.netlify.app"
                github="https://github.com/neelammkw/HospitalManagement"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Blog Website using MERN"
                img={project4}
                summary="Mern Blog App using Admin Dashboard also responsive and dark-light theme"
                link="https://story-stream.netlify.app"
                link1="https://story-stream-admin.netlify.app"
                github="https://github.com/neelammkw/blog_server"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="GetMeAChai - Patreon Clone in Next.js"
                img={project3}
                summary="A Patreon clone website for receiving funds and more features.Funding can be sought from fans, coders for open-source projects."
                link="https://getmeachai.netlify.app"
                github="https://github.com/neelammkw/GetMeAChai"
                type="Project"
              />
            </div>
            
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Food Ordering Site using MERN"
                img={project5}
                summary="Food Ordering website with admin-restaurant login for entry of menus and check for Order status"
                link="https://mern-foododering-app-frontend.onrender.com"
                github="https://github.com/neelammkw/mern-foododering-app-backend"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Cryptocurrency Site using React"
                img={project6}
                summary="By Fetching API in JavaScript to retrieve data this website is done in React"
                link="https://cryptocurrency-elzo.onrender.com"
                github="https://github.com/neelammkw/cryptocurrency"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Business Website UI"
                img={project7}
                summary="Business website UI Design using React"
                link="https://react-business-ap.netlify.app/"
                github="https://github.com/neelammkw/React-Business-App"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Youtube Clone UI using React"
                img={project8}
                summary=""
                link="https://youtube-clone-byn.netlify.app"
                github="/"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
