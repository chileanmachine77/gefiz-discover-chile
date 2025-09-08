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
  Waves
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourVinaDelMarCasablanca = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const tourImages = [
    {
      src: '/images/tours/ruta-vino-valle-casablanca/casablanca-1.jpg',
      alt: 'Viñedos del Valle de Casablanca',
      title: 'Viñedos Costeros'
    },
    {
      src: '/images/tours/ruta-vino-valle-casablanca/casablanca-2.jpg',
      alt: 'Viñedo y casona del Valle de Casablanca',
      title: 'Casona y Viñedos'
    },
    {
      src: '/images/tours/ruta-vino-valle-casablanca/casablanca-3.jpg',
      alt: 'Paisajes de viñedos en Casablanca',
      title: 'Paisajes del Valle'
    }
  ];

  const tourHighlights = [
    "Tour desde Viña del Mar hacia el Valle de Casablanca",
    "Visita a viñedos costeros con influencia marítima",
    "Degustación de vinos blancos y tintos frescos",
    "Paisajes únicos entre mar y montaña",
    "Almuerzo con vista panorámica al valle",
    "Recorrido por viñedos boutique familiares",
    "Experiencia de terroir costero único",
    "Transporte desde Viña del Mar incluido"
  ];

  const itinerary = [
    {
      time: "09:00",
      activity: "Salida desde Viña del Mar",
      description: "Recogida y traslado hacia Valle de Casablanca"
    },
    {
      time: "09:45",
      activity: "Llegada al Valle",
      description: "Bienvenida y panorámica del valle costero"
    },
    {
      time: "10:15",
      activity: "Primera Viña Boutique",
      description: "Recorrido por viñedos con influencia marítima"
    },
    {
      time: "11:30",
      activity: "Degustación Costera",
      description: "Cata de vinos blancos característicos del valle"
    },
    {
      time: "12:30",
      activity: "Segunda Viña Familiar",
      description: "Visita a bodega familiar tradicional"
    },
    {
      time: "13:30",
      activity: "Almuerzo Panorámico",
      description: "Almuerzo con vista al valle y maridaje"
    },
    {
      time: "15:00",
      activity: "Cata Final",
      description: "Degustación de vinos tintos y rosados"
    },
    {
      time: "16:00",
      activity: "Regreso a Viña del Mar",
      description: "Traslado de vuelta con llegada a las 17:00"
    }
  ];

  const includedServices = [
    "Transporte ida y vuelta desde Viña del Mar",
    "Guía especializado en viticultura costera",
    "Visita a 2 viñas boutique del valle",
    "Degustación de 6 vinos diferentes",
    "Almuerzo con vista panorámica y maridaje",
    "Recorrido por viñedos costeros",
    "Material educativo sobre terroir costero",
    "Seguro de viaje incluido"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tours/ruta-vino-valle-casablanca/casablanca-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viña del Mar - Valle de Casablanca
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Descubre el terroir costero único entre mar y montaña
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>8 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4" />
              <span>2-16 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Waves className="w-4 h-4" />
              <span>Terroir Costero</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Sobre este Tour</h2>
              
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
                <p className="text-lg leading-relaxed mb-4">
                  El Valle de Casablanca representa uno de los terroirs más únicos de Chile, donde 
                  la influencia marítima del Océano Pacífico crea condiciones ideales para la 
                  producción de vinos blancos excepcionales y tintos frescos. Este tour desde 
                  Viña del Mar te lleva a descubrir este valle costero extraordinario.
                </p>
                <p className="leading-relaxed mb-4">
                  La proximidad al mar genera nieblas matutinas y brisas frescas que moderan las 
                  temperaturas, creando un microclima perfecto para variedades como Sauvignon Blanc, 
                  Chardonnay y Pinot Noir. Este tour te permite experimentar cómo el terroir 
                  costero influye directamente en el carácter de los vinos.
                </p>
                <p className="leading-relaxed">
                  Durante esta experiencia visitarás viñas boutique familiares que han sabido 
                  aprovechar estas condiciones únicas para crear vinos de carácter distintivo 
                  y reconocimiento internacional.
                </p>
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

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Booking Form */}
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">CLP 95.000</div>
                  <div className="text-foreground-muted">por persona</div>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.5</span>
                    <span className="text-sm text-foreground-muted">(98 reseñas)</span>
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
                      <option value="12">12 personas</option>
                      <option value="16">16 personas</option>
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
                    <span className="text-foreground-muted">Duración: 8 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Valle de Casablanca</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Desde Viña del Mar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wine className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">6 degustaciones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Almuerzo panorámico</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Waves className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Influencia marítima</span>
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

export default TourVinaDelMarCasablanca;
