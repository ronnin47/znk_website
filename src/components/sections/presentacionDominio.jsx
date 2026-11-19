
import React from "react";

export const PresentacionDominio = ({
  id,
  nombre,
  subtitulo,
  imagen,
  simbolo,
  descripcion,
  estiloVida,
  arteKi,
  aptitud,
  ventajaGratuita,
  caracteristicas = [],
  ventajasDesventajas = [],
  cita,
  autor,
  seleccionado = false,
  onSeleccionar
}) => {
  return (
   <article id={id} className={`
  relative overflow-hidden rounded-xl
  border ${seleccionado ? "border-[#D9B95B]" : "border-[#41443C]"}
  bg-[#171A18] text-[#E8E4D8]
  shadow-[0_12px_35px_rgba(0,0,0,0.4),0_0_15px_rgba(217,185,91,0.08)]
`}>

      {/* IDENTIDAD DEL DOMINIO */}
      <header className="relative min-h-[230px] grid grid-cols-1 md:grid-cols-[50%_50%]">

        {/* ILUSTRACIÓN */}
        <div className="relative min-h-[320px] md:min-h-[420px] overflow-hidden">
          {imagen && (
            <img
              src={imagen}
              alt={nombre}
             className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#171A18] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#171A18]" />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white bg-black/60 px-2 py-1">
              Archivo de dominios
            </span>
          </div>

          {simbolo && (
            <span className="absolute bottom-3 left-4 text-4xl text-white/70 font-serif">
              {simbolo}
            </span>
          )}
        </div>

        {/* PRESENTACIÓN */}
        <div className="relative flex flex-col justify-center px-5 py-5 md:px-7 md:py-7">

          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#D9B95B]" />
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#D9B95B]">
              Antigua maestría del Ki
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase leading-none tracking-tight text-[#F1EBDD]">
            {nombre}
          </h2>

          {subtitulo && (
            <p className="mt-2 text-xs italic tracking-wide text-[#C5A968]">
              {subtitulo}
            </p>
          )}

          <div className="w-16 h-[2px] bg-[#B58B43] my-4" />

          <p className="text-[12px] leading-[1.85] text-[#C3C1B8]">
            {descripcion}
          </p>
        </div>
      </header>

      {/* TRADICIÓN */}
      <section className="px-5 md:px-7 py-5 border-t border-[#393D36]">

        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#D9B95B] text-lg">✦</span>
          <h3 className="text-xs font-black uppercase tracking-[0.17em] text-[#E1D2AA]">
           Legado
          </h3>
          <span className="flex-1 h-px bg-[#41443C]" />
        </div>

        <p className="text-[12px] leading-[1.9] text-[#BDBDB5]">
          {estiloVida}
        </p>
      </section>

      {/* CONOCIMIENTO DEL DOMINIO */}
      <section className="px-5 md:px-7 py-5 bg-[#20241F] border-y border-[#393D36]">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.17em] text-[#D9B95B]">
            Especialización del dominio
          </h3>
       
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div>
            <span className="block text-[9px] uppercase tracking-widest text-[#898B80] mb-1">
              Arte de Ki
            </span>
            <p className="text-sm font-bold text-[#E8D5A6]">
              {arteKi}
            </p>
          </div>

          <div>
            <span className="block text-[9px] uppercase tracking-widest text-[#898B80] mb-1">
              Aptitud especializada
            </span>
            <p className="text-sm font-bold text-[#E8E4D8]">
              {aptitud}
            </p>
          </div>

          <div>
            <span className="block text-[9px] uppercase tracking-widest text-[#898B80] mb-1">
              Ventaja gratuita
            </span>
            <p className="text-sm font-bold text-[#E8E4D8]">
              {ventajaGratuita}
            </p>
          </div>

        </div>
      </section>

      {/* PERFIL */}
      <section className="px-5 md:px-7 py-5 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.17em] text-[#D9B95B] mb-3">
            Características recomendadas
          </h3>

          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {caracteristicas.map((item) => (
              <span
                key={item}
                className="text-[11px] text-[#D5D0C3] border-b border-[#75613A] pb-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.17em] text-[#D9B95B] mb-3">
            Ventajas y desventajas
          </h3>

          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {ventajasDesventajas.map((item) => (
              <span
                key={item}
                className="text-[11px] text-[#D5D0C3] border-b border-[#75613A] pb-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* CITA */}
      {cita && (
        <section className="mx-5 md:mx-7 mb-5 border-l-2 border-[#B58B43] pl-4 py-2">

          <p className="text-[12px] italic leading-relaxed text-[#C8C1AF]">
            «{cita}»
          </p>

          {autor && (
            <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#D9B95B]">
              — {autor}
            </p>
          )}

        </section>
      )}

      {/* SELECCIÓN */}
      {onSeleccionar && (
        <footer className="px-5 md:px-7 py-3 bg-[#111411] border-t border-[#393D36] flex items-center justify-between gap-3">

          <span className="text-[9px] uppercase tracking-[0.15em] text-[#77796F]">
            {seleccionado ? "Dominio elegido" : "Forja tu propio camino"}
          </span>

          <button
            type="button"
            onClick={onSeleccionar}
            className={`
              px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em]
              border transition-colors duration-200
              ${seleccionado
                ? "bg-[#B58B43] border-[#B58B43] text-[#171A18]"
                : "border-[#8E743D] text-[#D9B95B] hover:bg-[#B58B43] hover:text-[#171A18]"
              }
            `}
          >
            {seleccionado ? "Seleccionado ✓" : "Elegir dominio"}
          </button>

        </footer>
      )}

    </article>
  );
};
