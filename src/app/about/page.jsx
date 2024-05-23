"use client";

import LottieAnimation from "@/components/lottieAnimation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {

  const bioRef = useRef();
  const isBioRefInView = useInView(bioRef, { margin: "-100px" });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <>
      <motion.div
        className="h-full pb-10"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        {/* CONTAINER */}
        <div className="h-full overflow-scroll lg:flex">
          {/* TEXT CONTAINER */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
            {/* BIOGRAPHY CONTAINER*/}
            <div className="flex flex-col gap-12 justify-center">
              {/* BIOGRAPHY TITLE */}
              <div ref={bioRef}>
              <motion.h1 
              initial={{ x: "-600px" }}
              animate={isBioRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl pb-10"
              >
                BIOGRAPHY
              </motion.h1>
              
              {/* BIOGRAPHY DESCRIPTION */}
              <motion.p 
              className="text-lg pb-10"
              initial={{ x: "-1200px" }}
              animate={isBioRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              >

Hi 👋, my name is Jaini Sai Abhiram, an aspiring software developer with a passion for turning ideas into reality through code. Currently based in Hyderabad, India, I am deeply immersed in the world of technology, consistently pushing my boundaries to learn and grow.

I am pursuing a Bachelor of Engineering in Computer Science at Keshav Memorial Engineering College, affiliated with Osmania University.

Beyond academics, I am actively involved in various tech projects and competitions. I was a finalist in the Smart India Hackathon 2023, where I developed a waste upcycling project using Flutter and Firebase, contributing to sustainable development. Additionally, I have attended the Innovation Design and Entrepreneurship (IDE) Bootcamp in 2024, further honing my skills and entrepreneurial spirit.

I am proficient in FullStack development and constantly expanding my expertise in technologies such as Flutter, Machine Learning, Deep Learning, and DevOps. I am always open to collaboration on exciting tech projects that challenge me and drive innovation.

Apart from my tech endeavors, I am a cricket enthusiast, balancing my love for the game with my coding pursuits. 
              </motion.p>
              {/* BIOGRAPHY QUOTE */}
              <motion.div 
              initial={{ x: "-1200px" }}
              animate={isBioRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="italic"
              >

Fueling innovation through code, I am Jaini Sai Abhiram, a passionate developer on a mission to transform ideas into impactful solutions.
              </motion.div>
              </div>
            </div>

            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
              {/* SKILLS TITLE */}
              <div ref={skillRef}>
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-2xl"
                >
                  SKILLS
                </motion.h1>
              </div>
              {/* SKILL ITEM LIST */}
              <div ref={skillRef}>
                <motion.div
                  initial={{ x: "-1000px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 flex-wrap"
                >
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Java
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    C
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    C++
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Python
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    JavaScript
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    TypeScript
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Dart
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    HTML
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    CSS
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Bootstrap
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    TailwindCSS
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    ReactJS
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    NextJS
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    NodeJS
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    ExpressJS
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    MongoDB
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    PostgrSQL
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    MySQL
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Prisma
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Flutter
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Postman
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Git
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    GitHub
                  </div>
                </motion.div>
                {/* SKILL SCROLL SVG */}
              </div>
            </div>

            {/* EXPERIENCE CONTAINER */}
            <div ref={experienceRef} className="flex flex-col justify-center">
              {/* EXPERIENCE TITLE */}

              <motion.h1
                initial={{ x: "-500px" }}
                animate={isExperienceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl pb-10"
              >
                EXPERIENCE
              </motion.h1>

              {/* EXPERIENCE LIST */}
              <motion.div
                initial={{ x: "-1000px" }}
                animate={isExperienceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className=""
              >
                {/* 1. EXPERIENCE LIST ITEM */}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                      SMART INDIA HACKATHON - 2023
                    </div>
                    {/* JOB DESCRIPTION */}
                    <div className="p-3 text-sm italic ">
                    Achieved finalist status in the SIH-2023 (36 Hour Hackathon) conducted by the Government of India by building a waste upcycling project using the Flutter and Firebase.
                    </div>
                    {/* JOB DURATION */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      Dec-2023
                    </div>
                    {/* COMPANY NAME */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      SIH
                    </div>
                  </div>

                  {/* CENTER */}
                  <div className="w-1/6">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full bg-white -left-2 ring-4 ring-red-400"></div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="w-1/3"></div>
                </div>
              </motion.div>

              {/* 2. EXPERIENCE LIST ITEM */}
              <motion.div
                initial={{ x: "-1000px" }}
                animate={isExperienceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex justify-between h-48"
              >
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full bg-white -left-2 ring-4 ring-red-400"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                  IDE Bootcamp - 2024
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic ">
                  Attended the Innovation Design and Entrepreneurship (IDE) Bootcamp (Phase III), enhancing skills in design thinking and entrepreneurship.
                  </div>
                  {/* JOB DURATION */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    29th-April-2024 to 3rd-May-2024
                  </div>
                  {/* COMPANY NAME */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    IDE Bootcamp
                  </div>
                </div>
              </motion.div>

              
            </div>
          </div>

          {/* SVG CONTAINER */}
          <div className="hidden lg:block w-1/3 xl:1/2 sticky top-1/4 z-30">
            <LottieAnimation />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
