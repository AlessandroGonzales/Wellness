import wellness from "../assets/wellness.png"
import About from "./About";
import Services from "./ServicesWell";

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi flex flex-col items-center justify-center p-6 text-brand-text overflow-hidden">
      
      {/* Contenedor Principal con animación general */}
      <main className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
        
        {/* Imagen / Logotipo */}
        {/* Truco: mix-blend-multiply ayuda a que si tu imagen tiene fondo, se fusione perfecto con el bg-brand-bg */}
        <div className="w-74 md:w-80 mb-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <img
            src={wellness} // Asegúrate de colocar la imagen en tu carpeta public
            alt="Wellness Estética"
            className="w-full h-auto object-contain mix-blend-multiply" 
          />
        </div>

        {/* Título Principal (Opcional si el logo ya dice Wellness, pero refuerza el SEO y la estructura) */}
        <h1 className="sr-only">
          Wellness - Centro de Estética
        </h1>

        {/* Texto de propuesta de valor */}
        <p className="text-xl md:text-2xl text-brand-dark max-w-2xl mb-12 leading-relaxed opacity-0 animate-slide-up tracking-wide" style={{ animationDelay: '0.4s' }}>
          Realzamos tu belleza natural. Descubre tratamientos exclusivos diseñados para tu bienestar y armonía en un espacio de pura tranquilidad.
        </p>

        {/* Botón de Llamado a la acción (Call to Action) */}
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button className="px-10 py-3 border border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300 tracking-widest uppercase text-sm sm:text-base">
            Descubrir Tratamientos
          </button>
        </div>

      </main>

      {/* Decoración sutil de fondo (opcional, para darle un toque más futurista/moderno) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-accent opacity-10 blur-3xl rounded-full"></div>
      </div>
      <About />
      <Services/>
    </div>
  );
};

export default Home;