
export const Hero = ({
  title,
  subtitle,
  description,
  image,
  height = "55vh",
  imagePosition = "center",
}) => {

  return (
    <section
      className="relative flex items-end overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: imagePosition,
        height: height,
        minHeight: "280px",
        maxHeight: "560px",
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-8 md:px-6 md:pb-10">

        {/* TITULO */}
        {title && (
          <h1 className="text-xl font-semibold uppercase tracking-[0.1em] text-white
                         sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h1>
        )}

        {/* SUBTITULO */}
        {subtitle && (
          <h2 className="mt-0.5 text-sm font-medium tracking-[0.12em] text-white/85
                         sm:text-base md:mt-1 md:text-lg">
            {subtitle}
          </h2>
        )}

      {/* DESCRIPCIÓN */}
{/* DESCRIPCIÓN */}
{description && (
  <p className="
    mt-3
    max-w-xl
    font-serif
    text-xs
    font-normal
    leading-6
    tracking-wide
    text-white/70
    sm:text-[13px]
    sm:leading-7
  ">
    {description}
  </p>
)}

      </div>
    </section>
  );
};
