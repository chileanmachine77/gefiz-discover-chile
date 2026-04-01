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
import valparaisoImage from '@/assets/valparaiso.jpg';

const TourVinaValparaiso = () => {
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
    { src: '/images/tours/vina-del-mar-valparaiso/vina-valpo-1.jpg', alt: 'Viña del Mar y Valparaíso - Vista panorámica', title: 'Vista Panorámica' },
    { src: '/images/tours/vina-del-mar-valparaiso/vina-valpo-2.jpg', alt: 'Viña del Mar y Valparaíso - Casas coloridas', title: 'Casas Coloridas' },
    { src: '/images/tours/vina-del-mar-valparaiso/vina-valpo-3.jpg', alt: 'Viña del Mar y Valparaíso - Ascensores', title: 'Ascensores Patrim.' },
    { src: '/images/tours/vina-del-mar-valparaiso/vina-valpo-4.jpg', alt: 'Viña del Mar y Valparaíso - Costa', title: 'Costa del Pacífico' },
    { src: '/images/tours/vina-del-mar-valparaiso/vina-valpo-5.jpg', alt: 'Viña del Mar y Valparaíso - Ciudad jardín', title: 'Ciudad Jardín' }
  ];

  const tourDescription = "Descubre la magia de la costa central chilena en un tour completo por Viña del Mar y Valparaíso. Recorre el histórico puerto de Valparaíso con sus coloridas casas, ascensores patrimoniales y arte callejero único. Disfruta de la elegante Viña del Mar, conocida como la 'Ciudad Jardín', con sus hermosas playas, jardines y arquitectura. Una experiencia perfecta que combina historia, cultura, arte y paisajes costeros espectaculares en un solo día inolvidable.";

  const tourHighlights = [
    "Recorrido por el casco histórico de Valparaíso",
    "Visita a los famosos ascensores patrimoniales",
    "Tour por las coloridas casas de los cerros",
    "Paseo por Viña del Mar, la 'Ciudad Jardín'",
    "Tiempo libre en la playa de Reñaca",
    "Almuerzo típico incluido con vista al mar",
    "Guía turístico especializado en historia local",
    "Transporte cómodo y seguro desde Santiago"
  ];

  const itinerary = [
    {
      time: "08:00",
      activity: "Salida desde Santiago",
      description: "Recogida en hotel y traslado hacia la costa"
    },
    {
      time: "10:30",
      activity: "Llegada a Valparaíso",
      description: "Inicio del tour por el puerto principal de Chile"
    },
    {
      time: "12:00",
      activity: "Ascensores y Cerros",
      description: "Recorrido por los cerros Alegre y Concepción"
    },
    {
      time: "14:00",
      activity: "Almuerzo",
      description: "Comida típica chilena con vista al mar"
    },
    {
      time: "15:30",
      activity: "Viña del Mar",
      description: "Ciudad jardín y sus principales atractivos"
    },
    {
      time: "17:00",
      activity: "Tiempo libre",
      description: "Playa de Reñaca y compras"
    },
    {
      time: "18:30",
      activity: "Regreso a Santiago",
      description: "Traslado de vuelta con llegada aproximada a las 21:00"
    }
  ];

  const includedServices = [
    "Transporte ida y vuelta desde Santiago",
    "Guía turístico profesional",
    "Almuerzo típico chileno",
    "Entradas a ascensores patrimoniales",
    "Seguro de viaje",
    "Agua mineral durante el recorrido"
  ];

  const recommendations = [
    {
      title: "Ropa Cómoda",
      description: "Usar calzado cómodo para caminar y ropa abrigada"
    },
    {
      title: "Cámara Fotográfica",
      description: "No olvides tu cámara para capturar los hermosos paisajes"
    },
    {
      title: "Protección Solar",
      description: "Bloqueador solar y lentes de sol recomendados"
    },
    {
      title: "Documentos",
      description: "Llevar cédula de identidad o pasaporte"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, me gustaría reservar el Tour Costa Central:

*Detalles de la Reserva:*
• Fecha: ${selectedDate}
• Hora: ${selectedTime}
• Número de personas: ${groupSize}

*Tour:* Viña del Mar y Valparaíso
*Duración:* 10 horas
*Incluye:* Almuerzo, entradas a ascensores, transporte

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
          style={{ backgroundImage: 'url(/images/tours/vina-del-mar-valparaiso/vina-valpo-4.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
            Viña del Mar & Valparaíso
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto text-balance">
            Descubre la magia del puerto principal y la ciudad jardín de Chile
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>10 horas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span>4-12 personas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Costa Central</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Camera className="w-5 h-5 text-primary" />
              <span>Almuerzo Incluido</span>
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
                  <span className="text-xl font-bold text-primary">CLP 44.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium text-foreground">Niños</span>
                  <span className="text-xl font-bold text-primary">CLP 22.000</span>
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
                    <p className="text-foreground-muted">A partir de las 07:40 hrs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Duración</h3>
                    <p className="text-foreground-muted">Tour de 8 a 9 horas aprox. (desde la salida del hotel hasta su regreso)</p>
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
                  <span className="text-foreground-muted">Guía Bilingüe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Parada en Reloj de Flores</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Parada en el Moai del Museo Fonck</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-foreground-muted">Parada en playa de Viña del Mar (20 minutos aprox.)</span>
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
                  { id: 'faq1', question: '¿En qué zona están ubicados para poder pasar a buscarlos?', answer: 'Estamos ubicados en Santiago Centro y Providencia. El traslado incluye recogida y regreso a hoteles en estas zonas.' },
                  { id: 'faq2', question: '¿Cómo sabré si los servicios están confirmados?', answer: 'Una vez que realices tu reserva, recibirás una confirmación por correo electrónico o WhatsApp con todos los detalles del tour.' },
                  { id: 'faq3', question: '¿Puedo cancelar o reprogramar mi tour?', answer: 'Sí, puedes cancelar o reprogramar tu tour. Te recomendamos hacerlo con al menos 24 horas de anticipación para evitar cargos.' },
                  { id: 'faq4', question: '¿Qué pasa si llueve o hay mal clima?', answer: 'El tour se realiza con lluvia o sol. En caso de condiciones climáticas extremas que impidan el tour, se reprogramará sin costo adicional.' },
                  { id: 'faq5', question: '¿El tour incluye almuerzo?', answer: 'No, el almuerzo no está incluido en el valor del tour. Sin embargo, habrá tiempo disponible para comprar comida durante el recorrido.' }
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
            {/* Booking Form */}
            <div className="bg-card border border-card-border rounded-xl p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">🎟️ Valores:</div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-foreground">
                    Adulto: <span className="text-primary">CLP 44.000</span>
                  </div>
                  <div className="text-lg text-foreground-muted">
                    Niños: <span className="text-primary">CLP 22.000</span>
                  </div>
                  <div className="text-sm text-green-600">
                    Niños menores de 3 años: Gratis
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
                  Reservar Tour Costa Central
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
                  <span className="text-foreground-muted">Ubicación: Pirque, Santiago</span>
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
                  <span className="text-foreground-muted">Cena incluida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Moon className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Experiencia nocturna</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-foreground-muted">Solo +18 años</span>
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

export default TourVinaValparaiso;
