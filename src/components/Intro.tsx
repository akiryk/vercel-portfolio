"use client";
import { motion } from "framer-motion";
import NavLink from "@/components/NavLink";
import Text from "@/components/Text";

const Intro = () => {
  return (
    <>
      <header className="text-left">
        <motion.div
          initial={{ x: 80, opacity: 0 }} // Start 100px to the right
          animate={{ x: 0, opacity: 1 }} // Move to the left and fade in
          transition={{ duration: 1, ease: "easeInOut" }} // Take 1 second to do it
        >
          <h1 className="text-gray text-4xl md:text-7xl mb-2 mt-2">
            Adam Kiryk
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start 100px to the right
          animate={{ x: 0, opacity: 1 }} // Move to the left and fade in
          transition={{ duration: 1, ease: "easeInOut" }} // Take 1 second to do it
        >
          <h2 className="text-2xl sm:text-4xl mb-8 text-midgray italic">
            Frontend Engineer
          </h2>
        </motion.div>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        <Text>
          I'm a front-end engineer with over twelve years experience in the
          industry, first as a UX and UI designer, then as a developer. I'm
          passionate about performance, stability, and accessibility, and I love
          creating great user experiences.
        </Text>
        <Text>
          Sound good? I also write and speak clearly about my work. I thrive in
          a collaborative environment. And I love learning new things.
        </Text>
        <Text>
          <NavLink href="#background" classes="text-link">
            Say more...
          </NavLink>
        </Text>
      </motion.div>
    </>
  );
};

export default Intro;
