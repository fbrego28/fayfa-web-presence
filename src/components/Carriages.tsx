import { useState } from "react";
import { MessageSquare, ShoppingCart, CalendarClock, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import chasis20_1 from "@/assets/curenas/chasis-20-1.jpeg";
import chasis20_2 from "@/assets/curenas/chasis-20-2.jpeg";
import chasis20_3 from "@/assets/curenas/chasis-20-3.jpeg";
import chasis20_4 from "@/assets/curenas/chasis-20-4.jpeg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CurenaType {
  name: string;
  desc: string;
  images?: string[];
}

const curenas: CurenaType[] = [
  { name: "Chasis 20 pies", desc: "Cureña tipo chasis para contenedores de 20 pies. Ideal para transporte portuario y logístico.", images: [chasis20_1, chasis20_2, chasis20_3, chasis20_4] },
  { name: "Chasis 40 pies", desc: "Cureña tipo chasis para contenedores de 40 pies. Disponible para venta o alquiler.", images: [] },
  { name: "Plataforma", desc: "Cureña tipo plataforma para carga general, maquinaria y materiales de construcción.", images: [] },
];

const Carriages = () => {
  const [selectedCurena, setSelectedCurena] = useState<CurenaType | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (c: CurenaType) => {
    if (c.images && c.images.length > 0) {
      setSelectedCurena(c);
      setCurrentImage(0);
    }
  };

  const prevImage = () => {
    if (!selectedCurena?.images) return;
    setCurrentImage((prev) =>
      prev === 0 ? selectedCurena.images!.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (!selectedCurena?.images) return;
    setCurrentImage((prev) =>
      prev === selectedCurena.images!.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="curenas" className="py-20">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-foreground mb-4 text-center">
          Venta y Alquiler de <span className="text-primary">Cureñas</span>
        </h2>
        <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
          Importamos cureñas directamente desde los Estados Unidos, transportadas
          por vía marítima hasta Costa Rica. Cada unidad es inspeccionada,
          reparada y restaurada completamente antes de su venta, garantizando que
          reciba una cureña en condiciones óptimas. También ofrecemos cureñas en
          alquiler. Precios y especificaciones se brindan bajo consulta.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <div className="rounded-lg border border-border bg-card p-8 text-center hover:border-primary/40 transition-colors">
            <ShoppingCart size={36} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
              Compra
            </h3>
            <p className="text-sm text-muted-foreground">
              Adquiera una cureña restaurada de calidad importada
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 text-center hover:border-primary/40 transition-colors">
            <CalendarClock size={36} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-2">
              Alquiler
            </h3>
            <p className="text-sm text-muted-foreground">
              Disponible para alquiler a corto o largo plazo
            </p>
          </div>
        </div>

        <h3 className="font-display text-xl font-bold uppercase text-foreground mb-6 text-center">
          Tipos Disponibles
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {curenas.map((c, i) => {
            const hasImages = c.images && c.images.length > 0;
            return (
              <div
                key={i}
                onClick={() => openGallery(c)}
                className={`rounded-lg border border-border bg-card p-6 transition-colors ${
                  hasImages
                    ? "cursor-pointer hover:border-primary/40 hover:shadow-lg"
                    : "hover:border-primary/40"
                }`}
              >
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {c.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
                {hasImages && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-primary font-semibold">
                    <ImageIcon size={14} />
                    <span>Ver fotos ({c.images!.length})</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/50683423216?text=Hola%2C%20estoy%20interesado%20en%20una%20cure%C3%B1a.%20Por%20favor%20br%C3%ADndeme%20detalles%20y%20precios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-whatsapp text-foreground font-display font-bold uppercase tracking-wider text-sm hover:bg-whatsapp-hover transition-colors"
          >
            <MessageSquare size={18} />
            Consultar sobre Cureñas por WhatsApp
          </a>
        </div>
      </div>

      {/* Image Gallery Dialog */}
      <Dialog
        open={!!selectedCurena}
        onOpenChange={(open) => !open && setSelectedCurena(null)}
      >
        <DialogContent className="max-w-3xl w-[95vw] p-0 bg-background border-border">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="font-display text-lg font-bold text-foreground">
              {selectedCurena?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedCurena?.images && selectedCurena.images.length > 0 && (
            <div className="relative px-4 pb-4">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedCurena.images[currentImage]}
                  alt={`${selectedCurena.name} - Foto ${currentImage + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {selectedCurena.images.length > 1 && (
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
                    {selectedCurena.images.map((_, idx) => (
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

export default Carriages;
