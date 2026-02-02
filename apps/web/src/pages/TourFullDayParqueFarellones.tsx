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

const TourFullDayParqueFarellones = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

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
                <div className="text-3xl font-bold text-primary mb-2">CLP 75.000</div>
                <div className="text-foreground-muted">por persona</div>
                <div className="text-sm text-foreground-muted mt-1">Incluye transporte, entrada al parque y almuerzo</div>
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
                    <option value="08:00">08:00 - Salida Estándar</option>
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
