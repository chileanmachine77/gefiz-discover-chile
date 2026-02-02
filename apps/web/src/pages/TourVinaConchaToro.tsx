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
  TreePine
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourVinaConchaToro = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

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

            {/* Tour Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Lo que incluye</h2>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Servicios incluidos</h2>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Recomendaciones generales</h2>
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
                     onClick={() => window.location.href = '/tour/city-tour-santiago'}>
                  <img src={valparaisoImage} alt="City Tour Santiago" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">City Tour Santiago</h3>
                    <p className="text-foreground-muted text-sm">Descubre los principales atractivos de la capital chilena</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/vina-santa-rita'}>
                  <img src={valparaisoImage} alt="Viña Santa Rita" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Viña Santa Rita</h3>
                    <p className="text-foreground-muted text-sm">Otra experiencia vinícola imperdible en el Valle del Maipo</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/valparaiso-vina-vinedo'}>
                  <img src="/images/tours/valparaiso-vina-vinedo/valparaiso-2.jpg" alt="Valparaíso y Viñedo" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Valparaíso, Viña del Mar y Viñedo</h3>
                    <p className="text-foreground-muted text-sm">Combina costa y vinos en una experiencia única</p>
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => window.location.href = '/tour/isla-negra-algarrobo-vinedos'}>
                  <img src="/images/tours/isla-negra-algarrobo/isla3-1.jpg" alt="Isla Negra y Viñedos" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Isla Negra, Algarrobo y Viñedos</h3>
                    <p className="text-foreground-muted text-sm">Visita la casa de Pablo Neruda y disfruta de vinos costeros</p>
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
                    <p className="text-sm">Cancelación gratuita hasta 24 horas antes del tour. Cancelaciones con menos de 24 horas tendrán un cargo del 50%.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condiciones Climáticas</h3>
                    <p className="text-sm">El tour se realiza con lluvia o sol. En caso de condiciones climáticas extremas, se reprogramará sin costo adicional.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Edad Mínima</h3>
                    <p className="text-sm">Menores de 18 años pueden participar del tour pero no de las degustaciones de vino.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tour Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Lo que Incluye</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background-alt rounded-lg">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Itinerario Detallado</h2>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4 p-6 bg-background-alt rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.activity}</h3>
                      <p className="text-foreground-muted leading-relaxed">{item.description}</p>
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
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background-alt rounded-lg">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground-muted">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Recomendaciones</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-6 bg-background-alt rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{rec.title}</h3>
                    <p className="text-foreground-muted leading-relaxed">{rec.description}</p>
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
                  <div className="text-3xl font-bold text-primary">CLP 45.000</div>
                  <div className="text-foreground-muted">por persona</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                    <span className="text-sm text-foreground-muted">(156 reseñas)</span>
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
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Número de Personas
                    </label>
                    <select
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seleccionar cantidad</option>
                      <option value="2">2 personas</option>
                      <option value="4">4 personas</option>
                      <option value="6">6 personas</option>
                      <option value="8">8 personas</option>
                      <option value="10">10 personas</option>
                      <option value="15">15 personas</option>
                      <option value="20">20 personas</option>
                      <option value="10">10+ personas</option>
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
