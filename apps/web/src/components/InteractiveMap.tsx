import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface InteractiveMapProps {
  className?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Exact coordinates for Av. Armando Cortínez Ote. 1704, Pudahuel, Región Metropolitana
    const position: [number, number] = [-33.3969306, -70.7936148];

    // Create map instance
    const map = L.map(mapRef.current).setView(position, 15);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create custom marker icon
    const customIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add marker with popup
    const marker = L.marker(position, { icon: customIcon }).addTo(map);
    
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`;
    
    marker.bindPopup(`
      <div style="text-align: center; font-family: system-ui, -apple-system, sans-serif; min-width: 200px;">
        <h3 style="font-weight: 600; font-size: 1.1rem; margin-bottom: 8px; color: #1f2937;">GEFIZ SPA</h3>
        <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 4px;">
          Av. Armando Cortínez Ote. 1704
        </p>
        <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;">
          Pudahuel, Región Metropolitana
        </p>
        <p style="font-size: 0.75rem; color: #9ca3af; margin-bottom: 12px;">
          Tours y Transporte en Chile
        </p>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" 
           style="display: inline-block; background-color: #4285f4; color: white; padding: 8px 16px; 
                  border-radius: 6px; text-decoration: none; font-size: 0.875rem; font-weight: 500;
                  transition: background-color 0.2s;">
          Ver en Google Maps
        </a>
      </div>
    `);

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`w-full h-64 rounded-xl overflow-hidden ${className}`}>
      <div 
        ref={mapRef} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      />
    </div>
  );
};

export default InteractiveMap;
