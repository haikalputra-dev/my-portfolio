"use client";

import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaLaravel,
  FaJs,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCodeigniter,
  SiMysql,
  SiSequelize,
  SiExpress,
  SiCanva,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. voluptatiles quis nostrud ex",
  info: [
    {
      fieldName: "Name",
      fieldValue: "M Haikal Mulya P",
    },
    {
      fieldName: "Phone",
      fieldValue: "+62 896 4398 5454",
    },
    {
      fieldName: "Email",
      fieldValue: "mulyaputrahaikal@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesian, English, Sundanese",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};
// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  items: [
    {
      company: "PT. Amerta Indah Otsuka",
      position: "Web Developer",
      duration: "August 2024 - Present",
    },
    {
      company: "Matching Fund Balai Sawala",
      position: "Photographer & Editor",
      duration: "July 2023 - March 2024",
    },
    {
      company: "PT. Arkamaya Software House",
      position: "Web Developer",
      duration: "January 2020 - March 2020",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  items: [
    {
      institution: "Politeknik Sukabumi",
      degree: "Teknik Komputer",
      duration: "2022 - Present",
    },
    {
      institution: "Candradimuka Jabar Coding Camp",
      degree: "React Native App Developer",
      duration: "2021",
    },
    {
      institution: "SMK Pasim Plus",
      degree: "Rekayasa Perangkat Lunak",
      duration: "2018-2021",
    },
  ],
};

//skills data
const skills = {
  icon: "/assets/resume/badge.svg",
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <SiCodeigniter />,
      name: "codeigniter",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaAngular />,
      name: "angular.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiSequelize />,
      name: "sequelize.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiCanva />,
      name: "canva",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 font-chakraPetch">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full font-chakraPetch">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-chakraPetch">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-chakraPetch">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-chakraPetch">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-chakraPetch">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.items.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <h4 className="capitalize">{skill.name}</h4>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60 font-light">{item.fieldName}</span>
                          <span className="text-md">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
