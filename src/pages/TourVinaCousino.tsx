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
import vineyardImage from '@/assets/vineyard.jpg';

const TourVinaCousino = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const tourImages = [
    { src: '/images/tours/vina-cousino-macul/cousino-macul-1.jpg', alt: 'Viña Cousiño Macul - Vista principal', title: 'Vista Principal' },
    { src: '/images/tours/vina-cousino-macul/cousino-macul-2.jpg', alt: 'Viña Cousiño Macul - Viñedos históricos', title: 'Viñedos Históricos' },
    { src: '/images/tours/vina-cousino-macul/cousino-macul-3.jpg', alt: 'Viña Cousiño Macul - Casa patronal', title: 'Casa Patronal' }
  ];

  const tourHighlights = [
    "Visita a la histórica Viña Cousiño Macul, fundada en 1856",
    "Recorrido por viñedos familiares y bodegas centenarias",
    "Degustación de vinos premium y línea Antiguas Reservas",
    "Visita a la casa patronal y jardines históricos",
    "Cata dirigida por enólogo de la familia",
    "Almuerzo tradicional chileno maridado",
    "Transporte desde Santiago incluido",
    "Historia de 6 generaciones de tradición vinícola"
  ];

  const itinerary = [
    {
      time: "09:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel y traslado hacia Viña Cousiño Macul en Macul"
    },
    {
      time: "09:20",
      activity: "Llegada a la Viña",
      description: "Bienvenida y introducción a la historia familiar de 6 generaciones"
    },
    {
      time: "09:30",
      activity: "Recorrido por Viñedos",
      description: "Caminata por los viñedos urbanos únicos en Santiago"
    },
    {
      time: "10:30",
      activity: "Visita a Bodegas",
      description: "Recorrido por las bodegas históricas y proceso tradicional"
    },
    {
      time: "11:30",
      activity: "Casa Patronal",
      description: "Visita a la casa familiar y jardines patrimoniales"
    },
    {
      time: "12:30",
      activity: "Almuerzo Tradicional",
      description: "Almuerzo chileno tradicional con maridaje"
    },
    {
      time: "14:00",
      activity: "Cata Familiar",
      description: "Degustación de vinos con enólogo de la familia"
    },
    {
      time: "15:00",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 15:30"
    }
  ];

  const includedServices = [
    "Transporte ida y vuelta desde Santiago",
    "Guía especializado en historia familiar",
    "Recorrido completo por viñedos urbanos",
    "Degustación de 5 vinos diferentes",
    "Almuerzo tradicional chileno con maridaje",
    "Visita a casa patronal histórica",
    "Cata dirigida por enólogo familiar",
    "Seguro de viaje incluido"
  ];

  const recommendations = [
    {
      title: "Ropa Cómoda",
      description: "Usar zapatos cómodos para caminar por los viñedos urbanos"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador solar y sombrero para el recorrido al aire libre"
    },
    {
      title: "Cámara Fotográfica",
      description: "La casa patronal y jardines ofrecen excelentes oportunidades fotográficas"
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
          style={{ backgroundImage: 'url(/images/tours/vina-cousino-macul/cousino-macul-2.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viña Cousiño Macul
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Descubre 6 generaciones de tradición vinícola en el corazón de Santiago
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>6 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>Macul, Santiago</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4" />
              <span>2-20 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4" />
              <span>4.9/5 estrellas</span>
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
            
            {/* Tour Highlights */}
            <section className="bg-card rounded-xl p-6 border border-card-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Wine className="w-6 h-6 text-primary mr-3" />
                Destacados del Tour
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-card rounded-xl p-6 border border-card-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-primary mr-3" />
                Itinerario Detallado
              </h2>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex space-x-4 pb-4 border-b border-card-border last:border-b-0 last:pb-0">
                    <div className="flex-shrink-0 w-16 text-primary font-semibold text-sm">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{item.activity}</h3>
                      <p className="text-foreground-muted text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Included Services */}
            <section className="bg-card rounded-xl p-6 border border-card-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Check className="w-6 h-6 text-primary mr-3" />
                Servicios Incluidos
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-card rounded-xl p-6 border border-card-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Camera className="w-6 h-6 text-primary mr-3" />
                Recomendaciones
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-foreground">{rec.title}</h3>
                    <p className="text-foreground-muted text-sm">{rec.description}</p>
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
                  <div className="text-3xl font-bold text-foreground mb-2">
                    Desde $79.000
                  </div>
                  <div className="text-foreground-muted text-sm">por persona</div>
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
                    <span className="text-foreground-muted">Duración: 6 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Ubicación: Macul, Santiago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Transporte incluido</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wine className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">5 degustaciones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Almuerzo incluido</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Grape className="w-4 h-4 text-primary" />
                    <span className="text-foreground-muted">Viñedos urbanos</span>
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

export default TourVinaCousino;
