"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "lorem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla similique repellat facere molestias est nesciunt illum dignissimos! Reiciendis aliquam unde iste repudiandae sunt illum molestias culpa, eius aliquid ullam aperiam quibusdam. Sit repellendus ut debitis cum veniam eius accusamus iure nostrum?",
    img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    link: "",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "lorem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla similique repellat facere molestias est nesciunt illum dignissimos! Reiciendis aliquam unde iste repudiandae sunt illum molestias culpa, eius aliquid ullam aperiam quibusdam. Sit repellendus ut debitis cum veniam eius accusamus iure nostrum?",
    img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    link: "",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "lorem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla similique repellat facere molestias est nesciunt illum dignissimos! Reiciendis aliquam unde iste repudiandae sunt illum molestias culpa, eius aliquid ullam aperiam quibusdam. Sit repellendus ut debitis cum veniam eius accusamus iure nostrum?",
    img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    link: "",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "lorem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla similique repellat facere molestias est nesciunt illum dignissimos! Reiciendis aliquam unde iste repudiandae sunt illum molestias culpa, eius aliquid ullam aperiam quibusdam. Sit repellendus ut debitis cum veniam eius accusamus iure nostrum?",
    img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    link: "",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0.2, 1], ["0%", "-100%"]);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh]">
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My works
          </div>

          {/* Wrap the scrollable content within a motion.div with drag enabled */}
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden"
          >
            <motion.div style={{ x }} className="flex">
              {items.map((item) => (
                <div
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-4 text-white">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} alt="" fill />
                    </div>
                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <div className="flex justify-start">
                      <Link className="flex justify-end" href={item.link}>
                        <button className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6 bg-white text-gray-600 font-semibold m-4 rounded">
                          See Demo
                        </button>
                      </Link>
                      <Link className="flex justify-end" href={item.link}>
                        <button className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6 bg-white text-gray-600 font-semibold m-4 rounded">
                          See Code
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-8xl">Do you have any project</h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60, 60 0 0,1 -120, 0"
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Full Stack Developer
                </textPath>
              </text>
            </motion.svg>
            <Link
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 bg-black text-white m-auto rounded-full flex justify-center items-center"
              href="/contact"
            >
              Hire me
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
