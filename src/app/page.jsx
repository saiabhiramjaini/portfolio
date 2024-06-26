"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    // Reset the reload flag when the page is rendered
    sessionStorage.setItem('hasReloaded', 'false');
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0 });
  }, []);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col gap-24  lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src="/hero.png" alt="" fill className="object-contain" />
          </div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold ">
              Crafting Digital Experiences, Crafting Tomorrow.
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and mastery of code, my
              portfolio showcases a diverse collection of projects that reflects
              my commitment and excellence.
            </p>
            {/* BUTTON */}
            <div className="w-full flex gap-4">
              <Link href="/portfolio">
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                  View My Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="p-4 rounded-lg ring-1 ring-black">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
