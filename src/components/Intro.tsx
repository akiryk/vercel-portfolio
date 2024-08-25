"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <header className="text-left">
        {/* <motion.div animate={{ x: 100 }}> */}
        <h1 className="text-gray text-7xl mb-2 mt-2">Adam Kiryk</h1>
        {/* </motion.div> */}
        <h2 className="text-4xl mb-8 text-slate-500 italic">
          Frontend Engineer
        </h2>
      </header>
      <div className="text-2xl leading-snug">
        <p className="my-6 antialiased ">
          I’ve worked as a front-end developer and website designer for over ten
          years. I’m passionate about stability, performance, and accessibility,
          and I love creating great user experiences.
        </p>
        <p className="my-6">
          Sound good? I also write and speak clearly about my work. I thrive in
          a collaborative environment. And I love learning new things.
        </p>
        <Link href="/about" className="text-link">
          Say more...
        </Link>
      </div>
    </>
  );
};

export default Intro;
