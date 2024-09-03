"use client";
import Image from "next/image";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer id="about" className="bg-black p-4 lg:pb-0 px-16 pt-12">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4">
          <Image
            src="/portrait.jpg"
            alt="portrait of Adam Kiryk"
            width={1312}
            height={908}
          />
        </div>
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
