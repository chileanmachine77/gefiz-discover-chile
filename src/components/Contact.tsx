import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import InteractiveMap from './InteractiveMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const webhookUrl = '/api/15qa9qkou77m13dyyu64st5z8mqezaip';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully!');
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        console.error('Failed to send form data.');
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      alert('Hubo un error al enviar tu mensaje. Por favor, contacta con nosotros directamente.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+56966435647",
      link: "tel:+56966435647",
      description: "Lunes a Viernes 8:00 - 20:00"
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      info: "gefiz.spa@gmail.com",
      link: "mailto:gefiz.spa@gmail.com",
      description: "Respuesta en 24 horas"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Av. Armando Cortínez Ote. 1704, Pudahuel, Región Metropolitana",
      link: "#",
      description: "Región Metropolitana, Chile"
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Vie: 8:00 - 20:00",
      link: "#",
      description: "Sáb: 9:00 - 17:00 | Dom: Cerrado"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            ¿Listo para tu próxima aventura? Contáctanos para reservar tu tour o solicitar 
            una cotización personalizada para tu grupo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <p className="text-foreground-muted mb-8 leading-relaxed">
                Nuestro equipo está disponible para ayudarte a planificar la experiencia 
                perfecta. Ya sea un tour individual o transporte para grupos grandes, 
                estamos aquí para hacer realidad tu viaje soñado.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="bg-card border border-card-border rounded-xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-primary font-medium mb-1">{item.info}</p>
                      <p className="text-sm text-foreground-muted">{item.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 mb-1">WhatsApp</h4>
                  <p className="text-green-700 mb-2">+56966435647</p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Chatear en WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-card border border-card-border rounded-xl overflow-hidden">
              <div className="p-4 border-b border-card-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-2" />
                      Nuestra Ubicación
                    </h4>
                    <p className="text-sm text-foreground-muted mt-1">
                      Av. Armando Cortínez Ote. 1704, Pudahuel, Región Metropolitana
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=-33.3969306,-70.7936148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Ver en Google Maps</span>
                  </a>
                </div>
              </div>
              <InteractiveMap />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-card-border rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Solicita tu Cotización
              </h3>
              <p className="text-foreground-muted">
                Completa el formulario y te contactaremos dentro de las próximas 24 horas 
                con una propuesta personalizada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="gefiz.spa@gmail.com"
                  />
                </div>
              </div>

              {/* Phone and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+56966435647"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Servicio de Interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="tour-valparaiso">Tour Valparaíso y Viña</option>
                    <option value="tour-vinos">Ruta del Vino</option>
                    <option value="tour-montana">Tour de Montaña</option>
                    <option value="transporte">Transporte Privado</option>
                    <option value="personalizado">Tour Personalizado</option>
                    <option value="corporativo">Evento Corporativo</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-card-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Cuéntanos sobre tu viaje ideal, fechas, número de personas, intereses especiales..."
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Consulta</span>
              </Button>

              <p className="text-sm text-foreground-muted text-center">
                * Campos obligatorios. Respetamos tu privacidad y no compartimos tu información.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;