"use client";

import { BsArrowDown, BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in building responsive, user-friendly websites that meet modern web standards. From front-end to back-end, I can help you create a fully functional and visually appealing online presence.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "Designing seamless and intuitive user experiences is my passion. I focus on creating user interfaces that are both visually striking and easy to navigate, ensuring your customers get the best interaction possible.",
    href: "",
  },
  {
    num: "03",
    title: "Graphic Design",
    description:
      "I create impactful posters, banners, and infographics that effectively communicate your message. Whether for digital platforms or print, my designs are tailored to meet your branding and marketing needs.",
    href: "",
  },
  {
    num: "04",
    title: "Photos & Videos Editing",
    description:
      "Enhance your visual content with professional editing services. From photos to videos, I bring a creative touch to ensure your media tells a compelling story and captivates viewers.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-chakraPetch font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                  <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="font-chakraPetch text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                {/* description */}
                <p className="font-chakraPetch text-white/60">{item.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
