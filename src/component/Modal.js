import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { y: "-100vw", transition: { ease: "easeInOut" } },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div className="modal" variants={modalVariants}>
            <motion.h2>Want to make another pizza?</motion.h2>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
