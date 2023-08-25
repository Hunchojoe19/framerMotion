import React, { useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza, setShowModal }) => {
  // const [showTitle, setShowTitle] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);
  return (
    <motion.div
      className="container order"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <p>You ordered a {pizza.base} pizza with:</p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
