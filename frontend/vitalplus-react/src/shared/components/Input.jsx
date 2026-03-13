// Creacion de componente input
import "../../styles/global.css";

export default function Input({ label, type = "text", error, ...props }) {
  return (
    <div className="w-[320px]">
      {/* Label */}
      {label && (
        <label
          className={`
          block
          text-[8px]
          mb-1
          text-text-primary
          ${error ? "text-red-600" : "text-text-primary"}
          `}
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
          className={`
            
            relative
            w-full
            h-12
            rounded-md
            border
            border-border
            px-4
            text-body
            
            ${error ? "border-red-600" : "border-border-strong"}
            
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            `}
          {...props}
        />
      </div>
      {error && <p className="text-caption text-red-600 mt-1">{error}</p>}
    </div>
  );
}
