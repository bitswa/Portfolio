import { useState } from 'react';
import { motion } from 'framer-motion';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import Menu from './icons/Menu';
import Close from './icons/Close';

export default function Header() {
	const [menu, setMenu] = useState(false);

	return (
		<header className="absolute w-full left-0 right-0 flex justify-end items-center max-w-4xl mx-auto p-3 lg:px-0 lg:py-3 z-10">
			<motion.button
				initial={{
					x: 50,
					opacity: 0,
				}}
				animate={{
					opacity: 1,
					x: 0,
					transition: { duration: 0.75 },
				}}
				whileTap={{
					scale: 1.1,
				}}
				onClick={() => setMenu(!menu)}
				className="flex items-center justify-center p-2 border-2 border-[#2660A4] rounded-lg sm:hidden"
			>
				{menu ? <Close /> : <Menu />}
			</motion.button>
			<nav
				className={`${
					menu
						? 'absolute flex flex-col-reverse items-center text-center justify-center p-7 rounded-lg gap-5 bg-zinc-800 w-[300px] mx-auto top-[68px]'
						: 'hidden'
				}  sm:w-full sm:justify-between sm:items-center sm:flex`}
			>
				<motion.ul
					initial={{
						opacity: 0,
						x: -50,
					}}
					transition={{
						duration: 1.2,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					viewport={{ once: true }}
					className="flex mt-3 gap-10 items-center sm:mt-0 sm:gap-5"
				>
					<motion.li
						whileHover={{ scale: 1.2, transition: { duration: 0.6 } }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
					>
						<a
							href="https://github.com/bitswa"
							target={'_blank'}
							className="focus:outline-[#ff9953] outline-offset-2"
						>
							<Github />
						</a>
					</motion.li>
					<motion.li
						whileHover={{ scale: 1.2, transition: { duration: 0.6 } }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
					>
						<a
							href="https://linkedin.com/in/gabrielmouradoval"
							target={'_blank'}
							className="focus:outline-[#ff9953] outline-offset-2"
						>
							<Linkedin />
						</a>
					</motion.li>
				</motion.ul>
				<motion.ul
					initial={{
						x: 50,
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
					className="flex flex-col gap-2  sm:flex-row sm:items-center sm:gap-5"
				>
					<li>
						<a
							className=" text-white border-[#f19953] focus:outline-[#f19953] outline-none hover:border-b-2 font-medium tracking-[3px]"
							href="#quemSou"
						>
							Quem sou
						</a>
					</li>
					<li>
						<a
							className=" text-white border-[#f19953] focus:outline-[#f19953] outline-none hover:border-b-2 font-medium tracking-[3px]"
							href="#oQueFaço"
						>
							O que faço
						</a>
					</li>
					<li>
						<a
							className=" text-white   border-[#f19953] hover:border-b-2 focus:outline-[#f19953] outline-none font-medium tracking-[3px]"
							href="#entrarEmContato"
						>
							Contato
						</a>
					</li>
				</motion.ul>
			</nav>
		</header>
	);
}
