"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "KMEC finder",
    desc: "Students can find their details and attendance-related information simply by searching their names. I used college API to render attendance Information. This website has a regular traffic by college students.\n\n Tech Stack: ReactJS, NodeJS, Express, MongoDB. ",
    img: "/kmec_finder.png",
    codeLink: "https://github.com/saiabhiramjaini/kmec-finder",
    demoLink: "https://kmec-finder.vercel.app/"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "ReSculpt",
    desc: `Developed a web application where artisans and craftsmen can post their requirements for raw materials.
    Household waste such as plastic, cardboard can be contributed by anyone to meet artisan's requirements.
    Artisans utilise waste to craft innovative, decorative items, which they can then sell in a marketplace.
    Tech Stack: React, Express, Node, Prisma, PostgreSQL, TypeScript.`,
    img: "/resculpt.png",
    codeLink: "https://github.com/saiabhiramjaini/ReSculpt",
    demoLink: "https://youtu.be/xX8E7E1Jx2c?si=CNYOh_K6c_tFrCpo"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "QRify ME",
    desc: "Introducing an innovative event hosting and attending app! With this platform, event hosts can effortlessly manage their events and track attendee's presence within the event location. Whether you're organizing a conference, workshop, or social gathering, the app provides an all-in-one solution for an enhanced event experience. Tech Stack: Flutter, Firebase, Google Maps API",
    img: "/qrify_me.png",
    codeLink: "https://github.com/saiabhiramjaini/QRify_ME",
    demoLink: "https://drive.google.com/file/d/1KrCdgUeWulzSuOojyks1PtK5acpHuumN/view?usp=sharing"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Multi-Doc Summarization",
    desc: "Llama2 employs an Attention Mechanism to create summaries by extracting text from multiple documents. Additionally, this project features a QnA chatbot tailored specifically for addressing questions related to the documents. Tech Stack: Python, Streamlit, LangChain, LLAMA2",
    img: "/llama2.png",
    codeLink: "https://github.com/saiabhiramjaini/Multiple-Document-summarization-and-chatbot-using-LLAMA2",
    demoLink: "https://github.com/saiabhiramjaini/Multiple-Document-summarization-and-chatbot-using-LLAMA2"
  },
  {
    id: 5,
    color: "from-red-300 to-orange-300",
    title: "Image Encryption algorithm",
    desc: "An algorithm using python for image encryption and decryption based on genetic central dogma. TechStack: Python, Streamlit, Numpy, MatplotLib",
    img: "/encryption.gif",
    codeLink: "https://github.com/saiabhiramjaini/Image-Encryption-Algorithm-Based-On-Genetic-Central-Dogma",
    demoLink: "https://image-encryption-algorithm-based-on-genetic-central-dogma-ch.streamlit.app/"
  },
];

const Portfolio = () => {

  useEffect(() => {
    // Check if the page has already been reloaded
    const hasReloaded = sessionStorage.getItem('hasReloaded');
    if (!hasReloaded) {
      // Set the flag to indicate the page has been reloaded
      sessionStorage.setItem('hasReloaded', 'true');
      // Reload the page
      window.location.reload();
    }
  }, []);

  sessionStorage.setItem('hasReloaded', 'false');

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });

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
            <motion.div style={{ x: x }} className="flex">
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
                      <Image src={item.img} alt="" fill className="object-contain" />
                    </div>
                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <div className="flex justify-start">
                      <Link className="flex justify-end" href={item.demoLink}>
                        <button className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6 bg-white text-gray-600 font-semibold m-4 rounded">
                          See Demo
                        </button>
                      </Link>
                      <Link className="flex justify-end" href={item.codeLink}>
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
