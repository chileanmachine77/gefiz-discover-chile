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
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourValparaisoVinaVinedo = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const tourImages = [
    {
      src: '/images/tours/valparaiso-vina-vinedo/valparaiso-1.jpg',
      alt: 'Persona pintando y bolsas colgadas en Valparaíso',
      title: 'Arte Callejero de Valparaíso'
    },
    {
      src: '/images/tours/valparaiso-vina-vinedo/valparaiso-2.jpg',
      alt: 'Reloj de Flores de Viña del Mar',
      title: 'Reloj de Flores'
    },
    {
      src: '/images/tours/valparaiso-vina-vinedo/valparaiso-3.jpg',
      alt: 'Moai en Viña del Mar',
      title: 'Moai de Viña del Mar'
    },
    {
      src: '/images/tours/valparaiso-vina-vinedo/valparaiso-4.jpg',
      alt: 'Casona y viñedo',
      title: 'Viñedo Boutique'
    },
    {
      src: '/images/tours/valparaiso-vina-vinedo/valparaiso-5.jpg',
      alt: 'Viñedos costeros',
      title: 'Viñedos del Valle'
    }
  ];

  const tourHighlights = [
    "Recorrido completo por Valparaíso patrimonio de la humanidad",
    "Visita a los icónicos ascensores y miradores",
    "Tour por las coloridas casas de los cerros Alegre y Concepción",
    "Experiencia gastronómica en Viña del Mar",
    "Visita exclusiva a viñedo boutique con degustación",
    "Cata de vinos premium con sommelier experto",
    "Almuerzo gourmet con maridaje de vinos",
    "Transporte premium y guía especializado en vinos"
  ];

  const itinerary = [
    {
      time: "08:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel en vehículo premium hacia la costa"
    },
    {
      time: "10:00",
      activity: "Llegada a Valparaíso",
      description: "Tour por el puerto histórico y patrimonio UNESCO"
    },
    {
      time: "11:30",
      activity: "Ascensores Patrimoniales",
      description: "Recorrido por cerros Alegre y Concepción con vistas panorámicas"
    },
    {
      time: "13:00",
      activity: "Viña del Mar",
      description: "Ciudad jardín: Casino, Reloj de Flores y costanera"
    },
    {
      time: "14:30",
      activity: "Almuerzo Gourmet",
      description: "Comida gourmet con vista al mar y primer maridaje"
    },
    {
      time: "16:00",
      activity: "Viñedo Boutique",
      description: "Visita a viñedo familiar con tour por las viñas"
    },
    {
      time: "17:00",
      activity: "Cata de Vinos Premium",
      description: "Degustación guiada de 4 vinos con sommelier experto"
    },
    {
      time: "18:30",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 21:30"
    }
  ];

  const includedServices = [
    "Transporte premium ida y vuelta desde Santiago",
    "Guía turístico especializado en vinos y cultura",
    "Almuerzo gourmet con maridaje incluido",
    "Cata de 4 vinos premium en viñedo boutique",
    "Entradas a ascensores patrimoniales de Valparaíso",
    "Tour completo por viñedo con sommelier",
    "Seguro de viaje completo",
    "Agua mineral y snacks durante el recorrido"
  ];

  const recommendations = [
    {
      title: "Vestimenta Apropiada",
      description: "Ropa cómoda y elegante casual para la cata de vinos"
    },
    {
      title: "Cámara Fotográfica",
      description: "Captura los paisajes de Valparaíso y los viñedos"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador y sombrero para el tour por las viñas"
    },
    {
      title: "Documentos",
      description: "Cédula de identidad (mayores de 18 años para degustación)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/valparaiso-vina-vinedo/valparaiso-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Valparaíso, Viña del Mar y Viñedo
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Patrimonio, cultura costera y experiencia vinícola premium en un solo día
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>de 8 a 9 horas aprox</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span>4-12 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Wine className="w-5 h-5 text-primary" />
              <span>Cata incluida</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Experiencia Premium</span>
            </div>
          </div>
          
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Reservar Experiencia
          </Button>
        </div>
      </section>

      {/* Tour Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Experiencia Completa</h2>
              
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
                <div className="flex gap-2 justify-center flex-wrap">
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
                        className="w-14 h-14 md:w-16 md:h-16 object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-primary/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="prose prose-lg text-foreground-muted max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Vive una experiencia única que combina la riqueza cultural de Valparaíso, 
                  patrimonio de la humanidad UNESCO, con la elegancia costera de Viña del Mar 
                  y la tradición vinícola de la región. Este tour premium te llevará por los 
                  lugares más emblemáticos de la costa chilena, culminando con una exclusiva 
                  cata de vinos en un viñedo boutique.
                </p>
                <p className="text-lg leading-relaxed">
                  Descubre los coloridos cerros de Valparaíso, sus históricos ascensores y 
                  el arte callejero que caracteriza al puerto principal. Continúa hacia Viña 
                  del Mar, la ciudad jardín, para luego sumergirte en el mundo del vino con 
                  una degustación guiada por expertos sommeliers en un entorno privilegiado.
                </p>
              </div>
            </section>

            {/* Tour Information */}
            <section className="mt-12 mb-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-foreground">
                    Adulto: <span className="text-primary">CLP 91.000</span>
                  </div>
                  <div className="text-lg text-foreground-muted">
                    Niños: <span className="text-primary">CLP 53.000</span>
                  </div>
                  <div className="text-base text-foreground-muted">
                    Niños (menores de 3 años): <span className="text-primary">Gratis</span>
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
                      <p className="text-foreground-muted">07:20 horas, aproximadamente</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Duración</h3>
                      <p className="text-foreground-muted">Tour de 08 a 09 horas aprox. (desde la salida del hotel hasta su regreso)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Operación</h3>
                      <p className="text-foreground-muted">Todos los días (Mínimo 2 pasajeros)</p>
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
                    <span className="text-foreground-muted">Guía Bilingüe</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Degustación de vino</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6 space-y-4 mb-6">
                <div className="text-xl font-bold text-foreground mb-4">👎 No incluye:</div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">❌</span>
                    <span className="text-foreground-muted">Propinas opcionales</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">❌</span>
                    <span className="text-foreground-muted">Almuerzo</span>
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Booking Form */}
              <div className="bg-background-alt rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Adulto: <span className="text-primary">CLP 91.000</span>
                    </div>
                    <div className="text-lg text-foreground-muted">
                      Niños: <span className="text-primary">CLP 53.000</span>
                    </div>
                    <div className="text-base text-foreground-muted">
                      Niños (menores de 3 años): <span className="text-primary">Gratis</span>
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
                    <label htmlFor="adults" className="block text-sm font-medium text-foreground mb-2">
                      Número de Adultos
                    </label>
                    <select
                      id="adults"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
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

                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-foreground mb-2">
                      Número de Niños
                    </label>
                    <select
                      id="children"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seleccionar cantidad</option>
                      <option value="0">Sin niños</option>
                      <option value="1">1 niño</option>
                      <option value="2">2 niños</option>
                      <option value="3">3 niños</option>
                      <option value="4">4 niños</option>
                      <option value="5">5 niños</option>
                      <option value="6">6 niños</option>
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
                    <span className="text-foreground-muted">Duración: 11 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Salida: Santiago Centro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Transporte premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wine className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Cata de vinos incluida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Almuerzo gourmet</span>
                  </div>
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

export default TourValparaisoVinaVinedo;
