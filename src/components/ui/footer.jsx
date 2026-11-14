
const Footer = () => {
  return (
    <footer className="bg-[#111116] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">

          {/* MARCA */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-[#29232F] border border-[#66516F] rounded-sm">
                <span className="text-[#D9B95B] text-xl font-bold">
                  Z
                </span>
              </div>

              <div>
                <h2 className="text-white font-bold tracking-[0.2em] text-lg">
                  ZNK
                </h2>
                <p className="text-[9px] tracking-widest text-gray-500">
                  FANTASY RPG WORLD
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Un universo de historias, personajes y aventuras por descubrir.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-[#D9B95B] mb-4">
              EXPLORAR
            </h3>

            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/historia" className="hover:text-white transition-colors">Historia</a></li>
              <li><a href="/personajes" className="hover:text-white transition-colors">Personajes</a></li>
              <li><a href="/mundo" className="hover:text-white transition-colors">Mundo</a></li>
            </ul>
          </div>

          {/* UNIVERSO */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-[#D9B95B] mb-4">
              UNIVERSO
            </h3>

            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="/lore" className="hover:text-white transition-colors">Lore</a></li>
              <li><a href="/galeria" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="/comunidad" className="hover:text-white transition-colors">Comunidad</a></li>
            </ul>
          </div>

          {/* REDES */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-[#D9B95B] mb-4">
              COMUNIDAD
            </h3>

            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Seguí las novedades y descubrí las próximas aventuras de ZNK.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Discord"
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-[#D9B95B] hover:border-[#D9B95B]/50 transition-colors"
              >
                D
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-[#D9B95B] hover:border-[#D9B95B]/50 transition-colors"
              >
                IG
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-[10px] text-gray-600 tracking-wide">
            © {new Date().getFullYear()} ZNK. Todos los derechos reservados.
          </p>

          <p className="text-[10px] text-gray-600 tracking-widest">
            FANTASY RPG WORLD
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
