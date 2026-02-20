// Creacion de componente input
import "../../styles/global.css";

export default function Input({ label, type = "text", ...props }) {
  return (
    <div className="w-[320px]">
      {/* Label */}
      {label && (
        <label
          className="
                block
                text-[8px]
                mb-1
                text-text-primary
                "
        >
          {label}
        </label>
      )}

      {/* El contenedor del input */}
      <div
        className="
          relative
          h-12
          flex
          items-center
         "
      >
        {/* Area interactiva invisible(48px) */}

        <div
          className="
            absolute
            inset-0
            "
          onMouseDown={(e) => {
            e.preventDefault();
            e.currentTarget.nextSibling.focus();
          }}
        />

        {/* Input visual */}
        <input
          type={type}
          className="
            relative
            w-full
            h-8
            rounded-md
            border
            border-border
            px-4
            text-body
            
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            "
          {...props}
        />
      </div>
    </div>
  );
}
