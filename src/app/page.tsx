'use client';

import { useEffect, useState } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "Kavárna U Kódu - Nejlepší káva v Praze";
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      (favicon as HTMLLinkElement).href = "https://www.google.com/s2/favicons?domain=google.com&sz=128";
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#212529] text-gray-100 font-sans">
      <header className="px-6 py-4 fixed top-0 left-0 w-full z-10 bg-[#212529] bg-opacity-95 shadow-md border-b border-gray-700">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold tracking-tight text-[#E9ECEF] hover:text-white transition-colors duration-300">
            Testovací Kavárna "U Kódu"
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">Úvod</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">O Nás</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Služby</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-[#212529] absolute top-full left-0 w-full shadow-lg border-b border-gray-700 py-4 transform origin-top animate-fade-in-down">
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#hero" onClick={toggleMenu} className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2">Úvod</a></li>
              <li><a href="#about" onClick={toggleMenu} className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2">O Nás</a></li>
              <li><a href="#services" onClick={toggleMenu} className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2">Služby</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2">Kontakt</a></li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative pt-24 pb-16 min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511920170033-0c8a5ad9d7f6?auto=format&fit=crop&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 p-8 rounded-lg max-w-3xl mx-auto backdrop-blur-sm bg-gray-900 bg-opacity-70 border border-gray-700 shadow-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#E9ECEF] leading-tight">
              Testovací Kavárna "U Kódu"
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Nejlepší káva pro vaše bugy.
            </p>
            <a href="#about" className="inline-block px-8 py-3 bg-[#E9ECEF] text-[#212529] font-semibold rounded-lg hover:bg-white transition-colors duration-300 transform hover:scale-105">
              Zjistěte Více
            </a>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-[#212529] border-t border-gray-700">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-[#E9ECEF] border-b-2 border-gray-600 pb-4 inline-block">
              O Nás
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
            </p>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-[#212529] border-t border-gray-700 bg-grid-pattern">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#E9ECEF] border-b-2 border-gray-600 pb-4 inline-block">
              Naše Služby
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#2c3035] p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-[#E9ECEF]">Premium Káva</h3>
                <p className="text-gray-300">Široký výběr káv z celého světa, připravených s láskou našimi baristy.</p>
              </div>
              <div className="bg-[#2c3035] p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-[#E9ECEF]">Klidné Pracovní Prostředí</h3>
                <p className="text-gray-300">Ideální místo pro programátory a studenty s Wi-Fi a dostatkem zásuvek.</p>
              </div>
              <div className="bg-[#2c3035] p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-[#E9ECEF]">Čerstvé Pečivo a Svačiny</h3>
                <p className="text-gray-300">Ke kávě nabízíme vždy čerstvé sladké i slané pochoutky.</p>
              </div>
              <div className="bg-[#2c3035] p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-[#E9ECEF]">Komunitní Akce</h3>
                <p className="text-gray-300">Pravidelně pořádáme meetupy, workshopy a přednášky pro IT komunitu.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-[#212529] border-t border-gray-700">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-[#E9ECEF] border-b-2 border-gray-600 pb-4 inline-block">
              Kontakt
            </h2>
            <div className="text-lg md:text-xl text-gray-300 space-y-4">
              <p>Email: <a href="mailto:test@kavarna.cz" className="text-white hover:text-[#E9ECEF] transition-colors duration-300">test@kavarna.cz</a></p>
              <p>Telefon: <a href="tel:+420777123456" className="text-white hover:text-[#E9ECEF] transition-colors duration-300">+420 777 123 456</a></p>
              <p>Adresa: Bugfixová 1, 110 00 Praha 1</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2c3035] py-8 text-center text-gray-400 text-sm border-t border-gray-700">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.</p>
          <p className="mt-2">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Digital Fusion</a></p>
        </div>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .bg-grid-pattern {
            background-image: linear-gradient(to right, #2c3035 1px, transparent 1px), linear-gradient(to bottom, #2c3035 1px, transparent 1px);
            background-size: 20px 20px;
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Page;
