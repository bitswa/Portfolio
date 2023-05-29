import React from 'react';
import { motion } from 'framer-motion';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import sassIcon from '../assets/icons/sass.png';
import tailwindIcon from '../assets/icons/tailwind.svg';
import reactIcon from '../assets/icons/react.png';

type Props = {};

function About({}: Props) {
	return (
		<div className="min-h-screen px-2 my-12 flex flex-col justify-around items-center">
			<div className="flex justify-center">
				<h2 className="uppercase text-sm md:text-base text-white tracking-[6px]">
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
						className="text-white text-sm md:text-base pb-1"
					>
						Gabriel Moura do Val, 18
					</motion.p>
					<motion.p
						initial={{ opacity: 0, x: -40 }}
						transition={{ duration: 1 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-white text-sm md:text-base max-w-md"
					>
						Estudante, Programador e{' '}
						<span className="text-[#2660A4]">
							Desenvolvedor Web | Front-end
						</span>{' '}
						a mais de 1 ano, melhorando a cada dia, estudando design,
						metodologias, novas ferramentas e linguagens.
						<br />
					</motion.p>
				</div>
			</div>
			<div className="lg:max-w-2xl">
				<div className="flex justify-center mb-12">
					<h2 className="uppercase tracking-[6px] text-white text-sm md:text-base">
						Tecnologias
					</h2>
				</div>
				<div className="flex flex-wrap justify-center gap-7">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
						viewport={{ once: true }}
						className="flex flex-col items-center gap-2"
					>
						<div className="rounded-lg ">
							<img
								className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
								src={
									'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
								}
								alt="Javascript"
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
							<img
								className="w-16 h-16 md:w-20 md:h-20"
								src={htmlIcon}
								alt="HTML"
							/>
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
							<img
								className="w-16 h-16 md:w-20 md:h-20"
								src={cssIcon}
								alt="CSS"
							/>
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
							<img
								className="w-16 h-16 md:w-20 md:h-20 py-1"
								src={reactIcon}
								alt="REACT"
							/>
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
							<img
								className="w-16 h-16 md:w-20 md:h-20 p-2"
								src={tailwindIcon}
								alt="TAILWINDCSS"
							/>
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
								className="w-16 h-16 md:w-20 md:h-20 px-2 py-3 self-center"
								src={sassIcon}
								alt="SASS"
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
