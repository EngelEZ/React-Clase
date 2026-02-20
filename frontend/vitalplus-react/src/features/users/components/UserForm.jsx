import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";

export default function UserForm() {
  // const handleNameChange = (e) => {
  //   console.log("Nombre del usuario: ", e.target.value);
  // };

  const handleEmailBlur = (e) => {
    console.log("Email del usuario: ", e.target.value);
  };

  // Una validación basica
  const handleNameChange = (e) => {
    console.log("Nombre del usuario: ", e.target.value);
    if (e.target.value === "") {

      console.log('Este campo no puede estar vacio')
    }
  };


  return (
    <div>
      {/* Formulario para crear el usuario */}
      <form>
        <Input
          label="Nombre"
          placeholder="Ingrese su nombre"
          onChange={handleNameChange}
        ></Input>

        <Input
          label="Email"
          placeholder="Ingrese su email"
          onBlur={handleEmailBlur}
        ></Input>

        {/* Actions */}
        <div className="flex flex-items-center justify-center gap-12">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => console.log("Oprimió cancelar")}
          >
            Cancelar
          </Button>

          <Button
            variant="primary"
            size="md"
            type= "submit"
            onClick={() => console.log("Oprimió guardar")}
          >
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}
