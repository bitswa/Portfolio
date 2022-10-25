import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-auto text-center">
        <h2 className="text-white uppercase tracking-[6px]">
          Entrar em contato
        </h2>
      </div>
      <div className="flex flex-col items-center mb-auto text-center">
        <motion.h3
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="uppercase text-white mb-5 tracking-[3px]"
        >
          Ficou com dúvidas?
        </motion.h3>
        <form className="flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col gap-3 items-center md:flex-row md:gap-5">
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              type="text"
              name="name"
              id="name"
              placeholder="NOME"
              className="rounded-lg p-2 md:w-[50%] md:p-3 outline-offset-0 focus:outline-[3px] focus:outline-[#f19953] outline-none bg-[#D9D9D9] text-xs md:text-sm placeholder:tracking-[2px]"
            />
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="SOBRENOME"
              className="rounded-lg p-2 md:w-[50%] outline-offset-0 focus:outline-[3px] focus:outline-[#f19953] outline-none bg-[#D9D9D9] md:p-3 text-xs md:text-sm  placeholder:tracking-[2px]"
            />
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              type="tel"
              name="phone"
              id="phone"
              placeholder="(__)_________"
              className="rounded-lg p-2 md:p-3 md:w-[50%] outline-offset-0 focus:outline-[3px] focus:outline-[#f19953] outline-none bg-[#D9D9D9] text-xs md:text-sm  placeholder:tracking-[2px]"
            />
            <motion.input
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              type="text"
              name="assunto"
              id="assunto"
              placeholder="ASSUNTO"
              className="rounded-lg p-2 md:p-3 md:w-full outline-offset-0 focus:outline-[3px] focus:outline-[#f19953] outline-none bg-[#D9D9D9] text-xs md:text-sm  placeholder:tracking-[2px]"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-5 items-center">
            <motion.textarea
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              name="message"
              id="message"
              placeholder="ESCREVA SUA MENSAGEM AQUI"
              className="w-full text-xs max-h-[100px] min-h-[100px] outline-offset-0 focus:outline-[3px] focus:outline-[#f19953] outline-none  md:text-sm  scrollbar-thin scrollbar-thumb-[#f19953] rounded-lg p-2 md:p-3 bg-[#D9D9D9] placeholder:tracking-[2px]"
            ></motion.textarea>
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9, transition: {type:"spring", stiffness: 400, damping: 17}}}
              viewport={{ once: true }}
              className="uppercase text-xs focus:border-[#f19953] outline-none text-white rounded-lg border-2 hover:border-[#f19953] border-[#2660A4] p-2 sm:p-3 tracking-[2px]"
            >
              Enviar mensagem
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
