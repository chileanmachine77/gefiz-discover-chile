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
  Mountain,
  TreePine,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourCordilleraPanoramico = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const tourImages = [
    { src: '/images/tours/cordillera-panoramico/cordillera-1.jpg', alt: 'Cordillera Panorámico - Andes', title: 'Cordillera Andes' },
    { src: '/images/tours/cordillera-panoramico/cordillera-2.jpg', alt: 'Cordillera Panorámico - Mirador altura', title: 'Mirador de Altura' },
    { src: '/images/tours/cordillera-panoramico/cordillera-3.jpg', alt: 'Cordillera Panorámico - Paisaje andino', title: 'Paisaje Andino' },
    { src: '/images/tours/cordillera-panoramico/cordillera-4.jpg', alt: 'Cordillera Panorámico - Vista panorámica', title: 'Vista Panorámica' },
    { src: '/images/tours/cordillera-panoramico/cordillera-5.jpg', alt: 'Cordillera Panorámico - Invierno andino', title: 'Invierno Andino' }
  ];

  const tourDescription = "Vive una aventura única en la majestuosa Cordillera de los Andes con vistas panorámicas espectaculares. Este tour te lleva a los miradores más impresionantes de la montaña, donde podrás contemplar paisajes andinos de ensueño y experimentar diferentes altitudes y ecosistemas. Recorre pueblos cordilleranos tradicionales, disfruta de un almuerzo panorámico y realiza caminatas ecológicas. Una experiencia perfecta para los amantes de la naturaleza, la fotografía y los paisajes de montaña.";

  const tourHighlights = [
    "Traslado desde / hacia hoteles",
    "Seguro Transporte de Pasajeros",
    "Temporada de invierno: parada en rental para arriendo de equipos y ropa de nieve",
    "Parada sugerida para disfrutar y jugar en la nieve"
  ];

  
  
  const recommendations = [
    {
      title: "Ropa de Montaña",
      description: "Ropa abrigada en capas, la temperatura baja con la altitud"
    },
    {
      title: "Calzado Apropiado",
      description: "Zapatos de trekking o botas cómodas para caminatas"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador solar, lentes y gorro - la radiación es intensa en altura"
    },
    {
      title: "Cámara Fotográfica",
      description: "Los paisajes andinos ofrecen oportunidades fotográficas únicas"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, me gustaría reservar el Tour Cordillera Panorámico:

*Detalles de la Reserva:*
• Fecha: ${selectedDate}
• Hora: ${selectedTime}
• Número de personas: ${groupSize}

*Tour:* Cordillera Panorámico
*Duración:* 8 - 9 horas
*Incluye:* Transporte 4x4, guía especializado, almuerzo panorámico, seguro de montaña

¡Espero su confirmación!`;

    const whatsappUrl = `https://wa.me/56966435647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/cordillera-panoramico/cordillera-4.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Cordillera Panorámico
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Vistas espectaculares de la majestuosa Cordillera de los Andes
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>8 - 9 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span>2-15 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mountain className="w-5 h-5 text-primary" />
              <span>Cordillera Andes</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Camera className="w-5 h-5 text-primary" />
              <span>Paisajes Únicos</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tour Description */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Descripción</h2>
              
              {/* Interactive Image Gallery */}
              <div className="mb-8">
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
                <div className="flex gap-3 justify-center flex-wrap">
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
                <p className="text-lg leading-relaxed mb-4">
                  {tourDescription}
                </p>
              </div>
            </section>

            {/* Tour Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Lo que Incluye</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            
            
            {/* Operación */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Operación</h2>
              <div className="bg-card border border-card-border rounded-lg p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Horario de Salida</h3>
                    <p className="text-foreground-muted">A partir de las 06:20 hrs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Duración</h3>
                    <p className="text-foreground-muted">Tour de 8 a 9 horas aprox. (desde la salida del hotel hasta su regreso)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Operación</h3>
                    <p className="text-foreground-muted">Todos los días / Sujeto a condiciones climáticas</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recomendaciones Generales */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Recomendaciones Generales</h2>
              <div className="bg-card border border-card-border rounded-lg p-6">
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Form */}
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">CLP 185.000</div>
                <div className="text-foreground-muted">por persona</div>
                <div className="text-sm text-foreground-muted mt-1">Incluye transporte 4x4, almuerzo y guía especializado</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    Fecha del Tour
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                    Hora de Salida
                  </label>
                  <select
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar hora</option>
                    <option value="07:30">07:30 - Salida Temprana</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="group-size" className="block text-sm font-medium text-foreground mb-2">
                    Número de Personas
                  </label>
                  <select
                    id="group-size"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar cantidad</option>
                    <option value="2">2 personas</option>
                    <option value="4">4 personas</option>
                    <option value="6">6 personas</option>
                    <option value="8">8 personas</option>
                    <option value="10">10 personas</option>
                    <option value="12">12 personas</option>
                    <option value="15">15 personas</option>
                    <option value="20">20 personas</option>
                  </select>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-lg font-semibold">
                  Reservar Tour Panorámico
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
                  <span className="text-foreground-muted">Duración: 8 - 9 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Cordillera de los Andes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Transporte 4x4</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mountain className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Múltiples miradores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Almuerzo incluido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Paisajes únicos</span>
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

export default TourCordilleraPanoramico;
