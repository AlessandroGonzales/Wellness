import React from 'react';
import { Sparkles, Wand2, Flower2, Heart, Zap, Gem, CheckCircle } from 'lucide-react';

const Services = () => {
  const treatments = [
    { title: "Limpieza Facial Express", desc: "Renovación rápida para lucir una piel fresca en minutos.", icon: <Sparkles size={28}/>  },
    { title: "Limpieza Profunda", desc: "Con punta de diamante y extracciones para una pureza total.", icon: <Gem size={28}/> },
    { title: "Dermaplaning", desc: "Incluye limpieza profunda. Exfoliación para un brillo máximo.", icon: <Wand2 size={28}/> },
    { title: "Dermapen", desc: "Incluye limpieza profunda. Inducción de colágeno regenerador.", icon: <Sparkles size={28}/> },
    { title: "Peeling", desc: "Incluye limpieza profunda. Renovación celular avanzada.", icon: <Flower2 size={28}/> },
    { title: "Hidralips", desc: "Hidratación extrema y volumen sutil para tus labios.", icon: <Heart size={28}/> },
    { title: "Crioradiofrecuencia", desc: "Tecnología Body Health para un tensado de piel superior.", icon: <Zap size={28}/> },
    { title: "Depilación Definitiva", desc: "Resultados duraderos con tecnología de última generación.", icon: <CheckCircle size={28}/> },
  ];

  return (
    // Fondo exacto solicitado: #F2DCCB
    <section className="bg-[#F2DCCB] py-20 px-4 sm:px-8 font-satoshi overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera Responsiva */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-brand-text/60 tracking-[0.3em] uppercase text-[10px] sm:text-xs font-bold block animate-fade-in">
            Tratamientos Faciales & Corporales
          </span>
          <h2 className="text-3xl md:text-5xl text-brand-text font-light tracking-tight leading-tight px-4">
            Tu bienestar, <span className="italic font-normal">nuestra prioridad</span>
          </h2>
          <div className="w-12 md:w-20 h-[1.5px] bg-brand-text/20 mx-auto mt-6"></div>
        </div>

        {/* Grid Inteligente: 1 col en mobile, 2 en tablet, 4 en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {treatments.map((t, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white/30 backdrop-blur-md border border-white/40 rounded-[2.5rem] transition-all duration-500 hover:bg-white/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-text/10"
            >
              {/* Icono con círculo minimalista */}
              <div className="w-14 h-14 bg-brand-text text-brand-bg rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-brand-text/20">
                {t.icon}
              </div>

              <h3 className="text-brand-text font-semibold text-lg md:text-xl mb-3 leading-tight">
                {t.title}
              </h3>
              
              <p className="text-brand-dark/80 text-sm md:text-base leading-relaxed">
                {t.desc}
              </p>

              {/* Flecha decorativa sutil (solo desktop hover) */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                <div className="w-8 h-8 rounded-full border border-brand-text flex items-center justify-center text-brand-text">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre de sección con estilo Instagram */}
        <div className="mt-16 text-center animate-pulse-slow">
          <p className="text-brand-text/60 text-xs tracking-widest uppercase italic">
            Desliza para descubrir más • Wellness Estética
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;