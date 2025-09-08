import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, Send } from 'lucide-react';

const ToursPrivados = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    nacionalidad: '',
    tour: '',
    numeroPasajeros: '1',
    mensaje: ''
  });

  // All available tours from different categories
  const allTours = [
    // Mountain Tours
    'Cordillera Panorámico',
    'Full Day Parque Farellones',
    'Portillo & Laguna del Inca con Almuerzo',
    'Ski Day El Colorado',
    'Ski Day Farellones',
    'Ski Day Valle Nevado',
    // Santiago Tours
    'City Tour Santiago',
    'Santiago en las Alturas',
    'Tour Zoológico Buin Zoo',
    // Vineyard Tours
    'Isla Negra, Algarrobo y Viñedos',
    'Marques de Casa Concha',
    'Ruta del Vino Valle de Casablanca',
    'Ruta del Vino Valle del Maipo',
    'Viña Cousiño Macul',
    'Viña Santa Rita',
    'Viña Undurraga - Tour Sibaris'
  ];

  const nacionalidades = [
    'Brasil',
    'Chile',
    'Argentina',
    'Estados Unidos',
    'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const webhookUrl = '/api/7r1kkhd7fnc3x4n9bv23fj2caisd2cfz';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Private tour form data sent successfully!');
        alert('¡Gracias por tu cotización! Nos pondremos en contacto contigo pronto con una propuesta personalizada.');
        // Reset form after successful submission
        setFormData({
          nombre: '',
          email: '',
          nacionalidad: '',
          tour: '',
          numeroPasajeros: '1',
          mensaje: ''
        });
      } else {
        console.error('Failed to send private tour form data.');
        alert('Hubo un error al enviar tu cotización. Por favor, inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error sending private tour form data:', error);
      alert('Hubo un error al enviar tu cotización. Por favor, contacta con nosotros directamente.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/tours-privados-hero.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tours Privados
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            ¿Quieres un viaje único? Completa el formulario y cuéntanos qué paseo te interesaría hacer. 
            Indicanos el número de pasajeros y su país de origen para ofrecerte el servicio más adecuado.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            


            {/* Form */}
            <div className="bg-card border border-card-border rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                  COTIZA TU TOUR PRIVADO AQUÍ
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Nationality */}
                <div>
                  <label htmlFor="nacionalidad" className="block text-sm font-medium text-foreground mb-2">
                    Nacionalidad *
                  </label>
                  <select
                    id="nacionalidad"
                    name="nacionalidad"
                    value={formData.nacionalidad}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecciona tu nacionalidad</option>
                    {nacionalidades.map((nacionalidad) => (
                      <option key={nacionalidad} value={nacionalidad}>
                        {nacionalidad}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tour and Passengers Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tour" className="block text-sm font-medium text-foreground mb-2">
                      Tour *
                    </label>
                    <select
                      id="tour"
                      name="tour"
                      value={formData.tour}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecciona un tour</option>
                      {allTours.map((tour) => (
                        <option key={tour} value={tour}>
                          {tour}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="numeroPasajeros" className="block text-sm font-medium text-foreground mb-2">
                      Número de pasajeros *
                    </label>
                    <select
                      id="numeroPasajeros"
                      name="numeroPasajeros"
                      value={formData.numeroPasajeros}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? 'pasajero' : 'pasajeros'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Cuéntanos detalles adicionales sobre tu tour ideal, fechas preferidas, intereses especiales, etc."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 mx-auto"
                  >
                    <Send className="w-5 h-5" />
                    <span>ENVIAR</span>
                  </Button>
                </div>

                <p className="text-sm text-foreground-muted text-center mt-4">
                  * Campos obligatorios. Respetamos tu privacidad y no compartimos tu información.
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Tours Personalizados</h3>
                <p className="text-foreground-muted">
                  Creamos experiencias únicas adaptadas a tus intereses y necesidades específicas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Destinos Exclusivos</h3>
                <p className="text-foreground-muted">
                  Acceso a lugares únicos y experiencias que no encontrarás en tours regulares.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Flexibilidad Total</h3>
                <p className="text-foreground-muted">
                  Horarios y fechas completamente adaptables a tu agenda y preferencias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToursPrivados;
