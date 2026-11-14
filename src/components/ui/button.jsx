
const Button = ({
  children,
  variant = "crimson",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  className = "",
}) => {

  const baseStyles = `
    inline-flex items-center justify-center
    font-bold uppercase tracking-wider
    border rounded-sm
    transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#111014]
    disabled:opacity-40 disabled:cursor-not-allowed
    active:scale-95
  `;

  const variants = {
    crimson: `
      bg-gradient-to-r from-red-800 to-red-600
      text-white border-red-400/70
      shadow-[0_0_12px_rgba(220,38,38,0.2)]
      hover:shadow-[0_0_22px_rgba(220,38,38,0.5)]
      hover:brightness-125 focus-visible:ring-red-500
    `,

    shadow: `
      bg-[#19171F] text-gray-200
      border-[#494451]
      hover:bg-[#292530] hover:border-gray-400
      focus-visible:ring-gray-400
    `,

    arcane: `
      bg-gradient-to-r from-purple-950 to-violet-800
      text-purple-100 border-purple-400/70
      shadow-[0_0_12px_rgba(139,92,246,0.2)]
      hover:shadow-[0_0_22px_rgba(139,92,246,0.5)]
      hover:brightness-125 focus-visible:ring-purple-500
    `,

    aqua: `
      bg-gradient-to-r from-cyan-950 to-cyan-800
      text-cyan-100 border-cyan-400/70
      shadow-[0_0_12px_rgba(34,211,238,0.2)]
      hover:shadow-[0_0_22px_rgba(34,211,238,0.5)]
      hover:brightness-125 focus-visible:ring-cyan-500
    `,

    gold: `
      bg-gradient-to-r from-yellow-700 to-amber-500
      text-[#21170A] border-yellow-300
      shadow-[0_0_12px_rgba(234,179,8,0.2)]
      hover:shadow-[0_0_22px_rgba(234,179,8,0.5)]
      hover:brightness-110 focus-visible:ring-yellow-500
    `,

    danger: `
      bg-[#450D18] text-red-200
      border-red-700
      hover:bg-red-800 hover:border-red-400
      focus-visible:ring-red-600
    `,

    ghost: `
      bg-transparent text-gray-300
      border-transparent
      hover:bg-white/5 hover:text-white
      focus-visible:ring-gray-400
    `,

    silver: `
      bg-gradient-to-r from-gray-700 to-gray-500
      text-white border-gray-300/60
      hover:brightness-125 hover:shadow-lg
      focus-visible:ring-gray-400
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant] || variants.crimson}
        ${sizes[size] || sizes.md}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
