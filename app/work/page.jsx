"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  // cleary
  {
    num: "01",
    category: "FullStack",
    title: "Cleary",
    description:
      "An online platform that connects students with professional tutors for personalized learning experiences. Cleary offers a user-friendly interface for students to book sessions, access learning materials, and improve their skills with expert guidance.",
    stack: [
      { name: "mysql" },
      { name: "php" },
      { name: "bootstrap 4" },
      { name: "codeigniter 3" },
    ],
    image: "/assets/work/3.png",
    live: "",
    github: "https://gitlab.com/arka.smkpasimsmi.haikal/cleary",
  },
  // sisfo
  {
    num: "02",
    category: "FullStack",
    title: "Sistem Informasi Sekolah IT SMP Pasim Ar-Rayyan",
    description:
      "A public-facing school information website that provides details about the school's profile, gallery, teachers, achievements, student admissions (PPDB), and extracurricular activities. It serves as a comprehensive platform for parents, students, and the public to stay informed about the school.",
    stack: [
      { name: "mysql" },
      { name: "php" },
      { name: "bootstrap 4" },
      { name: "codeigniter 3" },
    ],
    image: "/assets/work/1.png",
    live: "",
    github: "https://gitlab.com/arka.smkpasimsmi.axa/regna-smp",
  },
  {
    num: "03",
    category: "Android App",
    title: "Absensi Online",
    description:
      "An online attendance system integrated with the SMP school information system, developed in response to COVID-19. It includes a security feature requiring students to take a photo of themselves for attendance, ensuring contactless verification. The photos are sent to the system for teachers and corresponding classes to review in real-time, maintaining safety and accuracy.",
    stack: [{ name: "Android Java" }, { name: "Volley" }],
    image: "/assets/work/2.png",
    live: "",
    github: "https://gitlab.com/arka.smkpasimsmi.axa/regna-smp",
  },
  {
    num: "04",
    category: "Android App",
    title: "iDentify",
    description:
      "A React Native mobile application that fetches movie data through an API, allowing users to browse and explore a curated list of movies, including details about each film.",
    stack: [{ name: "React Native" }, { name: "Rest API" }],
    image: "/assets/work/4.png",
    live: "",
    github: "https://gitlab.com/arka.smkpasimsmi.haikal/identify",
  },
  {
    num: "05",
    category: "Fullstack & IOT",
    title: "WheelHouse",
    description:
      "An online garage rental platform integrated with IoT-based smart-garage technology. WheelHouse allows users to rent garages, with features like RFID-based entry and real-time temperature monitoring, enhancing both security and convenience.",
    stack: [
      { name: "mysql" },
      { name: "php" },
      { name: "bootstrap 5" },
      { name: "laravel 10" },
      { name: "arduino" },
    ],
    image: "/assets/work/5.png",
    live: "",
    github: "https://github.com/haikalputra-dev/smart-garage",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "Cafe Management System",
    description:
      "A comprehensive cafe management platform designed to handle user accounts, product categories, inventory, customer orders, and billing processes. The system also features integrated reporting capabilities using JasperReports, providing detailed insights into sales, orders, and financial performance.",
    stack: [
      { name: "mysql" },
      { name: "javascript" },
      { name: "angular 14" },
      { name: "express.js" },
    ],
    image: "/assets/work/6.png",
    live: "",
    github: "https://github.com/haikalputra-dev/cafe-management-system",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto font-chakraPetch">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-accent">{project.category} project</p>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project buttons */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project buttons */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
