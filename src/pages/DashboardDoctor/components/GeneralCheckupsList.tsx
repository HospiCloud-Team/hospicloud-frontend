import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getCheckupsDoctor } from "../../../api/checkups";
import { getTemplatesByDoctor } from "../../../api/utilities";
import CheckupItem from "../../../components/CheckupItem";
import { ICheckup } from "../../../models/ICheckup";
import { ITemplate } from "../../../models/ITemplate";
import routes from "../../../router/constantRoutes.json";
import SelectTemplateModal from "./SelectTemplateModal";

const GeneralCheckupList = () => {
  const [checkups, setCheckups] = useState<ICheckup[]>([]);
  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [showSelectTemplateModal, setShowSelectTemplateModal] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const doctorId = Number(localStorage.getItem("doctorId") as string);
    getCheckupsDoctor(doctorId).then((retrievedCheckups) =>
      setCheckups(retrievedCheckups.data.reverse())
    );
    getTemplatesByDoctor(doctorId).then((templates) =>
      setTemplates(templates.data)
    );
  }, []);

  const handleLinkToAddCheckup = () => {
    if (templates.length === 1) {
      history.push(routes.DOCTOR_NEW_CHECKUP, templates[0]);
    } else if (templates.length > 1) {
      setShowSelectTemplateModal(true);
    }
  };

  const selectTemplate = (template: ITemplate) => {
    history.push(routes.DOCTOR_NEW_CHECKUP, template);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="m-0">Consultas</h4>
        <div>
          <button className="btn btn-secondary btn-sm me-2">
            Ver lista de Pacientes
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleLinkToAddCheckup}
          >
            Agregar Consulta
          </button>
        </div>
      </div>
      {checkups.map((checkup) => (
        <CheckupItem
          key={checkup.id}
          checkup={checkup}
          patientName={`${checkup.patient.user.name} ${checkup.patient.user.last_name}`}
          onClick={() =>
            history.push(`${routes.DOCTOR_CHECKUPS}/${checkup.id}`, checkup)
          }
        />
      ))}
      <SelectTemplateModal
        show={showSelectTemplateModal}
        close={() => setShowSelectTemplateModal(false)}
        templates={templates}
        selectTemplate={selectTemplate}
      />
    </div>
  );
};

export default GeneralCheckupList;
