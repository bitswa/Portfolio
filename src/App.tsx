import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';

function App() {
	return (
		<div className="bg-[#111010] min-h-screen flex flex-col gap-16">
			<Header />

			{/* Pagina inicial */}

			<section id="inicio">
				<Hero />
			</section>

			{/* Quem sou */}
			<section
				id="quemSou"
				className="max-w-4xl mx-auto h-full"
			>
				<About />
			</section>

			{/* O que faço */}
			<section id="oQueFaço">
				<Work />
			</section>

			{/*  Entrar em contato */}
			<section
				className="mt-16"
				id="entrarEmContato"
			>
				<Contact />
			</section>

			<Footer />
		</div>
	);
}

export default App;
