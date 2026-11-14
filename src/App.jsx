
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

import Home from "./pages/home";
import Genesis from "./pages/genesis";
import Dominios from "./pages/dominios";
import Ventajas from "./pages/ventajas";
import Capacidades from "./pages/capacidades";
import FuerzasMagicas from "./pages/fuerzasMagicas";
import EstrellasDelDestino from "./pages/estrellasDelDestino";
import CreacionPersonajes from "./pages/creacionPersonajes";
import Cofradias from "./pages/cofradias";
import Herbolaria from "./pages/herbolaria";
import AldeasSecretas from "./pages/aldeasSecretas";
import ArtesKi from "./pages/artesKi";
import ClanesLegendarios from "./pages/clanesLegendarios";
import Yakuza from "./pages/yakuza";
import UniversoCeleste from "./pages/universoCeleste";
import TierrasInhospitas from "./pages/tierrasInhospitas";
import Imperio from "./pages/imperio";
import MundoInvisible from "./pages/mundoInvisible";
import Neotecnia from "./pages/neotecnia";
import ObjetosMagicos from "./pages/objetosMagicos";
import Razas from "./pages/razas";
import PersonalidadesUnicas from "./pages/personalidadesUnicas";
import SistemaCombate from "./pages/sistemaCombate";
import TecnicasEspeciales from "./pages/tecnicasEspeciales";







export const App = () => {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genesis" element={<Genesis />} />
            <Route path="/dominios" element={<Dominios />} />
            <Route path="/ventajas" element={<Ventajas />} />
            <Route path="/capacidades" element={<Capacidades />} />
            <Route path="/fuerzasMagicas" element={<FuerzasMagicas />} />
            <Route path="/estrellasDelDestino" element={<EstrellasDelDestino />} />
            <Route path="/creacionPersonajes" element={<CreacionPersonajes />} />
            <Route path="/cofradias" element={<Cofradias />} />
            <Route path="/herbolaria" element={<Herbolaria />} />
            <Route path="/aldeasSecretas" element={<AldeasSecretas />} />
            <Route path="/artesKi" element={<ArtesKi />} />
            <Route path="/clanesLegendarios" element={<ClanesLegendarios />} />
             <Route path="/yakuza" element={<Yakuza />} />
             <Route path="/universoCeleste" element={<UniversoCeleste />} />
             <Route path="/tierrasInhospitas" element={<TierrasInhospitas />} />
            <Route path="/imperio" element={<Imperio />} />
            <Route path="/mundoInvisible" element={<MundoInvisible />} />
            <Route path="/neotecnia" element={<Neotecnia />} />
            <Route path="/objetosMagicos" element={<ObjetosMagicos />} />
            <Route path="/razas" element={<Razas />} />
            <Route path="/personalidadesUnicas" element={<PersonalidadesUnicas />} />
            <Route path="/sistemaCombate" element={<SistemaCombate />} />
            <Route path="/tecnicasEspeciales" element={<TecnicasEspeciales />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

