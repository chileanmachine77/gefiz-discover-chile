import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TourVinaValparaiso from "./pages/TourVinaValparaiso";
import TourValparaisoVinaVinedo from "./pages/TourValparaisoVinaVinedo";
import TourIslaNegraAlgarroboVinedo from "./pages/TourIslaNegraAlgarroboVinedo";
import TourCityTourSantiago from "./pages/TourCityTourSantiago";
import TourSantiagoEnLasAlturas from "./pages/TourSantiagoEnLasAlturas";
import TourZoologicoBuinZoo from "./pages/TourZoologicoBuinZoo";
import TourCordilleraPanoramico from "./pages/TourCordilleraPanoramico";
import TourFullDayParqueFarellones from "./pages/TourFullDayParqueFarellones";
import TourPortilloLagunaIncaAlmuerzo from "./pages/TourPortilloLagunaIncaAlmuerzo";
import TourSkiDayElColorado from "./pages/TourSkiDayElColorado";
import TourSkiDayFarellones from './pages/TourSkiDayFarellones';
import TourSkiDayValleNevado from './pages/TourSkiDayValleNevado';
import TourVinaConchaToro from './pages/TourVinaConchaToro';
import TourVinaConchaToro_Nocturno from './pages/TourVinaConchaToro-Nocturno';
import TourVinaSantaRita from './pages/TourVinaSantaRita';
import TourVinaUndurraga from './pages/TourVinaUndurraga';
import TourVinaCousino from './pages/TourVinaCousino';
import TourRutaVinoMaipo from './pages/TourRutaVinoMaipo';
import TourVinasCasaConcha from './pages/TourVinasCasaConcha';
import TourMarquesCasaConcha from './pages/TourMarquesCasaConcha';
import TourVinaDelMarCasablanca from './pages/TourVinaDelMarCasablanca';
import TourVinedoHarasPirque from './pages/TourVinedoHarasPirque';
import Vinedos from "./pages/Vinedos";
import Santiago from "./pages/Santiago";
import CordilleraAndes from "./pages/CordilleraAndes";
import CostaCentral from "./pages/CostaCentral";
import TodosLosTours from './pages/TodosLosTours';
import ToursPrivados from './pages/ToursPrivados';
import QuienesSomos from './pages/QuienesSomos';
import Traslados from './pages/Traslados';
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
                <ScrollToTop />
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vinedos" element={<Vinedos />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/cordillera-andes" element={<CordilleraAndes />} />
          <Route path="/costa-central" element={<CostaCentral />} />
          <Route path="/todos-los-tours" element={<TodosLosTours />} />
          <Route path="/tours-privados" element={<ToursPrivados />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/traslados" element={<Traslados />} />
          <Route path="/tour/vina-valparaiso" element={<TourVinaValparaiso />} />
          <Route path="/tour/valparaiso-vina-vinedo" element={<TourValparaisoVinaVinedo />} />
          <Route path="/tour/isla-negra-algarrobo-vinedo" element={<TourIslaNegraAlgarroboVinedo />} />
          <Route path="/tour/city-tour-santiago" element={<TourCityTourSantiago />} />
          <Route path="/tour/santiago-en-las-alturas" element={<TourSantiagoEnLasAlturas />} />
          <Route path="/tour/zoologico-buin-zoo" element={<TourZoologicoBuinZoo />} />
          <Route path="/tour/cordillera-panoramico" element={<TourCordilleraPanoramico />} />
          <Route path="/tour/full-day-parque-farellones" element={<TourFullDayParqueFarellones />} />
          <Route path="/tour/portillo-laguna-inca-almuerzo" element={<TourPortilloLagunaIncaAlmuerzo />} />
          <Route path="/tour/ski-day-el-colorado" element={<TourSkiDayElColorado />} />
          <Route path="/tour/ski-day-farellones" element={<TourSkiDayFarellones />} />
          <Route path="/tour/ski-day-valle-nevado" element={<TourSkiDayValleNevado />} />
          <Route path="/tour/isla-negra-algarrobo-vinedos" element={<TourIslaNegraAlgarroboVinedo />} />
          <Route path="/tour/marques-casa-concha" element={<TourMarquesCasaConcha />} />
          <Route path="/tour/ruta-vino-valle-casablanca" element={<TourVinaDelMarCasablanca />} />
          <Route path="/tour/ruta-vino-valle-maipo" element={<TourRutaVinoMaipo />} />
          <Route path="/tour/vina-cousino-macul" element={<TourVinaCousino />} />
          <Route path="/tour/vina-concha-toro" element={<TourVinaConchaToro />} />
          <Route path="/tour/vina-concha-toro-nocturno" element={<TourVinaConchaToro_Nocturno />} />
          <Route path="/tour/vina-santa-rita" element={<TourVinaSantaRita />} />
          <Route path="/tour/vina-undurraga-tour-sibaris" element={<TourVinaUndurraga />} />
          <Route path="/tour/vinedo-haras-pirque" element={<TourVinedoHarasPirque />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
