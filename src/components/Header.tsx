import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import GefizLogo from '@/components/ui/GefizLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVinedosOpen, setIsVinedosOpen] = useState(false);
  const [isMobileVinedosOpen, setIsMobileVinedosOpen] = useState(false);
  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);
  const [isMobileExperienciasOpen, setIsMobileExperienciasOpen] = useState(false);

  const vinedosItems = [
    { name: 'Todos los Viñedos', href: '/vinedos' },
    { name: 'Viña Concha y Toro', href: '/tour/vina-concha-toro' },
    { name: 'Viña Santa Rita', href: '/tour/vina-santa-rita' },
    { name: 'Viña Undurraga', href: '/tour/vina-undurraga-tour-sibaris' },
    { name: 'Marques Casa Concha', href: '/tour/marques-casa-concha' },
    { name: 'Viña Cousiño Macul', href: '/tour/vina-cousino-macul' },
    { name: 'Viña Haras de Pirque', href: '/tour/vinedo-haras-pirque' },
  ];

  const experienciasItems = [
    { name: 'Todos los Tours', href: '/todos-los-tours' },
    { name: 'Santiago', href: '/santiago' },
    { name: 'Costa Central', href: '/costa-central' },
    { name: 'Cordillera de Los Andes', href: '/cordillera-andes' },
    { name: 'Viñedos', href: '/vinedos' },
  ];

  const navItems = [
    { name: 'Viñedos', href: '/vinedos', isRoute: true, hasDropdown: true, dropdownType: 'vinedos' },
    { name: 'Experiencias', href: '#experiencias', isRoute: false, hasDropdown: true, dropdownType: 'experiencias' },
    { name: 'Tours Privados', href: '/tours-privados', isRoute: true },
    { name: 'Traslados', href: '/traslados', isRoute: true },
    { name: 'Quienes Somos', href: '/quienes-somos', isRoute: true }
  ];

  return (
    <header className="bg-background-alt shadow-sm border-b border-card-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <GefizLogo size={64} className="flex-shrink-0" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Gefiz Travels</h1>
              <p className="text-xs text-foreground-muted">Turismo & Transporte</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onMouseEnter={() => {
                        if (item.dropdownType === 'vinedos') {
                          setIsVinedosOpen(true);
                          setIsExperienciasOpen(false);
                        } else if (item.dropdownType === 'experiencias') {
                          setIsExperienciasOpen(true);
                          setIsVinedosOpen(false);
                        }
                      }}
                      className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.dropdownType === 'vinedos') {
                          setIsVinedosOpen(!isVinedosOpen);
                          setIsExperienciasOpen(false);
                        } else if (item.dropdownType === 'experiencias') {
                          setIsExperienciasOpen(!isExperienciasOpen);
                          setIsVinedosOpen(false);
                        }
                      }}
                      onMouseEnter={() => {
                        if (item.dropdownType === 'vinedos') {
                          setIsVinedosOpen(true);
                          setIsExperienciasOpen(false);
                        } else if (item.dropdownType === 'experiencias') {
                          setIsExperienciasOpen(true);
                          setIsVinedosOpen(false);
                        }
                      }}
                      className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  )}
                  
                  {/* Viñedos Dropdown Menu */}
                  {item.dropdownType === 'vinedos' && isVinedosOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-card-border z-50"
                      onMouseLeave={() => setIsVinedosOpen(false)}
                    >
                      <div className="py-2">
                        {vinedosItems.map((vinedo) => (
                          <Link
                            key={vinedo.name}
                            to={vinedo.href}
                            className="block px-4 py-3 text-foreground-muted hover:text-primary hover:bg-accent transition-colors duration-200"
                            onClick={() => setIsVinedosOpen(false)}
                          >
                            {vinedo.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Experiencias Dropdown Menu */}
                  {item.dropdownType === 'experiencias' && isExperienciasOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-card-border z-50"
                      onMouseLeave={() => setIsExperienciasOpen(false)}
                    >
                      <div className="py-2">
                        {experienciasItems.map((experiencia) => (
                          experiencia.href.startsWith('/') ? (
                            <Link
                              key={experiencia.name}
                              to={experiencia.href}
                              className="block px-4 py-3 text-foreground-muted hover:text-primary hover:bg-accent transition-colors duration-200"
                              onClick={() => setIsExperienciasOpen(false)}
                            >
                              {experiencia.name}
                            </Link>
                          ) : (
                            <a
                              key={experiencia.name}
                              href={experiencia.href}
                              className="block px-4 py-3 text-foreground-muted hover:text-primary hover:bg-accent transition-colors duration-200"
                            >
                              {experiencia.name}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+56966435647" className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+56966435647</span>
            </a>
            <a href="https://wa.me/56966435647?text=Hola,%20me%20gustaría%20reservar%20un%20viaje" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-xl font-semibold flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Reserva tu Viaje</span>
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-card-border pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name}>
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          if (item.dropdownType === 'vinedos') {
                            setIsMobileVinedosOpen(!isMobileVinedosOpen);
                            setIsMobileExperienciasOpen(false);
                          } else if (item.dropdownType === 'experiencias') {
                            setIsMobileExperienciasOpen(!isMobileExperienciasOpen);
                            setIsMobileVinedosOpen(false);
                          }
                        }}
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          (item.dropdownType === 'vinedos' && isMobileVinedosOpen) || 
                          (item.dropdownType === 'experiencias' && isMobileExperienciasOpen) 
                            ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                    
                    {/* Mobile Viñedos Dropdown */}
                    {item.dropdownType === 'vinedos' && isMobileVinedosOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {vinedosItems.map((vinedo) => (
                          <Link
                            key={vinedo.name}
                            to={vinedo.href}
                            className="block text-foreground-muted hover:text-primary transition-colors duration-200 py-1 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {vinedo.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Mobile Experiencias Dropdown */}
                    {item.dropdownType === 'experiencias' && isMobileExperienciasOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {experienciasItems.map((experiencia) => (
                          experiencia.href.startsWith('/') ? (
                            <Link
                              key={experiencia.name}
                              to={experiencia.href}
                              className="block text-foreground-muted hover:text-primary transition-colors duration-200 py-1 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {experiencia.name}
                            </Link>
                          ) : (
                            <a
                              key={experiencia.name}
                              href={experiencia.href}
                              className="block text-foreground-muted hover:text-primary transition-colors duration-200 py-1 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {experiencia.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="pt-4 space-y-3">
                <a href="tel:+56966435647" className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors py-2">
                  <Phone className="w-4 h-4" />
                  <span>+56966435647</span>
                </a>
                <a href="https://wa.me/56966435647?text=Hola,%20me%20gustaría%20reservar%20un%20viaje" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Reserva tu Viaje</span>
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;