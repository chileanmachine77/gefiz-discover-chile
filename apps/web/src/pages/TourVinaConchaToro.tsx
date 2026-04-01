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
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourVinaConchaToro = () => {
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
    { src: '/images/tours/vina-concha-toro/concha-toro-1.jpg', alt: 'Viña Concha y Toro - Entrada principal', title: 'Entrada Principal' },
    { src: '/images/tours/vina-concha-toro/concha-toro-2.jpg', alt: 'Viña Concha y Toro - Viñedos históricos', title: 'Viñedos Históricos' },
    { src: '/images/tours/vina-concha-toro/concha-toro-3.jpg', alt: 'Viña Concha y Toro - Bodegas subterráneas', title: 'Bodegas Subterráneas' },
    { src: '/images/tours/vina-concha-toro/concha-toro-4.jpg', alt: 'Viña Concha y Toro - Casillero del Diablo', title: 'Casillero del Diablo' },
    { src: '/images/tours/vina-concha-toro/concha-toro-5.jpg', alt: 'Viña Concha y Toro - Degustación de vinos', title: 'Degustación de Vinos' }
  ];

  const tourDescription = "Fundada en 1883 por Melchor Concha y Toro, esta viña es una de las más grandes y reconocidas de Chile. Ubicada en Pirque, a 45 minutos de Santiago, ofrece una experiencia única donde podrás conocer la historia, tradición y pasión por el vino que ha caracterizado a esta familia por más de 130 años. El tour incluye recorrido por viñedos, bodegas históricas, degustación de vinos premium y la famosa visita al Casillero del Diablo, lugar que dio origen a una de las leyendas más conocidas del mundo del vino chileno.";

  const tourHighlights = [
    "Recorrido por viñedos históricos de más de 130 años",
    "Visita a bodegas subterráneas tradicionales",
    "Degustación de 4 vinos premium de la casa",
    "Conoce la leyenda del Casillero del Diablo",
    "Cata dirigida por sommelier profesional",
    "Transporte ida y vuelta desde Santiago",
    "Guía especializado en historia del vino",
    "Tiempo libre para compras en tienda oficial"
  ];

  const itinerary = [
    {
      time: "09:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hoteles del sector oriente y centro de Santiago"
    },
    {
      time: "09:45",
      activity: "Llegada a Viña Concha y Toro",
      description: "Bienvenida y presentación de la historia familiar"
    },
    {
      time: "10:00",
      activity: "Recorrido por los Jardines",
      description: "Caminata por los jardines históricos y casa patronal"
    },
    {
      time: "10:30",
      activity: "Visita a los Viñedos",
      description: "Recorrido por viñedos centenarios y explicación del terroir"
    },
    {
      time: "11:15",
      activity: "Bodegas Subterráneas",
      description: "Visita a las bodegas históricas y proceso de vinificación"
    },
    {
      time: "12:00",
      activity: "Casillero del Diablo",
      description: "Conoce la famosa leyenda y degustación en la bodega mítica"
    },
    {
      time: "12:30",
      activity: "Cata de Vinos",
      description: "Degustación de 4 vinos premium con sommelier experto"
    },
    {
      time: "13:15",
      activity: "Tiempo Libre y Compras",
      description: "Visita a la tienda oficial y tiempo para compras"
    },
    {
      time: "13:45",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 14:30"
    }
  ];

  const includedServices = [
    "Transporte ida y vuelta desde Santiago",
    "Guía turístico especializado",
    "Entrada a Viña Concha y Toro",
    "Recorrido por jardines y casa patronal",
    "Visita a viñedos históricos",
    "Tour por bodegas subterráneas",
    "Visita al famoso Casillero del Diablo",
    "Degustación de 4 vinos premium",
    "Cata dirigida por sommelier",
    "Seguro de accidentes personales"
  ];

  const recommendations = [
    {
      title: "Ropa Cómoda",
      description: "Usar zapatos cómodos para caminar por viñedos y bodegas"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador solar, sombrero y lentes de sol"
    },
    {
      title: "Cámara Fotográfica",
      description: "Permitido tomar fotos en jardines y viñedos"
    },
    {
      title: "Edad Mínima",
      description: "Menores de 18 años no pueden participar en degustaciones"
    },
    {
      title: "Documentos",
      description: "Llevar cédula de identidad o pasaporte"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/vina-concha-toro/concha-toro-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viña Concha y Toro
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Descubre la viña más famosa de Chile con una experiencia única de degustación
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>6.5 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4" />
              <span>2-25 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Wine className="w-4 h-4" />
              <span>Degustación Premium</span>
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

            {/* 🎟️ Valores */}
            <section className="bg-card border border-card-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">🎟️ Valores</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium text-foreground">Adulto</span>
                  <span className="text-xl font-bold text-primary">CLP 80.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium text-foreground">Niños</span>
                  <span className="text-xl font-bold text-primary">CLP 40.000</span>
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
                    <p className="text-foreground-muted">A partir de las 13:00 hrs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Duración</h3>
                    <p className="text-foreground-muted">Tour de 6 horas aprox. (desde la salida del hotel hasta su regreso)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Operación</h3>
                    <p className="text-foreground-muted">Todos los días</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Mínimo de pasajeros</h3>
                    <p className="text-foreground-muted">2 pasajeros</p>
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
                  <span className="text-foreground-muted">Traslado desde / hacia hoteles ubicados en Santiago Centro y Providencia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Seguro Transporte de Pasajeros (incluye cobertura de COVID-19)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Guía Bilingüe (tour en portugués o español)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Degustación de vinos y Copa de Regalo</span>
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Booking Form */}
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Adulto: <span className="text-primary">CLP 80.000</span>
                    </div>
                    <div className="text-lg text-foreground-muted">
                      Niños: <span className="text-primary">CLP 40.000</span>
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
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Hora de Inicio
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seleccionar hora</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                    </select>
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
                    Reservar Tour Cultural
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
                    <span className="text-foreground-muted">Ubicación: Pirque, Santiago</span>
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
                    <span className="text-foreground-muted">Viñedos históricos</span>
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

export default TourVinaConchaToro;
