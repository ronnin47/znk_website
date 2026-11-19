
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Neotecnia from "../../pages/neotecnia";
import ObjetosMagicos from "../../pages/objetosMagicos";
import Razas from "../../pages/razas";

import mitamaDorada from "../../assets/mitamaDorada.png";

const menuSections = [
  {
    title: "Universo",
    icon: "scroll",
    items: [
      { label: "Génesis", path: "/genesis" },
      { label: "Dominios", path: "/dominios" },
      { label: "Ventajas", path: "/ventajas" },
      { label: "Capacidades", path: "/capacidades" },
      { label: "Yakuza", path: "/yakuza" },
      { label: "Universo Celeste", path: "/universoCeleste" },
      { label: "Tierras Inhospitas", path: "/tierrasInhospitas" },
      { label: "Artes Ki", path: "/artesKi" },
      { label: "Clanes Legendarios", path: "/clanesLegendarios" },
      { label: "Fuerzas Mágicas", path: "/fuerzasMagicas" },
      { label: "Estrellas del Destino", path: "/estrellasDelDestino" },
      { label: "Creación de Personajes", path: "/creacionPersonajes" },
      { label: "Cofradías", path: "/cofradias" },
      { label: "Herbolaria", path: "/herbolaria" },
      { label: "Aldeas Secretas", path: "/aldeasSecretas" },
      { label: "Imperio del Sol Naciente", path: "/imperio" },
      { label: "Mundo Invisible", path: "/mundoInvisible" },
      { label: "Neotecnia", path: "/neotecnia" },
      { label: "Objetos Mágicos", path: "/objetosMagicos" },
      { label: "Razas", path: "/razas" },
      { label: "Personalidades Únicas", path: "/personalidadesUnicas" },
      { label: "Sistema de Combate", path: "/sistemaCombate" },
       { label: "Técnicas Especiales", path: "/tecnicasEspeciales" },
      
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState("Universo");
  const [search, setSearch] = useState("");

  const location = useLocation();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleSection = (title) => {
    setExpanded(expanded === title ? null : title);
  };

  const filteredSections = menuSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        `${section.title} ${item.label}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#111116]/95 border-b border-white/10 backdrop-blur-md">

        <div className="max-w-7xl mx-auto h-[68px] px-5 md:px-8 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
    <div className="flex flex-col items-center justify-center gap-0.5">
  <img
    src={mitamaDorada}
    alt="Mitama"
    className="w-8 h-8 object-contain"
  />

  <span className="text-white font-bold tracking-[0.15em] text-[9px] leading-none">
    ZNK
  </span>
</div>

       <div className="flex flex-col">
  <h1 className="text-white font-bold tracking-[0.15em] text-sm leading-tight">
    ZEPIRO NO KIOKU
  </h1>

  <span className="text-[10px] tracking-wider text-gray-400">
    ゼピロの思い出
  </span>
</div>
          </Link>

          {/* ACCIONES */}
          <div className="flex items-center gap-4">

            <Link
              to="/"
              className={`hidden sm:block text-xs tracking-wider transition-colors ${
                location.pathname === "/"
                  ? "text-[#D9B95B]"
                  : "text-gray-400 hover:text-[#D9B95B]"
              }`}
            >
              INICIO
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir navegación"
              aria-expanded={menuOpen}
              className="flex items-center gap-3 px-3 py-2 border border-white/10 text-gray-300 hover:border-[#D9B95B]/50 hover:text-[#D9B95B] transition-colors"
            >
              <span className="hidden sm:block text-xs tracking-widest">
                EXPLORAR
              </span>

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* FONDO OSCURO */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* PANEL LATERAL */}
      <aside
        className={`fixed top-0 right-0 z-[60] h-dvh w-[350px] max-w-[92vw] bg-[#17151D] border-l border-white/10 flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >

        {/* CABECERA */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">

          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#D9B95B]">
              ZNK 
            </span>

            <h2 className="text-white text-lg font-semibold mt-1">
              Exploración
            </h2>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar navegación"
            className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* BUSCADOR */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3 px-3 py-2.5 bg-[#211F28] border border-white/10 focus-within:border-[#D9B95B]/50">

            <svg width="17" height="17" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.7"
              className="text-gray-500">
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar contenido..."
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-2">

          <p className="text-[10px] tracking-[0.2em] text-gray-600 mb-4">
            CONTENIDO
          </p>

          {filteredSections.map((section) => {
            const isExpanded =
              search.length > 0 || expanded === section.title;

            return (
              <div key={section.title}>

                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center gap-3 px-3 py-3 text-gray-300 hover:bg-white/[0.04] hover:text-[#D9B95B] transition-colors"
                >
                  <span className="text-[#A18BAF] text-sm">▧</span>

                  <span className="flex-1 text-left text-sm font-medium">
                    {section.title}
                  </span>

                  <svg width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.5"
                    className={`transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="ml-9 pl-4 border-l border-white/10 space-y-1 py-1">

                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`block py-2 text-xs transition-colors ${
                          location.pathname === item.path
                            ? "text-[#D9B95B]"
                            : "text-gray-500 hover:text-[#D9B95B]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

          {filteredSections.length === 0 && (
            <p className="text-sm text-gray-500 py-5 text-center">
              No se encontraron resultados.
            </p>
          )}

        </nav>

        {/* PIE */}
        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-[10px] tracking-widest text-gray-600">
            ZNK · FANTASY RPG WORLD
          </p>
        </div>

      </aside>
    </>
  );
};

export default Header;
