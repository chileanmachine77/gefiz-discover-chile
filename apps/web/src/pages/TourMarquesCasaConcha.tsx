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
  Home
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TourMarquesCasaConcha = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

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

            {/* Highlights */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Lo que Incluye esta Experiencia</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Itinerario Detallado</h2>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-background-alt rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
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

            {/* Services */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Servicios Incluidos</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground-muted">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommendations */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Recomendaciones</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-background-alt rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Camera className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{rec.title}</h3>
                    </div>
                    <p className="text-foreground-muted text-sm">{rec.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">CLP 65.000</div>
                <p className="text-foreground-muted">por persona</p>
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
                    Horario Preferido
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Seleccionar horario</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
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
                    <option value="10">10+ personas</option>
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
