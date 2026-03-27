import React from "react";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    // Invertimos: Fondo oscuro (brand-text) y texto claro (brand-bg)
    <footer className="bg-brand-text py-16 px-6 font-satoshi text-brand-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Columna 1: Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg tracking-[0.2em] uppercase font-medium">
            Wellness
          </h3>
          <p className="text-sm text-brand-bg/80 leading-relaxed max-w-xs">
            Dedicados a resaltar tu esencia natural a través de tecnología de
            vanguardia y cuidado personalizado.
          </p>
        </div>

        {/* Columna 2: Horarios */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg tracking-[0.2em] uppercase font-medium">
            Horarios
          </h3>
          <ul className="text-sm text-brand-bg/80 space-y-2 italic">
            <li>Lunes a Viernes: 09:00 - 20:00</li>
            <li>Sábados: 10:00 - 16:00</li>
          </ul>
        </div>

        {/* Columna 3: Redes */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-lg tracking-[0.2em] uppercase font-medium">
            Síguenos
          </h3>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/upl_santafe/"
              className="cursor-pointer hover:text-white transition-colors duration-300"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <MessageCircle
              className="cursor-pointer hover:text-white transition-colors duration-300"
              size={24}
            />
          </div>
          <p className="text-[10px] tracking-widest uppercase pt-4 opacity-70">
            Rosario, Argentina
          </p>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-brand-bg/10 pt-8">
        <p className="text-[10px] tracking-widest uppercase opacity-60">
          © {new Date().getFullYear()} Wellness Estética. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;