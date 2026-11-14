export const SectionBackground = ({
  id,
  title,
  subtitle,
  image,
  imagePosition = "center",
  imageOpacity = 100,
  children,
  height = "400px",
  className = "",
}) => {

  return (
    <section
      id={id}
      className={`relative flex items-center overflow-hidden ${className}`}
      style={{
        minHeight: height,
      }}
    >

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: imagePosition,
          opacity: imageOpacity / 100,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">

        {/* ENCABEZADO */}
        {(title || subtitle) && (
          <header className="flex flex-col gap-1">

            {subtitle && (
              <p className="text-xs uppercase tracking-wider text-white/65">
                {subtitle}
              </p>
            )}

            {title && (
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {title}
              </h2>
            )}

          </header>
        )}

        {/* CONTENIDO */}
        {children && (
          <div className="mt-3 max-w-4xl space-y-3 text-xs md:text-[13px] leading-5 text-white/85">
            {children}
          </div>
        )}

      </div>
    </section>
  );
};

