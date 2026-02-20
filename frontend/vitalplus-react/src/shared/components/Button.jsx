export default function Button({
  variant = "primary", //Define el estilo visual
  size = "md",
  type = "button",
  children, //Es el contenido que tiene el boton
  ...props
}) {
  const variants = {
    primary: "border border-border bg-brand text-inverse hover:bg-brand-hover border-border",
    secundary: "border border-border bg-brand text-primary hover:bg-brand-soft border-border",
  };

  const sizes = {
    sm: `
            h-9 px-3
            before:absolte before:content-['']
            before:-inset-y-[7px] before:-inset-x-[0px]
            `,

    md: `
            h-10 px-4
            before:absolte before:content-['']
            before:-inset-y-[4px] before:-inset-x-[0px]
            `,
  };

  return (
    <button
      type={type}
      className={`
                relative
                inline-flex items-center justify-center
                rounded-md
                transition-colors
                ${variants[variant]}
                ${sizes[size]}

            `}
      {...props}
    >
      {children}
    </button>
  );
}
