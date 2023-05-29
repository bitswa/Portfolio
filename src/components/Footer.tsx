import { motion } from 'framer-motion';

function Footer() {
	return (
		<div className="flex flex-col items-center border-t-2 border-t-[#2B2828]">
			<div className="flex max-w-xl w-full justify-center md:justify-start gap-12 items-start my-12">
				<ul className="flex flex-col justify-start gap-2 text-white text-left">
					<motion.h4
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
						viewport={{ once: true }}
						className="uppercase font-medium text-base md:text-lg"
					>
						Menu
					</motion.h4>
					<motion.li
						initial={{
							y: 30,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { duration: 1 },
						}}
						viewport={{ once: true }}
						className="text-sm md:text-base"
					>
						<a
							className="focus:outline-[#ff9953] hover:border-b-2 border-[#ff9953] outline-none"
							href="#inicio"
						>
							Inicio
						</a>
					</motion.li>
					<motion.li
						initial={{
							y: 30,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { duration: 1 },
						}}
						viewport={{ once: true }}
						className="text-sm md:text-base"
					>
						<a
							className="focus:outline-[#ff9953] hover:border-b-2 border-[#ff9953] outline-none"
							href="#quemSou"
						>
							Quem sou
						</a>
					</motion.li>
					<motion.li
						initial={{
							y: 30,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { duration: 1 },
						}}
						viewport={{ once: true }}
						className="text-sm md:text-base"
					>
						<a
							className="focus:outline-[#ff9953] hover:border-b-2 border-[#ff9953] outline-none"
							href="#oQueFaço"
						>
							O que faço
						</a>
					</motion.li>
					<motion.li
						initial={{
							y: 30,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { duration: 1 },
						}}
						viewport={{ once: true }}
						className="text-sm md:text-base"
					>
						<a
							className="focus:outline-[#ff9953] hover:border-b-2 border-[#ff9953] outline-none"
							href="#entrarEmContato"
						>
							Contato
						</a>
					</motion.li>
				</ul>
				<ul className="flex flex-col  justify-start gap-2 text-white text-left">
					<motion.h4
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
						viewport={{ once: true }}
						className="uppercase font-medium text-base md:text-lg"
					>
						Redes socias
					</motion.h4>
					<motion.li
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
						viewport={{ once: true }}
						className="text-sm md:text-base"
					>
						<a
							className="focus:outline-[#ff9953] hover:border-b-2 border-[#ff9953] outline-none"
							target={'_blank'}
							href="https://github.com/bitswa"
						>
							Github
						</a>
					</motion.li>
					<motion.li
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
						viewport={{ once: true }}
						className="text-sm md:text-base"
					>
						<a
							className="focus:outline-[#ff9953] hover:border-b-2 border-[#ff9953] outline-none"
							target={'_blank'}
							href="https://linkedin.com/in/gabrielmouradoval"
						>
							Linkedin
						</a>
					</motion.li>
				</ul>
			</div>
			<div className="text-white flex justify-center"></div>
		</div>
	);
}

export default Footer;
