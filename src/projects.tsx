import signUpProject from './assets/previewSignUpProject.png';
import weatherProject from './assets/previewWeatherProject.png';

export const Projects = () => {
	return [
		{
			id: '0',
			title: 'SISTEMA DE LOGIN',
			image: signUpProject,
			description:
				'Este é um projeto de exemplo para demonstrar como criar um sistema de login usando React, Node.js e SQLite. O projeto consiste em uma aplicação web com uma página de login e uma API RESTful para autenticação e gerenciamento de usuários.',
			source: 'https://github.com/bitswa/react-login-sqlite',
			website: '',
		},
		{
			id: '1',
			title: 'APLICAÇÃO DE CLIMA',
			image: weatherProject,
			description:
				'Este é um projeto de clima que utiliza React com TypeScript e o bundler Vite. Ele faz uma requisição para a API OpenWeatherMap usando a biblioteca Axios e o React Query. Além disso, o Tailwind CSS é usado para estilizar a aplicação.',
			source: 'https://github.com/bitswa/react-weather',
			website: 'https://react-weather-kohl.vercel.app/',
		},
	];
};
