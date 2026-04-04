import { MessageSquare } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/50683423216"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-foreground shadow-lg hover:bg-whatsapp-hover transition-colors animate-float"
  >
    <MessageSquare size={26} />
  </a>
);

export default WhatsAppFloat;
