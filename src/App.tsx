/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin,
  Phone,
  Clock,
  ArrowRight, 
  Instagram, 
  Facebook,
  MessageCircle,
  ShieldCheck,
  Recycle,
  Banknote,
  ExternalLink,
  ShoppingBag
} from "lucide-react";

const argentinaImg = "/argentina.png";
const benissuaiImg = "/benissuai.jpg";
const heroBg = "/hero-bg.png";

const WHATSAPP_LINK = "https://wa.me/34692669449?text=Hola%20NEWMARKET%2C%20me%20gustar%C3%ADa%20vender%20mi%20equipo.%20%C2%BFPod%C3%A9is%20darme%20una%20valoraci%C3%B3n%3F";
const WHATSAPP_BUY_LINK = "https://wa.me/34692669449?text=Hola%20NEWMARKET%2C%20estoy%20interesado%20en%20comprar%20un%20dispositivo.%20%C2%BFTen%C3%A9is%20stock%20disponible%3F";

const services = [
  {
    title: "COMPRA Y VENTA",
    description: "Trae tus dispositivos usados y recibe la mejor valoración en efectivo o crédito para tu próxima compra.",
    icon: <Banknote className="w-8 h-8 text-red-600" />
  },
  {
    title: "GARANTÍA DE 1 AÑO",
    description: "Todos nuestros productos son revisados minuciosamente por expertos para garantizar su perfecto funcionamiento y cuentan con un año de garantía total.",
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />
  },
  {
    title: "COMPRA EN TIENDA",
    description: "Explora nuestro catálogo de smartphones, consolas y gadgets premium con la mejor relación calidad-precio del mercado.",
    icon: <ShoppingBag className="w-8 h-8 text-red-600" />
  }
];

const stores = [
  {
    name: "Newmarket República Argentina",
    address: "Av. de la República Argentina, 8, 46702 Gandia, Valencia",
    phone: "961 06 25 84",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.+de+la+República+Argentina,+8,+46702+Gandia,+Valencia",
    image: argentinaImg,
    hours: [
      "Lunes a Viernes: 10:00–14:00, 17:00–20:30",
      "Sábado: 10:00–14:00, 17:00–20:30",
      "Domingo: Cerrado"
    ]
  },
  {
    name: "Newmarket Benissuai",
    address: "Carrer Benissuai, 10, 46701 Gandia, Valencia",
    phone: "962 86 00 50",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+Benissuai,+10,+46701+Gandia,+Valencia",
    image: benissuaiImg,
    hours: [
      "Lunes a Viernes: 10:00–14:00, 17:00–20:30",
      "Sábado: 10:00–14:00",
      "Domingo: Cerrado"
    ]
  }
];

const Logo = ({ className = "w-10 h-10 md:w-12 md:h-12" }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center overflow-hidden`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Red Circle */}
      <circle cx="50" cy="50" r="45" fill="#dc2626" />
      
      {/* Cycle Arrows */}
      <path 
        d="M 25 40 A 28 28 0 0 1 75 40" 
        fill="none" 
        stroke="white" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      <path 
        d="M 75 60 A 28 28 0 0 1 25 60" 
        fill="none" 
        stroke="white" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      
      {/* Arrow Heads */}
      <path d="M 70 35 L 80 40 L 70 45 Z" fill="white" />
      <path d="M 30 55 L 20 60 L 30 65 Z" fill="white" />
      
      {/* nm Text */}
      <text 
        x="50" 
        y="58" 
        textAnchor="middle" 
        fill="white" 
        fontSize="28" 
        fontWeight="900" 
        fontFamily="system-ui, sans-serif"
        style={{ letterSpacing: '-1px' }}
      >
        nm
      </text>
    </svg>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-red-600 selection:text-white font-sans">
      {/* Navbar Simple */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 md:px-6 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <Logo />
            <h1 className="font-tech text-xl md:text-2xl font-bold tracking-tighter text-shadow-sm">
              NEW<span className="text-red-600">MARKET</span>
            </h1>
          </div>
          
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-600">
            <a href="#servicios" className="hover:text-red-600 transition-colors">Servicios</a>
            <a href="#tiendas" className="hover:text-red-600 transition-colors">Tiendas</a>
            <a href="#contacto" className="hover:text-red-600 transition-colors">Contacto</a>
          </div>

          <a href="#tiendas" className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded font-bold text-[10px] md:text-xs uppercase hover:bg-red-700 transition-colors flex items-center gap-2 text-shadow-sm">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="hidden sm:inline">DÓNDE ESTAMOS</span>
          </a>
        </div>
      </nav>

      {/* Hero Section Simple */}
      <section className="relative py-24 md:py-40 flex items-center justify-center overflow-hidden">
        {/* Background Image with Fade Mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
            }}
            loading="eager"
          />
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/80 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-7xl font-tech font-bold mb-6 md:mb-8 leading-tight text-black text-shadow-md">
              TU TIENDA DE SEGUNDA MANO <br />
              <span className="text-red-600 text-2xl md:text-6xl">EN GANDÍA</span>
            </h2>
            <p className="text-gray-700 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-shadow-sm">
              Especialistas en compra, venta y reacondicionamiento de smartphones, consolas y gadgets premium. Calidad garantizada en nuestras tiendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <a href="#tiendas" className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-12 py-3 md:py-4 rounded font-bold transition-all uppercase text-xs md:text-sm tracking-widest shadow-lg shadow-red-600/20 text-shadow-sm">
                VISITAR TIENDAS
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-zinc-800 px-8 md:px-12 py-3 md:py-4 rounded font-bold transition-all uppercase text-xs md:text-sm tracking-widest shadow-lg shadow-black/10 text-shadow-sm"
              >
                VENDER MI EQUIPO
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section Simple */}
      <section id="servicios" className="py-16 md:py-24 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="font-tech text-2xl md:text-3xl mb-4 text-shadow-sm">NUESTROS SERVICIOS</h2>
            <div className="w-16 md:w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 md:p-10 bg-gray-50 border border-gray-200 rounded-lg hover:border-red-600/50 transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="font-tech text-lg md:text-xl mb-4 text-black text-shadow-sm">{service.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">{service.description}</p>
                {service.title === "COMPRA Y VENTA" && (
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-bold text-xs hover:underline flex items-center gap-2 uppercase tracking-widest"
                  >
                    CONSULTAR VALORACIÓN <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                {service.title === "COMPRA EN TIENDA" && (
                  <a 
                    href={WHATSAPP_BUY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-bold text-xs hover:underline flex items-center gap-2 uppercase tracking-widest"
                  >
                    CONSULTAR STOCK <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stores Section with Images */}
      <section id="tiendas" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="font-tech text-2xl md:text-3xl mb-4 text-shadow-sm">ENCUÉNTRANOS EN GANDÍA</h2>
            <div className="w-16 md:w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-sm md:text-base">Visita nuestras tiendas para recibir atención personalizada.</p>
          </motion.div>
          
          <div className="space-y-12 md:space-y-16">
            {stores.map((store, idx) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-center bg-white border border-gray-200 shadow-sm p-4 md:p-10 rounded-xl`}
              >
                {/* Store Image */}
                <div className="w-full md:w-1/2 h-56 md:h-96 overflow-hidden rounded-lg">
                  <img 
                    src={store.image} 
                    alt={`Fachada de ${store.name}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Store Info */}
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                  <h3 className="font-tech text-xl md:text-2xl text-red-600 text-shadow-sm">{store.name}</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex gap-3 md:gap-4 items-start">
                      <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                      <p className="text-gray-700 text-sm md:text-base">{store.address}</p>
                    </div>
                    <div className="flex gap-3 md:gap-4 items-center">
                      <Phone className="w-5 h-5 text-red-600 shrink-0" />
                      <p className="text-gray-700 text-sm md:text-base">{store.phone}</p>
                    </div>
                    <div className="flex gap-3 md:gap-4 items-start">
                      <Clock className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                      <div className="text-gray-700 text-xs md:text-sm space-y-1">
                        {store.hours.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a 
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 px-6 md:px-8 py-2.5 md:py-3 rounded hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-bold text-[10px] md:text-xs tracking-widest uppercase"
                  >
                    CÓMO LLEGAR <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer id="contacto" className="py-12 md:py-20 px-6 bg-white border-t border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <h1 className="font-tech text-2xl font-bold tracking-tighter text-shadow-sm">
                NEW<span className="text-red-600">MARKET</span>
              </h1>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tu tienda de confianza en Gandía para la compra y venta de tecnologia premium reacondicionada. Profesionalidad y garantía en cada trato.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-tech text-xs text-black tracking-widest uppercase text-shadow-sm">Enlaces Rápidos</h4>
            <ul className="text-gray-600 text-sm space-y-4">
              <li><a href="#servicios" className="hover:text-red-600 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#tiendas" className="hover:text-red-600 transition-colors">Nuestras Tiendas</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Vender mi equipo</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-tech text-xs text-black tracking-widest uppercase text-shadow-sm">Síguenos</h4>
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/newmarketgandia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/newmarketgandia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-all"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-400 tracking-[0.2em] uppercase font-tech">
          © 2026 NEWMARKET TECH GANDÍA - TODOS LOS DERECHOS RESERVADOS.
        </div>
      </footer>
    </div>
  );
}
