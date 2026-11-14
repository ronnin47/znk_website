
export const Section = ({
  id,
  title,
  subtitle,
  image,
  imageAlt = "",
  imagePosition = "right",
  variant = "default",
  children,
  className = "",
  textSize = "md",
}) => {

  // TAMAÑOS DE TEXTO
  const textSizes = {
    sm: "text-xs md:text-[13px] leading-5 md:leading-6",
    md: "text-sm md:text-base leading-6 md:leading-7",
    lg: "text-sm md:text-base lg:text-lg leading-6 md:leading-8",
  };

  // COMPOSICIONES
  const layouts = {
    right: "flex-col md:flex-row",
    left: "flex-col md:flex-row-reverse",
    top: "flex-col",
    text: "flex-col",
  };

  // PROPORCIONES DE IMAGEN
  const imageSizes = {
    right: "w-full md:w-[45%] md:min-w-0 md:max-w-[460px]",
    left: "w-full md:w-[45%] md:min-w-0 md:max-w-[460px]",
    top: "w-full",
    text: "hidden",
  };

  // ANCHOS DEL CONTENIDO
  const contentSizes = {
    right: "w-full min-w-0 md:flex-1",
    left: "w-full min-w-0 md:flex-1",
    top: "w-full",
    text: "w-full max-w-3xl mx-auto",
  };

  // ESTILOS VISUALES
  const variants = {
    default: {
      section: "py-6 md:py-10",
      title: "text-xl sm:text-2xl md:text-2xl font-bold",
      subtitle: "text-[10px] sm:text-xs uppercase tracking-wider opacity-60",
      content: "opacity-85",
    },

    centered: {
      section: "py-8 md:py-12 text-center",
      title: "text-xl sm:text-2xl md:text-3xl font-bold",
      subtitle: "text-xs uppercase tracking-wider opacity-60",
      content: "opacity-85",
    },

    compact: {
      section: "py-4 md:py-6",
      title: "text-lg md:text-xl font-semibold",
      subtitle: "text-[10px] sm:text-[11px] uppercase tracking-wider opacity-60",
      content: "opacity-85",
    },

    featured: {
      section: "py-8 md:py-12",
      title: "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight",
      subtitle: "text-xs uppercase tracking-wider opacity-70",
      content: "opacity-90",
    },

    quote: {
      section: "py-8 md:py-12 text-center",
      title: "text-xl sm:text-2xl md:text-2xl font-serif italic",
      subtitle: "text-[10px] sm:text-[11px] uppercase tracking-wider opacity-60",
      content: "font-serif italic opacity-85",
    },
  };

  const layout = layouts[imagePosition] || layouts.right;
  const imageSize = imageSizes[imagePosition] || imageSizes.right;
  const contentSize = contentSizes[imagePosition] || contentSizes.right;
  const style = variants[variant] || variants.default;
  const fontSize = textSizes[textSize] || textSizes.md;

  const imageHeight = imagePosition === "top"
    ? "h-[240px] sm:h-[360px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
    : "h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] xl:h-[700px]";

  return (
    <section
      id={id}
      className={`w-full ${style.section} ${className}`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-start gap-5 px-4 sm:px-6 md:gap-8 lg:px-8 ${layout}`}
      >

        {/* IMAGEN */}
        {image && imagePosition !== "text" && (
          <div className={`shrink-0 ${imageSize}`}>
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className={`block w-full max-h-[700px] rounded-lg object-cover ${imageHeight}`}
            />
          </div>
        )}

        {/* CONTENIDO */}
        <div className={`flex flex-col justify-start gap-3 ${contentSize}`}>

          {/* ENCABEZADO */}
          {(title || subtitle) && (
            <header className="flex flex-col gap-1">

              {subtitle && (
                <p className={style.subtitle}>
                  {subtitle}
                </p>
              )}

              {title && (
                <h2 className={`${style.title} break-words`}>
                  {title}
                </h2>
              )}

            </header>
          )}

          {/* CUERPO */}
          <div className={`min-w-0 space-y-3 ${style.content} ${fontSize}`}>
            {children}
          </div>

        </div>
      </div>
    </section>
  );
};
