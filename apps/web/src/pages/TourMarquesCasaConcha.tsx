import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  Camera, 
  Car, 
  Coffee,
  Phone,
  Mail,
  ChevronRight,
  Check,
  Wine,
  Grape,
  Home,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TourMarquesCasaConcha = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [adults, setAdults] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const tourImages = [
    {
      src: '/images/tours/marques-casa-concha/casona.jpg',
      alt: 'Casona histórica de Marques de Casa Concha',
      title: 'Casona Histórica'
    },
    {
      src: '/images/tours/marques-casa-concha/marques.jpg',
      alt: 'Personas viendo los viñedos',
      title: 'Viñedos Premium'
    },
    {
      src: '/images/tours/marques-casa-concha/marques2.jpg',
      alt: 'Persona en cata de vino',
      title: 'Cata de Vinos'
    }
  ];

  const tourHighlights = [
    "Visita a la histórica casona de Marques de Casa Concha",
    "Recorrido por viñedos premium de Pirque",
    "Cata de vinos guiada por sommelier experto",
    "Degustación de varietales exclusivos",
    "Almuerzo maridaje con productos locales",
    "Historia de la tradición vitivinícola chilena",
    "Experiencia premium en ambiente exclusivo",
    "Certificado de participación en cata"
  ];

  const itinerary = [
    {
      time: "09:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel y traslado hacia Pirque"
    },
    {
      time: "09:45",
      activity: "Llegada a la Viña",
      description: "Bienvenida y presentación de la experiencia"
    },
    {
      time: "10:00",
      activity: "Tour por la Casona",
      description: "Visita guiada por la histórica casona y sus jardines"
    },
    {
      time: "11:00",
      activity: "Recorrido por Viñedos",
      description: "Caminata entre las vides con explicación del proceso"
    },
    {
      time: "12:00",
      activity: "Cata de Vinos Premium",
      description: "Degustación de 5 varietales con sommelier experto"
    },
    {
      time: "13:00",
      activity: "Almuerzo Maridaje",
      description: "Comida gourmet maridada con vinos de la casa"
    },
    {
      time: "14:30",
      activity: "Tiempo Libre",
      description: "Exploración libre de jardines y tienda de vinos"
    },
    {
      time: "15:00",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 16:00"
    }
  ];

  const includedServices = [
    "Transporte ida y vuelta desde Santiago",
    "Guía especializado en vinos",
    "Entrada a la viña y casona histórica",
    "Cata de 5 vinos premium",
    "Almuerzo gourmet con maridaje",
    "Recorrido por viñedos y bodegas",
    "Certificado de participación",
    "Degustación de productos locales"
  ];

  const recommendations = [
    {
      title: "Ropa Cómoda",
      description: "Zapatos cómodos para caminar entre viñedos"
    },
    {
      title: "Protección Solar",
      description: "Sombrero y bloqueador para el recorrido al aire libre"
    },
    {
      title: "Cámara Fotográfica",
      description: "Los viñedos y casona son muy fotogénicos"
    },
    {
      title: "Conductor Designado",
      description: "Si vienes en auto propio, designa conductor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/marques-casa-concha/casona.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Marques de Casa Concha
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Experiencia premium en viñedos históricos de Pirque
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>5 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Users className="w-4 h-4" />
              <span>2-12 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4" />
              <span>4.8 (178 reseñas)</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Wine className="w-4 h-4" />
              <span>Cata Premium</span>
            </div>
          </div>

          <div className="text-3xl md:text-4xl font-bold mb-2">
            CLP 65.000
          </div>
          <p className="text-white/80">por persona</p>
        </div>
      </section>

      {/* Tour Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tour Description */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-card-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Sobre esta Experiencia Premium</h2>
              
              {/* Interactive Image Gallery */}
              <div className="mb-6">
                {/* Main Image */}
                <div className="mb-4">
                  <img 
                    width="510" 
                    height="213"
                    src={tourImages[selectedImage].src}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    alt={tourImages[selectedImage].alt}
                    title={tourImages[selectedImage].title}
                    data-caption=""
                    data-src={tourImages[selectedImage].src}
                    data-large_image={tourImages[selectedImage].src}
                    data-large_image_width="1200"
                    data-large_image_height="500"
                    decoding="async"
                    srcSet={`${tourImages[selectedImage].src} 510w, ${tourImages[selectedImage].src} 600w, ${tourImages[selectedImage].src} 768w, ${tourImages[selectedImage].src} 1200w`}
                    sizes="(max-width: 510px) 100vw, 510px"
                  />
                  <p className="text-sm text-foreground-muted mt-2 text-center font-medium">
                    {tourImages[selectedImage].title}
                  </p>
                </div>
                
                {/* Thumbnail Row */}
                <div className="flex gap-3 justify-center">
                  {tourImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                        selectedImage === index 
                          ? 'ring-2 ring-primary ring-offset-2 scale-105' 
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-primary/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-foreground-muted">
                <p className="mb-4">
                  Sumérgete en una experiencia vitivinícola única en Marques de Casa Concha, 
                  una de las viñas más prestigiosas de Chile ubicada en el corazón de Pirque. 
                  Esta experiencia premium te llevará a través de la historia y tradición 
                  del vino chileno en un ambiente exclusivo y sofisticado.
                </p>
                <p className="mb-4">
                  Recorre la histórica casona del siglo XIX, camina entre viñedos centenarios 
                  y participa en una cata guiada por sommeliers expertos que te introducirán 
                  a los secretos de los varietales más exclusivos de la casa.
                </p>
                <p>
                  La experiencia culmina con un almuerzo gourmet perfectamente maridado, 
                  donde cada plato ha sido diseñado para complementar los vinos que habrás 
                  degustado, creando una sinfonía de sabores inolvidable.
                </p>
              </div>
            </div>

            {/* Tour Information */}
            <section className="mt-12 mb-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-foreground">
                    Adulto: <span className="text-primary">CLP 119.000</span>
                  </div>
                  <div className="text-lg text-foreground-muted">
                    Niños: <span className="text-primary">No Disponible</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6 space-y-4 mb-6">
                <div className="text-xl font-bold text-foreground mb-4">🚌 Operación:</div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Horario de Salida</h3>
                      <p className="text-foreground-muted">horario PM a confirmar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Duración</h3>
                      <p className="text-foreground-muted">Tour de 06 horas aprox. (desde la salida del hotel hasta su regreso)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Operación</h3>
                      <p className="text-foreground-muted">todos los días (Mínimo 4 pasajeros).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6 space-y-4 mb-6">
                <div className="text-xl font-bold text-foreground mb-4">👍 Incluye:</div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Traslado desde / hacia hoteles</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Seguro Transporte de Pasajeros</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Guía Bilíngüe</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Degustación de 3 vinos durante el recorrido</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Degustación exclusiva de cuatro variedades de la línea Super Premium Marques de Casa Concha, acompañada de finos quesos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Copa de Regalo</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6 space-y-4 mb-6">
                <div className="text-xl font-bold text-foreground mb-4">👎 No incluye:</div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">❌</span>
                    <span className="text-foreground-muted">Almuerzo</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">❌</span>
                    <span className="text-foreground-muted">Propinas opcionales</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6 space-y-4 mb-6">
                <div className="text-xl font-bold text-foreground mb-4">Recomendaciones Generales:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">👕</span>
                    <p className="text-foreground-muted">Viste ropa cómoda</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💧</span>
                    <p className="text-foreground-muted">Lleva agua para hidratarte</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💵</span>
                    <p className="text-foreground-muted">Lleva efectivo para souvenirs o comida</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🌞</span>
                    <p className="text-foreground-muted">Protégete del sol</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⛅</span>
                    <p className="text-foreground-muted">Verifica las condiciones del clima</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📷</span>
                    <p className="text-foreground-muted">Preocúpate de tener cargado tu teléfono y/o cámara</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⏰</span>
                    <p className="text-foreground-muted">Sé puntual y sigue las instrucciones del guía</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Preguntas Frecuentes */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">¿Preguntas Frecuentes?</h2>
              <div className="space-y-4">
                {/* Zona de Recogida */}
                <div className="bg-card border border-card-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq('pickup')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground">Zona de recogida para los tours</span>
                    {expandedFaq === 'pickup' ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </button>
                  {expandedFaq === 'pickup' && (
                    <div className="px-6 py-4 border-t border-card-border">
                      <p className="text-foreground-muted">
                        La recogida se realiza en alojamientos ubicados dentro del eje de las avenidas Alameda – Providencia – Apoquindo (Línea 1 del Metro de Santiago), en las comunas de Santiago Centro, Providencia y Las Condes. Si su alojamiento se encuentra fuera de la zona de recogida, se le asignará un punto de encuentro cercano y seguro.
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirmación de Servicios */}
                <div className="bg-card border border-card-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq('confirmation')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground">Confirmación de los servicios</span>
                    {expandedFaq === 'confirmation' ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </button>
                  {expandedFaq === 'confirmation' && (
                    <div className="px-6 py-4 border-t border-card-border">
                      <p className="text-foreground-muted">
                        En la víspera de cada tour se le confirmará por WhatsApp el horario estimado de recogida en su hotel o punto de encuentro.
                      </p>
                    </div>
                  )}
                </div>

                {/* Política de Cancelación */}
                <div className="bg-card border border-card-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq('cancellation')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground">Política de cancelación</span>
                    {expandedFaq === 'cancellation' ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </button>
                  {expandedFaq === 'cancellation' && (
                    <div className="px-6 py-4 border-t border-card-border space-y-3">
                      <p className="text-foreground-muted">
                        Para recibir un reembolso total, la cancelación debe solicitarse con al menos 72 horas de anticipación al inicio del servicio.
                      </p>
                      <p className="text-foreground-muted">
                        Si la cancelación se realiza con menos de 72 horas, se cobrará el 100% del valor reservado.
                      </p>
                    </div>
                  )}
                </div>

                {/* Reprogramación y Reembolsos */}
                <div className="bg-card border border-card-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq('rescheduling')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground">Reprogramación y reembolsos</span>
                    {expandedFaq === 'rescheduling' ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </button>
                  {expandedFaq === 'rescheduling' && (
                    <div className="px-6 py-4 border-t border-card-border space-y-3">
                      <p className="text-foreground-muted">
                        Los servicios pueden reprogramarse sin costo adicional, solicitándolo con un mínimo de 72 horas de anticipación.
                      </p>
                      <p className="text-foreground-muted">
                        En caso de modificaciones por parte de la agencia, nos pondremos en contacto para coordinar la alternativa.
                      </p>
                      <p className="text-foreground-muted">
                        Los plazos de reembolso pueden variar según el método de pago y las políticas de cada entidad bancaria.
                      </p>
                    </div>
                  )}
                </div>

                {/* Modificación de Itinerarios */}
                <div className="bg-card border border-card-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq('itinerary')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground">Modificación de itinerarios</span>
                    {expandedFaq === 'itinerary' ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </button>
                  {expandedFaq === 'itinerary' && (
                    <div className="px-6 py-4 border-t border-card-border">
                      <p className="text-foreground-muted">
                        Nuestros paseos cuentan con paradas establecidas, sin embargo, el itinerario puede sufrir alteraciones debido a condiciones climáticas, tránsito, eventos en la ciudad, cierres de vías o alta afluencia de público.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>

          </div>
          <div className="lg:col-span-1">
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-foreground">
                    Adulto: <span className="text-primary">CLP 119.000</span>
                  </div>
                  <div className="text-lg text-foreground-muted">
                    Niños: <span className="text-primary">No Disponible</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Fecha del Tour
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Número de Adultos
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Seleccionar cantidad</option>
                    <option value="1">1 adulto</option>
                    <option value="2">2 adultos</option>
                    <option value="3">3 adultos</option>
                    <option value="4">4 adultos</option>
                    <option value="5">5 adultos</option>
                    <option value="6">6 adultos</option>
                    <option value="7">7 adultos</option>
                    <option value="8">8 adultos</option>
                  </select>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-lg font-semibold">
                  Reservar Experiencia Premium
                </Button>

                <div className="text-center">
                  <p className="text-foreground-muted text-sm mb-3">¿Necesitas más información?</p>
                  <div className="space-y-2">
                    <a 
                      href="tel:+56966435647" 
                      className="flex items-center justify-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+56966435647</span>
                    </a>
                    <a 
                      href="mailto:gefiz.spa@gmail.com" 
                      className="flex items-center justify-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">gefiz.spa@gmail.com</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* Quick Info */}
            <div className="bg-background-alt rounded-xl p-4 mt-6">
              <h3 className="font-semibold text-foreground mb-3">Información Rápida</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Duración: 5 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Ubicación: Pirque, Santiago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Transporte incluido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wine className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Cata de 5 vinos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Grape className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Viñedos premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Almuerzo maridaje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourMarquesCasaConcha;
