import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "@/components/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark  my-1`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("Button clicked, isOpen:", !isOpen); // Debugging log
  };

  return (
    <header className="w-full px-32 font-medium flex  py-8 dark:text-light relative z-10  ">
      <div className="flex -ml-[5rem] justify-center">
        <button
          className="flex flex-col  cursor-pointer hidden lg:flex" // Ensure button is above other elements
          onClick={handleClick}
        >
          <span
            className={`bg-dark transition-all duration-300 dark:bg-light block h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark transition-all duration-300 dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300  ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>
      <div className="w-full flex flex-col items-left lg:hidden ">
        <nav className={`${!isOpen ? "block" : "hidden"} lg:flex`}>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md p-[3rem] "
        >
          <nav
            className={`${
              !isOpen ? "block" : "hidden"
            } lg:flex flex items-center flex-col justify-center `}
          >
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>
          <div className=" w-full flex items-center justify-center  p-7 flex-wrap">
            <nav className="flex items-center justify-center flex-wrap">
              <motion.a
                href="https://github.com/neelammkw"
                target="_blank"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/neelammkw"
                target="_blank"
                className="w-6 mx-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center sm:mx-1 rounded-full p-1 ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </div>
        </motion.div>
      ) : null}
      <div className=" w-full flex  justify-end flex-wrap lg:hidden">
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/neelammkw"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/neelammkw"
            target="_blank"
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] z-10">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
