import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light py-3 px-6 absolute shadow-dark cursor-pointer dark:text-dark lg:py-2 lg:px-4 md:text-sm md:px-3 md:py-1.5 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{x:x, y:y}}
      transition={{ duration: 1.5}}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl md:text-4xl md:mt-32 xs:text-2xl mt-40 w-full text-center "> Skills </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circlurLight dark:bg-circlurDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circlurLightLg lg:dark:bg-circlurDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm   ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light p-8 shadow-dark cursor-pointer dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        
        <Skill name="HTML" x="-35vw" y="6vw" />
        <Skill name="CSS" x="-12vw" y="-10vw" /><Skill name="Node" x="5vw" y="-5vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" /> <Skill name="NextJS" x="30vw" y="12vw" />
        <Skill name="Bootstrap" x="15vw" y="-12vw" />
        <Skill name="MongoDB" x="1vw" y="-10vw" />
        <Skill name="SQL" x="-14vw" y="3vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="Firebase" x="-25vw" y="-10vw" /><Skill name="MERN" x="25vw" y="-17vw" /><Skill name="Python" x="15vw" y="-1vw" />
      </div>{" "}
    </>
  );
};
export default Skills;
