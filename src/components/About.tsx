import React from "react";
import { motion } from "framer-motion";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Sass from "../assets/sass.png";
import Tailwind from "../assets/tailwind.svg";
import ReactIcon from "../assets/react.png";

type Props = {};

function About({}: Props) {
  return (
    <div className="min-h-screen px-4 flex flex-col justify-around items-center">
      <div className="flex justify-center">
        <h2 className="uppercase text-base text-white tracking-[6px]">
          Quem sou
        </h2>
      </div>
      <div className="flex flex-col items-center text-center my-8 lg:flex-row lg:text-left lg:items-start lg:justify-center lg:max-w-2xl">
        <motion.img
          initial={{
            x: -50,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="w-28 h-28 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-lg lg:mr-4"
          src="https://github.com/bitswa.png"
          alt="Gabriel-foto"
        />
        <div className="my-8 lg:my-0">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-white pb-1"
          >
            Gabriel Moura do Val, 18
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white max-w-md"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            facere numquam quaerat, assumenda saepe, porro consectetur
            inventore, animi rerum libero amet officia corporis nulla cum
            praesentium corrupti.
          </motion.p>
        </div>
      </div>
      <div className="lg:max-w-2xl">
        <div className="flex justify-center mb-12">
          <h2 className="uppercase tracking-[6px] text-white text-base">
            Tecnologias
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-7 pb-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="rounded-lg ">
              <img
                className="w-20 h-20 rounded-lg"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                }
                alt=""
              />
            </div>
            <p className="text-white text-sm">JavaScript</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.4 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-[#F1662A] rounded-lg ">
              <img className="w-20 h-20" src={Html} alt="" />
            </div>

            <p className="text-white text-sm">HTML</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.3 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-[#33A9DC] rounded-lg ">
              <img className="w-20 h-20" src={Css} alt="" />
            </div>

            <p className="text-white text-sm">CSS</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-[#222222] rounded-lg">
              <img className="w-20 h-20 py-1" src={ReactIcon} alt="" />
            </div>

            <p className="text-white text-sm">React</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.1 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-[#161D2D] rounded-lg">
              <img className="w-20 h-20 p-2" src={Tailwind} alt="" />
            </div>

            <p className="text-white text-sm">Tailwind</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-[#CD6799] rounded-lg">
              <img
                className="w-20 h-20 px-2 py-3 self-center"
                src={Sass}
                alt=""
              />
            </div>

            <p className="text-white text-sm">Sass</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
