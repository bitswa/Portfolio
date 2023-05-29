import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Macbook from '../assets/macbook-web-dev.png';

export default function Hero() {
	const [text, count] = useTypewriter({
		words: ['front-end developer', 'web developer'],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="flex flex-col items-center text-center h-screen justify-center pt-14">
			<div>
				<h1 className="uppercase p-1 text-white text-sm md:text-base tracking-[6px]">
					Gabriel Moura do Val
				</h1>
				<h2 className="uppercase text-white text-xs tracking-[6px]">
					&#60;{text}/&#62;
				</h2>
			</div>
			<motion.img
				initial={{ y: 10 }}
				transition={{
					duration: 2.5,
					repeat: Infinity,
					repeatType: 'loop',
					type: 'spring',
					bounce: 0.25,
				}}
				animate={{ y: [0, 10, 0] }}
				className="w-64 lg:w-96 my-9"
				src={Macbook}
				alt="Macbook"
			/>

			<motion.button
				initial={{ y: 15, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
				whileHover={{ scale: 1.1 }}
				whileTap={{
					scale: 0.9,
					transition: { type: 'spring', stiffness: 400, damping: 17 },
				}}
				onClick={(e) => (window.location.href = '#entrarEmContato')}
				draggable={false}
				className="hover:border-[#f19953]  uppercase bg-none p-2 sm:p-3 rounded-md border-2 focus:border-[#f19953] outline-none border-[#2660A4] text-xs  text-white select-none"
			>
				Entrar em contato
			</motion.button>
		</div>
	);
}
