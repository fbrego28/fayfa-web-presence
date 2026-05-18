import heroVideo from '../assets/hero-video.mp4.asset.json';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-navy">
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
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/35 to-navy/80" />

      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center -mt-20">
          <div className="text-center px-4">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-amber tracking-wide uppercase mb-4">
              Repuestos FayFa
            </p>

            <h1>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-none tracking-tighter">
                Alquiler de equipo y Repuestos
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter -mt-3 text-foreground/85">
                Para Camiones.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto mt-6">
              Respaldo para cada kilómetro
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="#contacto"
                className="px-6 py-2.5 rounded-full bg-amber text-navy font-medium hover:bg-amber-hover transition-colors"
              >
                Cotización
              </a>
              <a
                href="#contacto"
                className="px-6 py-2.5 rounded-full bg-navy-light text-foreground font-medium border border-border hover:bg-navy-lighter transition-colors"
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
