import { useFieldArray, useForm } from "react-hook-form";

const TemplateForm = () => {
  const { control, register, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "template",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <div className="mb-4">
        <form onSubmit={onSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Titulo de la plantilla"
            {...register("title")}
          />
          <div className="mb-3">
            <p className="mb-1 fs-5">Formulario de consulta:</p>
            {fields.map((field, index) => (
              <div className="row mb-2" key={field.id}>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Inserte pregunta de formulario..."
                    {...register(`template.${index}.question`)}
                  />
                </div>
                <div className="col-4 d-flex">
                  <select
                    className="form-select me-2"
                    {...register(`template.${index}.value`)}
                  >
                    <option value="int">Numérico</option>
                    <option value="string">Alfanumérico</option>
                  </select>
                  <button
                    className="btn btn-danger"
                    onClick={() => remove(index)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              append({ question: "", value: "string" });
            }}
          >
            Nuevo Campo
          </button>
          <button className="btn btn-primary btn-sm" type="submit">
            Guardar Plantilla
          </button>
        </form>
      </div>
    </div>
  );
};

export default TemplateForm;
