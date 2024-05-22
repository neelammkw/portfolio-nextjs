import React, {useRef} from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon"

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8  last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <LiIcon reference={ref}/>
      <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-xl  sm:text-xl xs:text-lg">
          {type}&nbsp;{" "}
          
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light sm:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-40 relative">
      <h2 className="font-bold text-6xl w-full text-center mb-10 md:text-6xl xs:text-4xl md:mb-10">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 mt-10 h-full bg-dark w-[4px] origin-top dark:bg-light 
        md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            type="Hemchandracharya North Gujarat University, Patan"
            time="May/June-2008"
            place="Government Engineering College, Modasa (B.E.-Information Technology)"
            info="Grade: Second"
          /><Details
            type="Gujarat Secondary and Higher Secondary Education Board, Gandhinagar"
            time="March-2004"
            place="Sheth C M Higher Secondary School, Gandhinagar(12th)"
            info="Persentage: 53.69 %"
          /><Details
            type="Gujarat Secondary and Higher Secondary Education Board, Gandhinagar"
            time="March/April-2002"
            place="Swami Yoganand High School, Gandhinagar(10th)"
            info="Persentage: 86.00%"
          />
          
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Education;
