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
  TreePine
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourSkiDayValleNevado = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const tourImages = [
    { src: '/images/tours/ski-day-valle-nevado/valle-nevado-1.jpg', alt: 'Ski Day Valle Nevado - Centro de esquí', title: 'Centro de Esquí' },
    { src: '/images/tours/ski-day-valle-nevado/valle-nevado-2.jpg', alt: 'Ski Day Valle Nevado - Pistas de esquí', title: 'Pistas de Esquí' },
    { src: '/images/tours/ski-day-valle-nevado/valle-nevado-3.jpg', alt: 'Ski Day Valle Nevado - Vista panorámica', title: 'Vista Panorámica' },
    { src: '/images/tours/ski-day-valle-nevado/valle-nevado-4.jpg', alt: 'Ski Day Valle Nevado - Paisaje andino', title: 'Paisaje Andino' },
    { src: '/images/tours/ski-day-valle-nevado/valle-nevado-5.jpg', alt: 'Ski Day Valle Nevado - Instalaciones', title: 'Instalaciones' }
  ];

  const tourDescription = "Descubre Valle Nevado, el centro de esquí más moderno y exclusivo de Chile. Ubicado a 3.025 metros de altura, ofrece las mejores pistas y la nieve de mayor calidad del hemisferio sur. Con instalaciones de clase mundial, pistas para todos los niveles y vistas espectaculares de los Andes, este tour premium incluye todo lo necesario para una experiencia de esquí inolvidable. Perfecto para esquiadores exigentes que buscan la excelencia en deportes de invierno.";

  const tourHighlights = [
    "Valle Nevado, el centro de esquí más moderno de Chile",
    "Equipo de esquí premium incluido (esquís, botas, bastones)",
    "Clases de esquí con instructores certificados internacionalmente",
    "Pistas de clase mundial para todos los niveles",
    "Almuerzo en restaurante con vista panorámica de los Andes",
    "Instalaciones de lujo y servicios premium",
    "Nieve de la mejor calidad del hemisferio sur",
    "Experiencia de esquí de nivel internacional"
  ];

  const itinerary = [
    {
      time: "07:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel y traslado hacia Valle Nevado"
    },
    {
      time: "09:00",
      activity: "Llegada a Valle Nevado",
      description: "Llegada al centro de esquí más moderno de Chile"
    },
    {
      time: "09:30",
      activity: "Entrega de Equipos Premium",
      description: "Entrega de equipos de esquí de última generación"
    },
    {
      time: "10:00",
      activity: "Clases de Esquí Profesionales",
      description: "Clases con instructores certificados internacionalmente"
    },
    {
      time: "12:00",
      activity: "Esquí en Pistas de Clase Mundial",
      description: "Tiempo libre para esquiar en las mejores pistas del hemisferio sur"
    },
    {
      time: "13:00",
      activity: "Almuerzo Premium",
      description: "Almuerzo gourmet con vista panorámica de los Andes"
    },
    {
      time: "14:30",
      activity: "Esquí Libre Avanzado",
      description: "Continuación del esquí en instalaciones de lujo"
    },
    {
      time: "16:30",
      activity: "Regreso a Santiago",
      description: "Devolución de equipos y traslado de vuelta (llegada 19:00)"
    }
  ];

  const includedServices = [
    "Transporte privado de lujo desde y hacia Santiago",
    "Ticket de acceso VIP al centro de esquí Valle Nevado",
    "Equipo premium de esquí (última generación, botas, bastones, casco)",
    "Clases profesionales de esquí con instructores internacionales (2.5 horas)",
    "Almuerzo gourmet en restaurante con vista panorámica",
    "Guía especializado en esquí de alto nivel",
    "Seguro premium de actividades deportivas",
    "Servicio de conserjería y snacks premium durante el tour"
  ];

  const recommendations = [
    {
      title: "Ropa de Esquí Premium",
      description: "Ropa térmica de alta calidad, equipo impermeable profesional"
    },
    {
      title: "Calzado Especializado",
      description: "Zapatos cómodos para alta montaña, botas premium proporcionadas"
    },
    {
      title: "Protección Solar Extrema",
      description: "Bloqueador solar factor 50+, lentes UV - radiación intensa a 3.025m"
    },
    {
      title: "Experiencia de Alto Nivel",
      description: "Ideal para esquiadores exigentes, instalaciones de clase mundial"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, me gustaría reservar el Ski Day Valle Nevado:

*Detalles de la Reserva:*
• Fecha: ${selectedDate}
• Hora: ${selectedTime}
• Número de personas: ${groupSize}

*Tour:* Ski Day Valle Nevado Premium
*Duración:* 8 horas
*Incluye:* Transporte de lujo, equipo premium, clases profesionales, almuerzo gourmet

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
          style={{ backgroundImage: 'url(/images/tours/ski-day-valle-nevado/valle-nevado-2.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Ski Day Valle Nevado
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Experiencia de esquí premium en el centro más moderno de Chile
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>8 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span>2-18 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mountain className="w-5 h-5 text-primary" />
              <span>Valle Nevado 3.025m</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Camera className="w-5 h-5 text-primary" />
              <span>Premium</span>
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

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Itinerario</h2>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-card border border-card-border rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        {item.time}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.activity}</h3>
                      <p className="text-foreground-muted text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Included Services */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Servicios Incluidos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground-muted">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Recomendaciones Generales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-card border border-card-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">{rec.title}</h3>
                    <p className="text-foreground-muted text-sm">{rec.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Tours */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">También te Recomendamos...</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/vina-concha-toro'}>
                  <img src={valparaisoImage} alt="Viña Concha y Toro Diurno" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Viña Concha y Toro - Tour Diurno</h3>
                    <p className="text-foreground-muted text-sm">La experiencia clásica de día en la viña más famosa de Chile</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/vina-santa-rita'}>
                  <img src={valparaisoImage} alt="Viña Santa Rita" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Viña Santa Rita</h3>
                    <p className="text-foreground-muted text-sm">Otra experiencia vinícola premium en el Valle del Maipo</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/ruta-vino-valle-maipo'}>
                  <img src="/images/tours/ruta-vino-valle-maipo/maipo-4.jpg" alt="Ruta del Vino Valle del Maipo" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Ruta del Vino Valle del Maipo</h3>
                    <p className="text-foreground-muted text-sm">Descubre múltiples viñas en el valle más prestigioso</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/vinedo-haras-pirque'}>
                  <img src={valparaisoImage} alt="Viñedo Haras de Pirque" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Viñedo Haras de Pirque</h3>
                    <p className="text-foreground-muted text-sm">Experiencia boutique en viñedo exclusivo</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Policies and Conditions */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Políticas y Condiciones</h2>
              <div className="bg-card border border-card-border rounded-lg p-6">
                <div className="space-y-4 text-foreground-muted">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cancelaciones</h3>
                    <p className="text-sm">Cancelación gratuita hasta 48 horas antes del tour nocturno. Cancelaciones con menos de 48 horas tendrán un cargo del 75%.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condiciones Climáticas</h3>
                    <p className="text-sm">El tour nocturno se realiza solo con buen clima. En caso de lluvia o viento fuerte, se reprogramará sin costo adicional.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Edad Mínima</h3>
                    <p className="text-sm">Solo mayores de 18 años pueden participar en este tour nocturno debido a las degustaciones de alcohol.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cupos Limitados</h3>
                    <p className="text-sm">Tour exclusivo con máximo 20 personas por grupo. Se recomienda reservar con al menos 7 días de anticipación.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Form */}
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">CLP 90.000</div>
                <div className="text-foreground-muted">por persona</div>
                <div className="text-sm text-foreground-muted mt-1">Incluye transporte de lujo, equipo premium y almuerzo gourmet</div>
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
                    <option value="07:00">07:00 - Salida Temprana</option>
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
                  Reservar Valle Nevado
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
                  <span className="text-foreground-muted">Duración: 8 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Valle Nevado 3.025m</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Transporte de lujo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mountain className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Equipo premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Almuerzo gourmet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Experiencia premium</span>
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

export default TourSkiDayValleNevado;
