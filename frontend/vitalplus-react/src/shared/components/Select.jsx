export default function Select({
    label,
    name,
    value,
    error,
    onChange,
    options = [],
}
){
    return(
        <div className="w-[320px]">

            {/* Label si el label tiene contenido que es igual a truthy, si no es falsy y no muestra el label */}
            {label && (
                <label className="
                block
                text-[8px]
                mb-1
                text-text-primary
                ">
                    {label}
                </label>
            )}

            

            <select 
                value={value}
                onChange={onChange}
                name={name} className="w-full h-12 rounded-md border border-border px-4">
                <option value="">Seleccione un tipo de documento
                </option>

                {options.map((option) =>(
                    <option key= {option.value} value= {option.value}>
                        {option.label}
                    </option>
                ))
                };

            </select>
            <p className="text-caption text-red-600 mt-1">
                {error}   
            </p>

        </div>
    );

};