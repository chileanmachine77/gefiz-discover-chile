import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Award, CreditCard } from 'lucide-react';
import GefizLogo from '@/components/ui/GefizLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Tours', href: '/todos-los-tours' },
    { name: 'Transporte', href: '/traslados' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Tour Valparaíso y Viña', href: '/costa-central' },
    { name: 'Ruta del Vino', href: '/vinedos' },
    { name: 'Tours de Montaña', href: '/cordillera-andes' },
    { name: 'Transporte Corporativo', href: '/traslados' },
    { name: 'Tours Personalizados', href: '/tours-privados' },
    { name: 'Eventos Especiales', href: '/#contacto' }
  ];

  const legal = [
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Política de Cancelación', href: '#' },
    { name: 'Términos de Servicio', href: '#' }
  ];



  return (
    <footer className="bg-background-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <GefizLogo size={64} className="flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Gefiz Travel</h3>
                <p className="text-sm text-white/70">Turismo & Transporte</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Expertos en turismo y transporte de pasajeros en Santiago de Chile. 
              Más de 8 años creando experiencias inolvidables.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">Av. Armando Cortínez Ote. 1704, Pudahuel, Región Metropolitana, Chile</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+56966435647" className="text-white/80 hover:text-primary transition-colors">
                  +56966435647
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:gefiz.spa@gmail.com" className="text-white/80 hover:text-primary transition-colors">
                  gefiz.spa@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/gefiztravelchile?igsh=aHA2YmxzNmxseHVl&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/80 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61586323407102&mibextid=wwXIfr&rdid=FCfvALi2UUTvv7d6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BQJdA3UFd%2F%3Fmibextid%3DwwXIfr%26ref%3D1#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white/80 group-hover:text-white" />
                </a>
              </div>
              <a 
                href="https://www.instagram.com/gefiztravelchile?igsh=aHA2YmxzNmxseHVl&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors font-medium"
              >
                @gefiztravelchile
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {
                    link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-white/80 hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-white/80 hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    )
                  }
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
                  {
                    service.href.startsWith('/') ? (
                      <Link to={service.href} className="text-white/80 hover:text-primary transition-colors">
                        {service.name}
                      </Link>
                    ) : (
                      <a href={service.href} className="text-white/80 hover:text-primary transition-colors">
                        {service.name}
                      </a>
                    )
                  }
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
              © {currentYear} Gefiz Travel. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>RUT: 77.859.905-8</span>
              <span>•</span>
              <span>Registro SERNATUR: GT-001-2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-4">
        <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg animate-float">
          <span className="font-semibold">¡Haz tu reserva aquí!</span>
        </div>
        <a
          href="https://wa.me/56966435647"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;