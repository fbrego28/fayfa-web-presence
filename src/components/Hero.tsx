import heroVideo from '../assets/hero-video.mp4.asset.json';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[#f9fafb]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo.url}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ objectFit: 'cover', transform: 'none' }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center -mt-20">
          <div className="text-center px-4">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              CAMIONES
            </p>

            <h1>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-none tracking-tighter">
                Alquiler y Repuestos
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter -mt-3 text-gray-400">
                Para Camiones.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto mt-6">
              Respaldo para cada kilómetro
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="#contacto"
                className="px-6 py-2.5 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors"
              >
                Cotización
              </a>
              <a
                href="#contacto"
                className="px-6 py-2.5 rounded-full text-white font-medium transition-colors"
                style={{ backgroundColor: '#202A36' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a2229')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#202A36')}
              >
                Contáctenos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
