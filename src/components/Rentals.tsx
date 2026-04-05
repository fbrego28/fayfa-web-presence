import { useState } from "react";
import { MessageSquare, Truck, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import freightliner1 from "@/assets/rentals/freightliner-m2-1.jpeg";
import freightliner2 from "@/assets/rentals/freightliner-m2-2.jpeg";
import freightliner3 from "@/assets/rentals/freightliner-m2-3.jpeg";
import freightliner4 from "@/assets/rentals/freightliner-m2-4.jpeg";
import montacargas1 from "@/assets/rentals/montacargas-cat-1.jpeg";
import montacargas2 from "@/assets/rentals/montacargas-cat-2.jpeg";
import ottawa98_1 from "@/assets/rentals/ottawa-1998-1.jpeg";
import ottawa98_2 from "@/assets/rentals/ottawa-1998-2.jpeg";
import freightPlat1 from "@/assets/rentals/freightliner-m2-plat-1.jpeg";
import freightPlat2 from "@/assets/rentals/freightliner-m2-plat-2.jpeg";
import freightPlat3 from "@/assets/rentals/freightliner-m2-plat-3.jpeg";
import freightPlat4 from "@/assets/rentals/freightliner-m2-plat-4.jpeg";
import freightPlat5 from "@/assets/rentals/freightliner-m2-plat-5.jpeg";
import ottawa2000_1 from "@/assets/rentals/ottawa-2000-1.jpeg";
import ottawa2000_2 from "@/assets/rentals/ottawa-2000-2.jpeg";
import ottawa2000_3 from "@/assets/rentals/ottawa-2000-3.jpeg";
import recolector2002_1 from "@/assets/rentals/recolector-2002-1.jpeg";
import recolector2002_2 from "@/assets/rentals/recolector-2002-2.jpeg";
import recolector2002_3 from "@/assets/rentals/recolector-2002-3.jpeg";
import recolector2002_4 from "@/assets/rentals/recolector-2002-4.jpeg";
import gruaDigger1 from "@/assets/rentals/grua-digger-1.mov";
import gruaDigger2 from "@/assets/rentals/grua-digger-2.mp4";
import gruaDigger3 from "@/assets/rentals/grua-digger-3.mp4";
import gruaDigger4 from "@/assets/rentals/grua-digger-4.mp4";
import volvo2013_1 from "@/assets/rentals/volvo-2013-1.jpeg";
import volvo2013_2 from "@/assets/rentals/volvo-2013-2.jpeg";
import agua1 from "@/assets/rentals/agua-1.mp4";
import agua2 from "@/assets/rentals/agua-2.mp4";
import ottawa2003_1 from "@/assets/rentals/ottawa-2003-1.mp4";
import ottawa98_3 from "@/assets/rentals/ottawa-1998-3.mp4";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Unit {
  name: string;
  year?: string;
  desc: string;
  images?: string[];
}

const units: Unit[] = [
  { name: "Camión Distribuidor de Agua", desc: "Distribución de agua no potable. Ideal para obras de construcción, trabajos viales y operaciones municipales.", images: [agua1, agua2] },
  { name: "Mini Cargador Caterpillar 246C", year: "2009", desc: "Cargador compacto tipo skid steer. Apto para excavación, manejo de materiales y espacios reducidos.", images: [] },
  { name: "Grúa Digger", year: "2009", desc: "Grúa especializada para instalación de postes. Diseñada para la siembra de postes de electricidad y operaciones similares.", images: [gruaDigger1, gruaDigger2, gruaDigger3, gruaDigger4] },
  { name: "Montacargas Caterpillar — 4 Toneladas", year: "1990", desc: "Montacargas de uso intensivo para bodegas, patios o aplicaciones industriales.", images: [montacargas1, montacargas2] },
  { name: "Camión Freightliner M2 Furgón Cerrado con Rampa Hidráulica", year: "2014", desc: "Camión de carga cerrado con rampa hidráulica de carga. Apto para transporte y distribución de mercadería.", images: [freightliner1, freightliner2, freightliner3, freightliner4] },
  { name: "Camión Recolector de Basura", year: "2002", desc: "Vehículo recolector de carga trasera para operaciones municipales o privadas de recolección de residuos.", images: [recolector2002_1, recolector2002_2, recolector2002_3, recolector2002_4] },
  { name: "Camión Recolector de Basura", year: "2003", desc: "Segunda unidad disponible para contratos extendidos u operaciones simultáneas.", images: [] },
  { name: "Mula Patiera Ottawa", year: "1998", desc: "Mula patiera para movimiento de contenedores y remolques en patios, puertos y centros de distribución.", images: [ottawa98_1, ottawa98_2, ottawa98_3] },
  { name: "Mula Patiera Ottawa", year: "2003", desc: "Segunda unidad disponible para operaciones simultáneas o contratos extendidos.", images: [ottawa2003_1] },
  { name: "Camión Freightliner M2 Plataforma", year: "2006", desc: "Camión con plataforma abierta para transporte de carga pesada, maquinaria y materiales de construcción.", images: [freightPlat1, freightPlat2, freightPlat3, freightPlat4, freightPlat5] },
  { name: "Mula Patiera Ottawa", year: "2000", desc: "Mula patiera para movimiento de contenedores y remolques en patios, puertos y centros de distribución.", images: [ottawa2000_1, ottawa2000_2, ottawa2000_3] },
  { name: "Cabezal Volvo — Motor D11", year: "2013", desc: "Cabezal Volvo con motor D11, caja automática y retardador. Ideal para transporte pesado de larga distancia.", images: [volvo2013_1, volvo2013_2] },
];

const Rentals = () => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (unit: Unit) => {
    if (unit.images && unit.images.length > 0) {
      setSelectedUnit(unit);
      setCurrentImage(0);
    }
  };

  const prevImage = () => {
    if (!selectedUnit?.images) return;
    setCurrentImage((prev) =>
      prev === 0 ? selectedUnit.images!.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (!selectedUnit?.images) return;
    setCurrentImage((prev) =>
      prev === selectedUnit.images!.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="alquileres" className="py-20">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-4 text-center">
          Alquiler de Equipo y <span className="text-primary">Camiones</span>
        </h2>
        <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
          Contamos con una flota de vehículos y equipo especializado disponible
          para alquiler. Todas las unidades reciben mantenimiento regular y están
          listas para operar. La disponibilidad y condiciones de alquiler se
          confirman directamente.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {units.map((u, i) => {
            const hasImages = u.images && u.images.length > 0;
            return (
              <div
                key={i}
                onClick={() => openGallery(u)}
                className={`rounded-lg border border-border bg-card p-6 transition-colors ${
                  hasImages
                    ? "cursor-pointer hover:border-primary/40 hover:shadow-lg"
                    : "hover:border-primary/40"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Truck size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                      {u.name}
                    </h3>
                    {u.year && (
                      <span className="text-xs text-primary font-semibold">
                        Año {u.year}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {u.desc}
                </p>
                {hasImages && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-primary font-semibold">
                    <ImageIcon size={14} />
                    <span>Ver multimedia ({u.images!.length})</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/50683423216?text=Hola%2C%20estoy%20interesado%20en%20alquilar%20equipo.%20Por%20favor%20br%C3%ADndeme%20detalles%20y%20disponibilidad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-whatsapp text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-whatsapp-hover transition-colors"
          >
            <MessageSquare size={18} />
            Consultar Disponibilidad por WhatsApp
          </a>
        </div>
      </div>

      {/* Image Gallery Dialog */}
      <Dialog
        open={!!selectedUnit}
        onOpenChange={(open) => !open && setSelectedUnit(null)}
      >
        <DialogContent className="max-w-3xl w-[95vw] p-0 bg-background border-border">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="font-display text-lg font-bold text-foreground">
              {selectedUnit?.name}
              {selectedUnit?.year && (
                <span className="text-primary ml-2 text-sm font-semibold">
                  Año {selectedUnit.year}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedUnit?.images && selectedUnit.images.length > 0 && (
            <div className="relative px-4 pb-4">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                {/\.(mp4|mov|webm)$/i.test(selectedUnit.images[currentImage]) ? (
                  <video
                    key={currentImage}
                    src={selectedUnit.images[currentImage]}
                    controls
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedUnit.images[currentImage]}
                    alt={`${selectedUnit.name} - Foto ${currentImage + 1}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {selectedUnit.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded-full p-2 hover:bg-accent transition-colors"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft size={24} className="text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded-full p-2 hover:bg-accent transition-colors"
                    aria-label="Siguiente foto"
                  >
                    <ChevronRight size={24} className="text-foreground" />
                  </button>

                  <div className="flex justify-center gap-1.5 mt-3">
                    {selectedUnit.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          idx === currentImage
                            ? "bg-primary"
                            : "bg-muted-foreground/30"
                        }`}
                        aria-label={`Ir a foto ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Rentals;
