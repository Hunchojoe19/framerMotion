import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        repeat: Infinity,
      },
      y: {
        duration: 0.25,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: [0],
    transition: {
      y: {
        duration: 0.25,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Change cycle loader</div>
    </>
  );
};

export default Loader;
