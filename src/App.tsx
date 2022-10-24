import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#111010] min-h-screen">
      <Header />

      {/* Pagina inicial */}

      <section id="hero" >
        <Hero />
      </section>

      {/* Quem sou */}
      <section id="quemSou" className="max-w-4xl mx-auto h-full">
        <About />
      </section>

      {/* O que faço */}
      <section id="oQueFaço">
        <Work />
      </section>

      {/*  Entrar em contato */}
      <section id="entrarEmContato">
        <Contact/>
      </section>

      {/*  Footer */}
      <section id="" >
        <Footer />
      </section>
    </div>
  );
}

export default App;