import { motion } from 'framer-motion';
import { Projects } from '../projects';

export default function Menu() {
	const projects = Projects();

	return (
		<div className="text-white flex flex-col gap-16">
			{projects.map((project) => (
				<div
					key={project.id}
					className={`flex flex-col h-full ${
						Number(project.id) % 2 == 0
							? 'md:text-left md:flex md:flex-row'
							: 'md:text-right md:flex md:flex-row-reverse'
					}`}
				>
					<div className="md:w-[50%] bg-white rounded-md flex items-center">
						<img
							className="rounded-md"
							src={project.image}
						/>
					</div>
					<div className="md:w-[50%] my-4 md:my-0 md:px-4 flex flex-col justify-between gap-4">
						<h4 className="uppercase tracking-[3px] text-sm md:text-base">
							{project.title}
						</h4>
						<p className="tracking-[0.5px] text-xs md:text-sm">
							{project.description}
						</p>
						<div
							className={`flex items-center justify-center gap-6 ${
								Number(project.id) % 2 == 0
									? 'md:justify-start'
									: 'md:justify-end'
							}`}
						>
							{project.source && (
								<motion.button
									initial={{ x: -10, opacity: 0 }}
									animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
									whileHover={{ scale: 1.1 }}
									whileTap={{
										scale: 0.9,
										transition: { type: 'spring', stiffness: 400, damping: 17 },
									}}
									onClick={() => window.open(project.source, '_blank')}
									draggable={false}
									className="hover:border-[#f19953] focus:border-[#f19953] bg-none px-4 py-2  rounded-md border-2 border-[#2660A4] text-xs select-none text-white uppercase"
								>
									source
								</motion.button>
							)}
							{project.website && (
								<motion.button
									initial={{ x: -10, opacity: 0 }}
									animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
									whileHover={{ scale: 1.1 }}
									whileTap={{
										scale: 0.9,
										transition: { type: 'spring', stiffness: 400, damping: 17 },
									}}
									onClick={() => window.open(project.website, '_blank')}
									draggable={false}
									className="hover:border-[#f19953] focus:border-[#f19953] bg-none px-4 py-2  rounded-md border-2 border-[#2660A4] text-xs select-none text-white uppercase"
								>
									website
								</motion.button>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
