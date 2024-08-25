"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <header className="text-left">
        <motion.div
          initial={{ x: 80, opacity: 0 }} // Start 100px to the right
          animate={{ x: 0, opacity: 1 }} // Move to the left and fade in
          transition={{ duration: 1, ease: "easeInOut" }} // Take 1 second to do it
        >
          <h1 className="text-gray text-7xl mb-2 mt-2">Adam Kiryk</h1>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start 100px to the right
          animate={{ x: 0, opacity: 1 }} // Move to the left and fade in
          transition={{ duration: 1, ease: "easeInOut" }} // Take 1 second to do it
        >
          <h2 className="text-4xl mb-8 text-slate-500 italic">
            Frontend Engineer
          </h2>
        </motion.div>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        <div className="text-2xl leading-snug">
          <p className="my-6 antialiased ">
            I’ve worked as a front-end developer and website designer for over
            ten years. I’m passionate about stability, performance, and
            accessibility, and I love creating great user experiences.
          </p>
          <p className="my-6">
            Sound good? I also write and speak clearly about my work. I thrive
            in a collaborative environment. And I love learning new things.
          </p>
          <Link href="/about" className="text-link">
            Say more...
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;
