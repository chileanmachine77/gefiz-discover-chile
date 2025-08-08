import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Award, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Tours', href: '#tours' },
    { name: 'Transporte', href: '#transporte' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Tour Valparaíso y Viña', href: '#' },
    { name: 'Ruta del Vino', href: '#' },
    { name: 'Tours de Montaña', href: '#' },
    { name: 'Transporte Corporativo', href: '#' },
    { name: 'Tours Personalizados', href: '#' },
    { name: 'Eventos Especiales', href: '#' }
  ];

  const legal = [
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Política de Cancelación', href: '#' },
    { name: 'Términos de Servicio', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/gefiztravels', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/gefiztravels', name: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/gefiztravels', name: 'YouTube' }
  ];

  return (
    <footer className="bg-background-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Gefiz Travels</h3>
                <p className="text-sm text-white/70">Turismo & Transporte</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Expertos en turismo y transporte de pasajeros en Santiago de Chile. 
              Más de 15 años creando experiencias inolvidables.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">Providencia 123, Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+56212345678" className="text-white/80 hover:text-primary transition-colors">
                  +56 2 1234-5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contacto@gefiztravels.com" className="text-white/80 hover:text-primary transition-colors">
                  contacto@gefiztravels.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal & Certificaciones</h4>
            
            {/* Certifications */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-white/80 font-medium">Certificado SERNATUR</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-white/80 font-medium">Registro Nacional de Turismo</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h5 className="font-medium mb-3">Métodos de Pago</h5>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-2 rounded">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs">Visa</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-2 rounded">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs">MasterCard</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-2 rounded">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs">PayPal</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-2 rounded">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs">Transferencia</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Gefiz Travels. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>RUT: 12.345.678-9</span>
              <span>•</span>
              <span>Registro SERNATUR: GT-001-2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/56987654321"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;