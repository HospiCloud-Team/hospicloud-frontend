import Modal from "react-bootstrap/esm/Modal";
import { useForm } from "react-hook-form";
import { addSpecialtyToHospital } from "../../../api/utilities";
import { INewSpecialty } from "../../../models/ISpecialty";

interface AddSpecialtyModalProps {
  show: boolean;
  close: () => void;
}

const AddSpecialtyModal = ({ show, close }: AddSpecialtyModalProps) => {
  const hospitalId = Number(localStorage.getItem("hospitalId"));
  const { register, handleSubmit, reset } = useForm<INewSpecialty>({
    defaultValues: {
      name: "",
      hospital_id: hospitalId,
    },
  });

  const onSubmit = handleSubmit((data) => {
    addSpecialtyToHospital(data);
    reset();
    close();
  });

  return (
    <Modal show={show} onHide={close}>
      <form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Especialidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              className="form-control"
              placeholder="Nombre de la especialidad"
              {...register("name")}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary btn-sm" type="submit">
            Agregar Especialidad
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddSpecialtyModal;
