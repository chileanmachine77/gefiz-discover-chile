# GEFIZ Discover Chile

Plataforma web para la gestión y reserva de tours turísticos en Chile, ofreciendo una experiencia completa para explorar los destinos más emblemáticos del país.

## 📋 Descripción del Proyecto

GEFIZ Discover Chile es una aplicación web moderna que permite a los usuarios descubrir, explorar y reservar tours turísticos en Chile. La plataforma incluye:

- **Catálogo completo de tours**: Desde tours por viñedos hasta aventuras en la cordillera
- **Sistema de reservas**: Formularios de contacto integrados con WhatsApp
- **Navegación intuitiva**: Organización por categorías y destinos
- **Diseño responsivo**: Experiencia optimizada para todos los dispositivos
- **Integración con Meta Pixel**: Para análisis y marketing digital

## 🛠 Tecnologías Usadas

### Frontend
- **React 18.3.1** - Librería principal de UI
- **TypeScript 5.8.3** - Tipado estático
- **Vite 5.4.19** - Build tool y desarrollo
- **Tailwind CSS 3.4.17** - Framework de estilos
- **React Router DOM 6.30.1** - Navegación
- **Radix UI** - Componentes de UI accesibles
- **Lucide React** - Iconos modernos
- **React Hook Form 7.61.1** - Formularios
- **Zod 3.25.76** - Validación de datos

### Herramientas de Desarrollo
- **ESLint 9.32.0** - Linting
- **PostCSS 8.5.6** - Procesamiento CSS
- **Autoprefixer 10.4.21** - Compatibilidad CSS

### Analytics & Marketing
- **Vercel Analytics** - Análisis de rendimiento
- **Meta Pixel** - Seguimiento de conversiones

## 📁 Estructura del Proyecto

```
gefiz-discover-chile/
├── apps/
│   └── web/                    # Aplicación web principal
│       ├── public/            # Assets estáticos
│       ├── src/
│       │   ├── components/    # Componentes reutilizables
│       │   ├── pages/         # Páginas de tours
│       │   ├── assets/        # Imágenes y recursos
│       │   └── App.tsx        # Componente principal
│       ├── package.json
│       └── vite.config.ts
├── .env.example               # Variables de entorno
├── vercel.json               # Configuración de Vercel
└── README.md
```

## 🚀 Instrucciones de Instalación

### Prerrequisitos
- Node.js 18+
- npm 9+

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/chileanmachine77/gefiz-discover-chile.git
cd gefiz-discover-chile
```

2. **Instalar dependencias**
```bash
cd apps/web
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
# Editar .env.local con las variables necesarias
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

5. **Abrir en navegador**
```bash
# La aplicación estará disponible en http://localhost:5173
```

## 🎖 Cómo Usarlo

### Para Desarrolladores

1. **Navegación**: La aplicación usa React Router para la navegación entre páginas
2. **Componentes**: Los componentes están organizados en `src/components/`
3. **Páginas**: Cada tour tiene su propia página en `src/pages/`
4. **Estilos**: Usa Tailwind CSS con configuración personalizada

### Para Usuarios

1. **Explorar tours**: Navega por categorías (Santiago, Viñedos, Costa, Montaña)
2. **Ver detalles**: Click en cualquier tour para ver información completa
3. **Reservar**: Usa el formulario de contacto para enviar reservas por WhatsApp
4. **Filtrar**: Usa los filtros para encontrar tours específicos

### Scripts Disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm run lint         # Ejecutar ESLint
```

## 📸 Screenshots/Demo

### Página Principal
- Catálogo de tours más solicitados
- Navegación por categorías
- Diseño moderno y responsivo

### Páginas de Tours
- Galería de imágenes
- Información detallada
- Formularios de reserva
- FAQ interactiva

### Características Destacadas
- ✅ Diseño 100% responsivo
- ✅ Optimización SEO
- ✅ Integración con WhatsApp
- ✅ Meta Pixel para marketing
- ✅ Performance optimizada

## 📊 Tours Disponibles

### Santiago
- City Tour Santiago
- Santiago en las Alturas
- Tour Zoológico Buin Zoo

### Viñedos
- Viña Concha y Toro
- Viña Santa Rita
- Viña Cousiño Macul
- Viña Undurraga
- Viñedo Haras de Pirque
- Ruta del Vino Valle del Maipo
- Ruta del Vino Valle de Casablanca

### Montaña
- Full Day Parque Farellones
- Cordillera Panorámico
- Ski Day El Colorado
- Ski Day Farellones
- Ski Day Valle Nevado
- Portillo con Almuerzo

### Costa
- Valparaíso, Viña del Mar y Viñedo
- Isla Negra, Algarrobo y Viñedo
- Viña del Mar y Valparaíso

## 📞 Información de Contacto

### Desarrollo y Mantenimiento
- **Desarrollador**: chileanmachine77
- **GitHub**: [@chileanmachine77](https://github.com/chileanmachine77)

### Contacto de Negocio
- **Sitio Web**: [https://gefiz-discover-chile.vercel.app](https://gefiz-discover-chile.vercel.app)
- **WhatsApp**: +56 9 6643 5647
- **Email**: [contacto@gefiz.cl](mailto:contacto@gefiz.cl)

## 🚀 Deployment

### Vercel
El proyecto está configurado para deployment automático en Vercel:

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push a `main`

### Build Commands
```bash
# Build para producción
npm run build

# Preview local
npm run preview
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔮 Futuras Mejoras

- [ ] Sistema de pagos integrado
- [ ] Panel de administración
- [ ] Multiidioma (inglés/portugués)
- [ ] App móvil PWA
- [ ] Integración con APIs de turismo
- [ ] Sistema de reviews y calificaciones

---

**Desarrollado con ❤️ en Chile**
