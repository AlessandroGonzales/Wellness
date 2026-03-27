import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import wellness from "../assets/wellness.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Promociones', path: '/promos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/10 font-satoshi">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="w-28 md:w-36 transition-transform hover:scale-105 duration-300 z-[70]">
          <img src={wellness} alt="Logo" className="w-full h-auto mix-blend-multiply" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-brand-text text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-brand-text text-[#F2DCCB] px-8 py-2.5 text-[10px] tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-300 ml-4">
            Reservar
          </button>
        </div>

        {/* Botón Hamburguesa - z-[70] para que quede sobre el overlay */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-brand-text z-[70] p-2 transition-transform active:scale-90"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Overlay Mobile Mejorado */}
      <div 
        className={`fixed inset-0 bg-[#F2DCCB] z-[60] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Decoración sutil de fondo en el menú */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/40 blur-3xl rounded-full"></div>
        
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-4">
          {/* Logo dentro del menú para reforzar marca */}
          <img src={wellness} alt="Logo" className="w-32 mb-4 opacity-40 mix-blend-multiply" />

          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, i) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-2xl text-brand-text tracking-[0.25em] uppercase font-light transition-all duration-700 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={` transition-all duration-1000 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <button className="border border-brand-text text-brand-text px-12 py-4 uppercase tracking-[0.2em] text-xs hover:bg-brand-text hover:text-[#F2DCCB] transition-all">
              Reservar Cita
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;