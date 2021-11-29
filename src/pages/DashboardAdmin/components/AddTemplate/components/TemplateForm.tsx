import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { ISpecialty } from "../../../../../models/ISpecialty";
import {
  getSpecialtyByHospital,
  addTemplateToHospital,
  editTemplateOfHospital,
} from "../../../../../api/utilities";
import {
  parseTemplateArray,
  parseStringToTemplateArray,
} from "../../../../../utils/parseTemplateResponses";
import { INewTemplate, ITemplate } from "../../../../../models/ITemplate";
import { useHistory } from "react-router";

interface TemplateFormProps {
  formType: "add" | "edit";
  templateToEdit?: ITemplate;
}

const TemplateForm = ({ formType, templateToEdit }: TemplateFormProps) => {
  const history = useHistory();
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);

  const { control, register, setValue, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "template",
  });

  const onSubmit = handleSubmit((data) => {
    const hospitalId = Number(localStorage.getItem("hospitalId"));
    const templateString = parseTemplateArray(data.template);
    const template: INewTemplate = {
      title: data.title,
      specialty_id: data.specialty_id,
      headers: templateString,
      hospital_id: hospitalId,
    };
    if (formType === "add") {
      addTemplateToHospital(template).then(() => history.goBack());
    } else if (formType === "edit" && templateToEdit) {
      editTemplateOfHospital(templateToEdit.id, template).then(() =>
        history.goBack()
      );
    }
  });

  useEffect(() => {
    const hospitalId = Number(localStorage.getItem("hospitalId"));
    getSpecialtyByHospital(hospitalId).then((res) => setSpecialties(res.data));
    if (formType === "add") {
      append({ question: "", value: "string" });
    } else if (formType === "edit" && templateToEdit) {
      parseStringToTemplateArray(templateToEdit.headers).forEach(
        ({ question, value }) => {
          append({ question, value });
        }
      );
      setValue("title", templateToEdit.title);
      setValue("specialty_id", templateToEdit.specialty_id);
    }
  }, []);

  return (
    <div>
      <div className="mb-4">
        <form onSubmit={onSubmit}>
          {formType === "add" ? (
            <div className="row mb-3">
              <div className="col-8">
                <input
                  className="form-control mb-2"
                  placeholder="Titulo de la plantilla"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="col-4">
                <select
                  className="form-select me-2"
                  defaultValue=""
                  {...register("specialty_id", { required: true })}
                >
                  <option value="" disabled>
                    Seleccione la especialidad
                  </option>
                  {specialties.map((specialty) => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <input
              className="form-control mb-2"
              placeholder="Titulo de la plantilla"
              {...register("title", { required: true })}
            />
          )}
          <div className="mb-3">
            <p className="mb-1 fs-5">Formulario de consulta:</p>
            {fields.map((field, index) => (
              <div className="row mb-2" key={field.id}>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Inserte pregunta de formulario..."
                    {...register(`template.${index}.question`, {
                      required: true,
                    })}
                  />
                </div>
                <div className="col-4 d-flex">
                  <select
                    className="form-select me-2"
                    {...register(`template.${index}.value`, { required: true })}
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

          <div className="row my-4">
            <div className="col-4 d-grid">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  append({ question: "", value: "string" });
                }}
              >
                Nuevo Campo
              </button>
            </div>
            <div className="col-8 d-grid">
              <button className="btn btn-primary btn-sm" type="submit">
                Guardar Plantilla
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateForm;
