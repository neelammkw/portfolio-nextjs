import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed top-12 left-4 flex items-center justify-center overflow-hidden  md:right-8 md:left-auto md:hidden md:absolute sm:right-0 sm:bottom-80">
      <div className="flex items-center justify-center relative ">
      <div className="w-40 p-1 h-auto flex items-center justify-center relative animate-spin-slow dark:text-light md:w-24 ">
        <CircularText className={"fill-dark absolute top-1 left-0 animate-spin-slow dark:fill-light"} />
</div>
<div>
        <Link
          href="mailto:neelammkw@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
        </div>
      </div>
    </div>
  );
};
export default HireMe;
