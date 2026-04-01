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
  TreePine,
  Moon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import vineyardImage from '@/assets/vineyard.jpg';

const TourVinaSantaRita = () => {
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
    { src: '/images/tours/vina-santa-rita/santa-rita-1.jpg', alt: 'Viña Santa Rita - Vista panorámica', title: 'Vista Panorámica' },
    { src: '/images/tours/vina-santa-rita/santa-rita-2.jpg', alt: 'Viña Santa Rita - Bodegas históricas', title: 'Bodegas Históricas' },
    { src: '/images/tours/vina-santa-rita/santa-rita-3.jpg', alt: 'Viña Santa Rita - Viñedos centenarios', title: 'Viñedos Centenarios' }
  ];

  const tourHighlights = [
    "Visita a la histórica Viña Santa Rita, fundada en 1880",
    "Recorrido por viñedos centenarios y bodegas tradicionales",
    "Degustación de vinos premium y reserva especial",
    "Visita al Museo Andino y Casa Principal histórica",
    "Cata dirigida por sommelier experto",
    "Almuerzo gourmet maridado con vinos de la casa",
    "Transporte desde Santiago incluido",
    "Recorrido por jardines históricos y parque de esculturas"
  ];

  const itinerary = [
    {
      time: "09:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel y traslado hacia Viña Santa Rita en Alto Jahuel"
    },
    {
      time: "09:45",
      activity: "Llegada a la Viña",
      description: "Bienvenida y introducción a la historia de la viña"
    },
    {
      time: "10:00",
      activity: "Recorrido por Viñedos",
      description: "Caminata por los viñedos históricos y explicación del proceso"
    },
    {
      time: "11:00",
      activity: "Visita a Bodegas",
      description: "Recorrido por las bodegas centenarias y proceso de vinificación"
    },
    {
      time: "12:00",
      activity: "Museo Andino",
      description: "Visita al museo con arte precolombino y casa principal"
    },
    {
      time: "13:00",
      activity: "Almuerzo Maridado",
      description: "Almuerzo gourmet con maridaje de vinos premium"
    },
    {
      time: "14:30",
      activity: "Cata Final",
      description: "Degustación de vinos reserva con sommelier"
    },
    {
      time: "15:30",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 16:30"
    }
  ];

  const includedServices = [
    "Transporte ida y vuelta desde Santiago",
    "Guía especializado en enología",
    "Recorrido completo por viñedos y bodegas",
    "Degustación de 6 vinos diferentes",
    "Almuerzo gourmet con maridaje",
    "Visita al Museo Andino",
    "Cata dirigida por sommelier profesional",
    "Seguro de viaje incluido"
  ];

  const recommendations = [
    {
      title: "Ropa Cómoda",
      description: "Usar zapatos cómodos para caminar por los viñedos"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador solar y sombrero para el recorrido al aire libre"
    },
    {
      title: "Cámara Fotográfica",
      description: "Los paisajes y bodegas ofrecen excelentes oportunidades fotográficas"
    },
    {
      title: "Conductor Designado",
      description: "Si vienes en auto propio, designa un conductor que no participe en la cata"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/vina-santa-rita/santa-rita-2.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viña Santa Rita
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Descubre la historia y tradición de una de las viñas más emblemáticas de Chile
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>6.5 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>Alto Jahuel, Buin</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4" />
              <span>2-25 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4" />
              <span>4.8/5 estrellas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Interactive Image Gallery */}
            <section className="bg-card rounded-xl p-6 border border-card-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Galería de Imágenes</h2>
              
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
            </section>
            
            {/* 🎟️ Valores */}
            <section className="bg-card border border-card-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">🎟️ Valores</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium text-foreground">Adulto</span>
                  <span className="text-xl font-bold text-primary">CLP 68.200</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium text-foreground">Niños</span>
                  <span className="text-xl font-bold text-primary">CLP 34.100</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium text-foreground">Niños menores de 3 años</span>
                  <span className="text-xl font-bold text-green-600">Gratis</span>
                </div>
              </div>
            </section>

            {/* 🚌 Operación */}
            <section className="bg-card border border-card-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">🚌 Operación</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Horario de Salida</h3>
                    <p className="text-foreground-muted">A partir de las 13:00 horas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Duración</h3>
                    <p className="text-foreground-muted">Tour de 5 horas aprox. (desde la salida del hotel hasta su regreso)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Idioma</h3>
                    <p className="text-foreground-muted">Tour Español o Portugués</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Operación</h3>
                    <p className="text-foreground-muted">Todos los días</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 👍 Incluye */}
            <section className="bg-card border border-card-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">👍 Incluye</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Traslado desde / hacia hoteles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Seguro Transporte de Pasajeros</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Guia Bilingüe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Degustación y Copa de Regalo</span>
                </li>
              </ul>
            </section>

            {/* 👎 No incluye */}
            <section className="bg-card border border-card-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">👎 No incluye</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-foreground-muted">Almuerzo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-foreground-muted">Propinas opcionales</span>
                </li>
              </ul>
            </section>

            {/* 👕 Recomendaciones Generales */}
            <section className="bg-card border border-card-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">👕 Recomendaciones Generales</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-xl">👕</span>
                  <span className="text-foreground-muted">Viste ropa cómoda</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">💧</span>
                  <span className="text-foreground-muted">Lleva agua para hidratarte</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">💵</span>
                  <span className="text-foreground-muted">Lleva efectivo para souvenirs o comida</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">🌞</span>
                  <span className="text-foreground-muted">Protégete del sol</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">⛅</span>
                  <span className="text-foreground-muted">Verifica las condiciones del clima</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">📷</span>
                  <span className="text-foreground-muted">Preocúpate de tener cargado tu teléfono y/o cámara</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">⏰</span>
                  <span className="text-foreground-muted">Sé puntual y sigue las instrucciones del guía</span>
                </li>
              </ul>
            </section>

            {/* ❓ Preguntas Frecuentes */}
            <section className="bg-card border border-card-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">❓ Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {[
                  { id: 'faq1', question: 'Zona de recogida para los tours', answer: 'La recogida se realiza en alojamientos ubicados dentro del eje de las avenidas Alameda – Providencia – Apoquindo (Línea 1 del Metro de Santiago), en las comunas de Santiago Centro, Providencia y Las Condes. Si su alojamiento se encuentra fuera de la zona de recogida, se le asignará un punto de encuentro cercano y seguro.' },
                  { id: 'faq2', question: 'Confirmación de los servicios', answer: 'En la víspera de cada tour se le confirmará por WhatsApp el horario estimado de recogida en su hotel o punto de encuentro.' },
                  { id: 'faq3', question: 'Políticas de Cancelación', answer: 'Para recibir un reembolso total, la cancelación debe solicitarse con al menos 72 horas de anticipación al inicio del servicio. Si la cancelación se realiza con menos de 72 horas, se cobrará el 100% del valor reservado.' },
                  { id: 'faq4', question: 'Reprogramación y reembolsos', answer: 'Los servicios pueden reprogramarse sin costo adicional, solicitándolo con un mínimo de 72 horas de anticipación. En caso de modificaciones por parte de la agencia, nos pondremos en contacto para coordinar la alternativa. Los plazos de reembolso pueden variar según el método de pago y las políticas de cada entidad bancaria.' },
                  { id: 'faq5', question: 'Modificaciones en el itinerario', answer: 'Nuestros paseos cuentan con paradas establecidas, sin embargo, el itinerario puede sufrir alteraciones debido a condiciones climáticas, tránsito, eventos en la ciudad, cierres de vías o alta afluencia de público.' }
                ].map((faq) => (
                  <div key={faq.id} className="border border-card-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-background-alt transition-colors"
                    >
                      <span className="font-medium text-foreground pr-4">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-4 pb-4">
                        <p className="text-foreground-muted">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-card rounded-xl p-6 border border-card-border">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Adulto: <span className="text-primary">CLP 68.200</span>
                    </div>
                    <div className="text-lg text-foreground-muted">
                      Niños: <span className="text-primary">CLP 34.100</span>
                    </div>
                    <div className="text-sm text-green-600">
                      Niños menores de 3 años: Gratis
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
                      Hora de Salida
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seleccionar hora</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="09:30">09:30 AM</option>
                      <option value="10:00">10:00 AM</option>
                    </select>
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

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Número de Niños
                    </label>
                    <select
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
                    Reservar Tour Vinícola
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
                    <span className="text-foreground-muted">Duración: 6.5 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Ubicación: Alto Jahuel, Buin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Transporte incluido</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wine className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">6 degustaciones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Almuerzo incluido</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Grape className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Museo Andino</span>
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

export default TourVinaSantaRita;
