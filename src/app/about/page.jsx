"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <motion.div
        className="h-full"
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
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              {/* BIOGRAPHY DESCRIPTION */}
              <p className="text-lg ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                nesciunt cumque amet iusto corrupti temporibus quibusdam qui
                minus. Accusantium recusandae sunt dolor ea temporibus in
                nesciunt placeat accusamus sed beatae.
              </p>
              {/* BIOGRAPHY QUOTE */}
              <span className="italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
              {/* BIOGRAPHY SCROLL SVG */}
            </div>

            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
              {/* SKILLS TITLE */}
              <h1 className="font-bold text-2xl">SKILLS</h1>
              {/* SKILL ITEM LIST */}
              <div className="flex gap-4 flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JAVASCRIPT
                </div>
              </div>
              {/* SKILL SCROLL SVG */}
            </div>

            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col justify-center">
              {/* EXPERIENCE TITLE */}
              <h1 className="font-bold text-2xl">EXPERIENCE</h1>

              {/* EXPERIENCE LIST */}
              <div className="">
                {/* 1. EXPERIENCE LIST ITEM */}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                      {" "}
                      EXPERIENCE TITLE
                    </div>
                    {/* JOB DESCRIPTION */}
                    <div className="p-3 text-sm italic ">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    </div>
                    {/* JOB DURATION */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      {" "}
                      2024-present
                    </div>
                    {/* COMPANY NAME */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      {" "}
                      apple{" "}
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
              </div>

              {/* 1. EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3">
                    
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
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                      {" "}
                      EXPERIENCE TITLE
                    </div>
                    {/* JOB DESCRIPTION */}
                    <div className="p-3 text-sm italic ">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    </div>
                    {/* JOB DURATION */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      {" "}
                      2024-present
                    </div>
                    {/* COMPANY NAME */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      {" "}
                      apple{" "}
                    </div>
                  </div>
                </div>


              {/* 3. EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                      {" "}
                      EXPERIENCE TITLE
                    </div>
                    {/* JOB DESCRIPTION */}
                    <div className="p-3 text-sm italic ">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    </div>
                    {/* JOB DURATION */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      {" "}
                      2024-present
                    </div>
                    {/* COMPANY NAME */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      {" "}
                      apple{" "}
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

            </div>
          </div>

          {/* SVG CONTAINER */}
          <div className="hidden lg:block w-1/3 xl:1/2"></div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
