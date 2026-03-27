import { MapPin, Sparkles, Coffee } from 'lucide-react';
import amigas from "../assets/amigas.png"
import profesionales from "../assets/profesionales.png"


const About = () => {
  return (
    <section className="bg-brand-bg py-20 px-6 font-satoshi overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO TEXTO */}
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
          <div className="space-y-2">
            <span className="text-brand-accent tracking-[0.3em] uppercase text-xs font-bold">El alma de Wellness</span>
            <h2 className="text-4xl md:text-5xl text-brand-text font-light leading-tight">
              Hola, somos <span className="font-medium italic">Flor y Agus</span>
            </h2>
          </div>

          <p className="text-brand-dark text-lg leading-relaxed">
            Amigas, colegas y apasionadas por la estética. En Wellness nos tomamos muy en serio dos cosas: 
            <span className="font-medium"> cuidar tu cuerpo</span> y que <span className="font-medium">no te aburras</span> mientras lo hacemos. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-white/50 rounded-full text-brand-accent">
                <Coffee size={20} />
              </div>
              <p className="text-sm text-brand-dark">
                <span className="font-bold block text-brand-text">Más que un turno</span>
                Acá sos parte de la rutina, de los chistes internos y de esas charlas con café de por medio.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-white/50 rounded-full text-brand-accent">
                <Sparkles size={20} />
              </div>
              <p className="text-sm text-brand-dark">
                <span className="font-bold block text-brand-text">Bienestar real</span>
                Desde depilación definitiva hasta limpiezas profundas, hechas con amor y profesionalismo.
              </p>
            </div>
          </div>

          {/* SUCURSALES */}
          <div className="pt-8 border-t border-brand-text/10">
            <p className="text-xs tracking-widest uppercase text-brand-accent mb-4 font-bold">Encuéntranos en:</p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-2 text-brand-text group">
                <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <p className="font-bold">Rosario</p>
                  <p className="opacity-70 italic">Zeballos 2078</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LADO COLLAGE DE FOTOS */}
        <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Círculo decorativo de fondo */}
          <div className="absolute w-[80%] h-[80%] border border-brand-accent/20 rounded-full animate-pulse-slow"></div>
          
          {/* Foto 1 (Flor) - Desplazada hacia arriba e izquierda */}
          <div className="absolute top-10 left-4 md:left-10 w-44 md:w-64 aspect-[3/4] bg-brand-accent/20 rounded-2xl overflow-hidden shadow-2xl rotate-[-3deg] hover:rotate-0 transition-all duration-500 z-20">
            <img src={profesionales} alt="Flor" className="w-full h-full object-cover" />
            <div className="w-full h-full flex items-center justify-center italic text-brand-text opacity-50 text-sm">Flor</div>
          </div>

          {/* Foto 2 (Agus) - Desplazada hacia abajo y derecha */}
          <div className="absolute bottom-10 right-4 md:right-10 w-44 md:w-64 aspect-[3/4] bg-brand-dark/20 rounded-2xl overflow-hidden shadow-2xl rotate-[3deg] hover:rotate-0 transition-all duration-500 z-10">
             <img src={amigas} alt="Agus" className="w-full h-full object-cover" /> 
            <div className="w-full h-full flex items-center justify-center italic text-brand-text opacity-50 text-sm">Agus</div>
          </div>

          {/* Detalle flotante (Badge) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 rounded-full shadow-xl z-30 border border-brand-bg">
             <p className="text-brand-text font-medium text-xs md:text-sm tracking-tighter flex items-center gap-2 italic">
               <span className="text-xl">👩🏼‍⚕️💞</span> Amigas & Colegas
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;