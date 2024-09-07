"use client";
import Image from "next/image";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer
      id="about"
      className="bg-black md:p-4 lg:pb-0 md:px-16 md:pt-12 mt-36"
    >
      <div className="grid grid-cols-12 gap-8">
        <picture className="col-span-12 md:col-span-4">
          <source
            media="(min-width: 800px)"
            srcSet="portrait.jpg 1312w"
            sizes="1312px"
          />
          <img
            className="mb-0"
            src="portrait-wide-784.jpg"
            alt="Self portrait"
          />
        </picture>

        <div className="col-span-7 pt-8">
          <h2 className="text-6xl mb-8 text-midgray">About Me</h2>
          <p className="text-2xl text-darkgray mb-8">
            I’m married, two kids, I live in the Boston area. I love to run,
            hike, travel, cook, eat good food, take pictures, walk my dog. I do
            other stuff, too.
          </p>
          <p className="text-2xl">
            <button className="text-link" onClick={scrollToTop}>
              Return to top
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
