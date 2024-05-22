import React, {useRef} from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8  last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
    <LiIcon reference={ref}/>
      <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-xl sm:text-xl xs:text-lg ">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-40 relative">
      <h2 className="font-bold text-6xl w-full text-center mb-10 md:text-6xl xs:text-4xl md:md-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto lg:w-[90%] md:w-full relative">
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 mt-10 h-full bg-dark w-[4px] origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            position="Jr. Web Developer"
            company="Softcon Technologies"
            time="01/2010 - 07/2010"
            address="Vadodara"
            work="Asp.net Developement using SQL Server"
            companyLink="http://softcomindpvtltd.com"
          />
          <Details
            position="Web Developer"
            company="Lotus Infotech Pvt. Ltd."
            time="01/2009 - 10/2009"
            address="Gandhinagar"
            work="Used to Develope Website using Asp.net "
          />
         
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Experience;
