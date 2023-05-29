import { motion } from 'framer-motion';
import { Cursor } from 'react-simple-typewriter';
import Menu from './Menu';

export default function Work() {
	return (
		<div className="flex flex-col justify-center gap-16 items-center min-h-screen">
			<div className="text-center mb-auto">
				<h2 className="text-white text-sm md:text-base uppercase tracking-[6px]">
					O que faço
				</h2>
			</div>
			<div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-around max-w-2xl w-full mb-auto py-12">
				<motion.div
					initial={{
						opacity: 0,
						x: -50,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { duration: 1 },
					}}
					viewport={{ once: true }}
					className="flex flex-col justify-center items-center border-b-2 border-[#2660A4] pb-1 text-white "
				>
					<h2 className="uppercase tracking-[6px] text-sm md:text-base font-medium">
						Websites
					</h2>
					<h3 className="uppercase tracking-[3px] text-xs md:text-sm">
						Desenvolvimento web
					</h3>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						x: 50,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { duration: 1 },
					}}
					viewport={{ once: true }}
					className="relative flex flex-col justify-center items-center border-b-2 border-[#2660A4] pb-1 text-white"
				>
					<h2 className="uppercase tracking-[6px] text-sm md:text-base font-medium">
						Aplicativos
					</h2>
					<h3 className="uppercase tracking-[3px] text-xs md:text-sm">
						Desenvolvimento Mobile
					</h3>
					<p className="absolute bottom-[-30px] uppercase text-sm md:text-base text-white tracking-[3px]">
						Em Progresso...
						<Cursor cursorColor="#2660A4" />
					</p>
				</motion.div>
			</div>
			<div className="mb-auto flex flex-col items-center gap-16 text-center">
				<h2 className="text-white uppercase text-sm md:text-base tracking-[6px] mb-8">
					Projetos
				</h2>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
					viewport={{ once: true }}
					className="max-w-[260px] md:max-w-2xl lg:max-w-3xl"
				>
					<Menu />
				</motion.div>
			</div>
		</div>
	);
}
