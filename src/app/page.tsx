"use client";
import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import Logo from "@/components/AnimatedLogo";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import Intro from "@/components/Intro";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <TopNav />
      <Section
        id="introTrigger"
        classes="pt-32 min-h-lvh col-start-2 col-end-3"
      >
        <div
          id="primaryLogo"
          className="lg:flex lg:justify-end col-span-12 lg:col-span-4 mb-6 md:mb-0"
        >
          <div className="w-1/4 lg:w-96">
            <Logo />
          </div>
        </div>
        <div
          id="introContent"
          className="col-span-12 lg:col-span-8 xl:col-span-6"
        >
          <Intro />
        </div>
      </Section>

      <Section classes="col-start-2 col-end-3">
        <div className="col-span-12 md:col-span-9 md:col-start-4 col-start-2 col-end-3 lg:col-span-7 lg:col-start-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ margin: "-200px 0px" }} // This mimics the offset and anchor-placement in AOS
          >
            <SectionTitle>Work Examples</SectionTitle>
          </motion.div>
        </div>
      </Section>
      <div className="col-start-2 col-end-3">
        <Work />
      </div>
    </>
  );
}
