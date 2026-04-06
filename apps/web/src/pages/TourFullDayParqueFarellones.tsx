import { useState, useEffect } from 'react';
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

const TourFullDayParqueFarellones = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Meta Pixel Code
  useEffect(() => {
    // Inject Meta Pixel script
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '919390654295619');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Inject noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=919390654295619&ev=PageView&noscript=1';
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, []);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const tourImages = [
    { src: '/images/tours/full-day-parque-farellones/farellones-1.jpg', alt: 'Full Day Parque Farellones - Actividades', title: 'Actividades de Montaña' },
    { src: '/images/tours/full-day-parque-farellones/farellones-2.jpg', alt: 'Full Day Parque Farellones - Parque aventura', title: 'Parque de Aventura' },
    { src: '/images/tours/full-day-parque-farellones/farellones-3.jpg', alt: 'Full Day Parque Farellones - Paisaje invernal', title: 'Paisaje Invernal' },
    { src: '/images/tours/full-day-parque-farellones/farellones-4.jpg', alt: 'Full Day Parque Farellones - Vista panorámica', title: 'Vista Panorámica' }
  ];

  const tourDescription = "Disfruta de un día completo de aventura en el Parque Farellones, el destino de montaña más emocionante cerca de Santiago. Experimenta actividades únicas como canopy, tubbing en la nieve, y diversas atracciones de montaña en un entorno natural espectacular. Con paisajes andinos impresionantes y actividades para toda la familia, este tour ofrece una experiencia inolvidable en la cordillera. Perfecto para aventureros, familias y amantes de los deportes de montaña.";

  const tourHighlights = [
    "Actividades de aventura en el Parque Farellones",
    "Canopy y tirolesa con vistas espectaculares",
    "Tubbing en la nieve (temporada invernal)",
    "Parque de diversiones de montaña",
    "Paisajes andinos y vistas panorámicas",
    "Actividades para toda la familia",
    "Almuerzo en restaurante de montaña",
    "Guía especializado en turismo de aventura"
  ];

  const itinerary = [
    {
      time: "08:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel y traslado hacia Farellones"
    },
    {
      time: "09:30",
      activity: "Llegada a Farellones",
      description: "Llegada al Parque Farellones y bienvenida"
    },
    {
      time: "10:00",
      activity: "Actividades de Aventura",
      description: "Canopy, tirolesa y actividades del parque de aventura"
    },
    {
      time: "12:00",
      activity: "Tubbing en la Nieve",
      description: "Diversión deslizándose en tubos por la nieve (temporada invernal)"
    },
    {
      time: "13:00",
      activity: "Almuerzo en Montaña",
      description: "Almuerzo en restaurante con vista panorámica"
    },
    {
      time: "14:30",
      activity: "Actividades Libres",
      description: "Tiempo libre para disfrutar de más atracciones del parque"
    },
    {
      time: "16:00",
      activity: "Mirador Panorámico",
      description: "Visita al mirador con vistas espectaculares de Santiago"
    },
    {
      time: "17:00",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 18:30"
    }
  ];

  const includedServices = [
    "Transporte privado durante todo el recorrido",
    "Guía turístico especializado en turismo de aventura",
    "Entrada al Parque Farellones",
    "Acceso a actividades de canopy y tirolesa",
    "Tubbing en la nieve (temporada invernal)",
    "Almuerzo en restaurante de montaña",
    "Seguro de actividades de aventura",
    "Agua mineral durante el tour"
  ];

  const recommendations = [
    {
      title: "Ropa Deportiva",
      description: "Ropa cómoda y abrigada para actividades de aventura"
    },
    {
      title: "Calzado Deportivo",
      description: "Zapatillas deportivas con buen agarre para actividades"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador solar, lentes y gorro - la radiación es intensa en montaña"
    },
    {
      title: "Edad Mínima",
      description: "Algunas actividades tienen restricciones de edad, consultar previamente"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, me gustaría reservar el Full Day Parque Farellones:

*Detalles de la Reserva:*
• Fecha: ${selectedDate}
• Hora: ${selectedTime}
• Número de personas: ${groupSize}

*Tour:* Full Day Parque Farellones
*Duración:* 10.5 horas
*Incluye:* Transporte, entrada al parque, actividades de aventura, almuerzo

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
          style={{ backgroundImage: 'url(/images/tours/full-day-parque-farellones/farellones-4.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Full Day Parque Farellones
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Aventura completa en el parque de montaña más emocionante
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>10.5 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span>4-20 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mountain className="w-5 h-5 text-primary" />
              <span>Parque Farellones</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Camera className="w-5 h-5 text-primary" />
              <span>Aventura Familiar</span>
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

            {/* Tour Information */}
            <section className="mb-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-foreground">
                    Adulto: <span className="text-primary">CLP 99.000</span>
                  </div>
                  <div className="text-lg text-foreground-muted">
                    Niños: <span className="text-primary">CLP 60.000</span>
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
                      <p className="text-foreground-muted">A partir desde las 06:00 hrs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Horario de Retorno</h3>
                      <p className="text-foreground-muted">15:30 hrs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Operación</h3>
                      <p className="text-foreground-muted">Lunes a viernes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">⛅</span>
                    <div>
                      <p className="text-foreground-muted">Todas las actividades del Parque Farellones están sujetas a Condiciones climáticas y disponibilidad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6 space-y-4 mb-6">
                <div className="text-xl font-bold text-foreground mb-4">👍 Incluye:</div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Traslado de ida y vuelta desde hotel</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Parada en tienda para alquiler de ropa para nieve</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Seguro Transporte de Pasajeros</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Entrada Parque Farellones</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">Actividades: Tubing, Canopy, Silla Panorámica, Trineos, Mini Parque</span>
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
                    <span className="text-foreground-muted">Ropa para nieve</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">❌</span>
                    <span className="text-foreground-muted">Propina opcionales</span>
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
                    <p className="text-foreground-muted">Lleva efectivo para lockers o comida</p>
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
            {/* Booking Form */}
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-foreground">
                    Adulto: <span className="text-primary">CLP 99.000</span>
                  </div>
                  <div className="text-lg text-foreground-muted">
                    Niños: <span className="text-primary">CLP 60.000</span>
                  </div>
                </div>
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
                    Número de Niños (3-12 años)
                  </label>
                  <select
                    id="children"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
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
                  Reservar Full Day Farellones
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
                  <span className="text-foreground-muted">Duración: 10.5 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Parque Farellones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Transporte incluido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mountain className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Actividades aventura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Almuerzo incluido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Para toda la familia</span>
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

export default TourFullDayParqueFarellones;
