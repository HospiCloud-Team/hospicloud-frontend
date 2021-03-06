import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import CheckupsList from "./components/GeneralCheckupsList";
import CheckupsDetail from "./components/CheckupsDetail";
import AddCheckup from "./components/AddCheckup";
import { DoctorProfile } from "./components/DoctorProfile";
import { PatientRecord } from "./components/PatientRecord/PatientRecord";
import PatientsList from "./components/PatientsList";

interface DashboardDoctorProps {
  content:
    | "CheckupsList"
    | "CheckupDetail"
    | "AddCheckup"
    | "DoctorProfile"
    | "PatientRecord"
    | "PatientsList";
}

const renderContent = (content: string) => {
  switch (content) {
    case "CheckupsList":
      return <CheckupsList />;
    case "CheckupDetail":
      return <CheckupsDetail />;
    case "AddCheckup":
      return <AddCheckup />;
    case "DoctorProfile":
      return <DoctorProfile />;
    case "PatientRecord":
      return <PatientRecord />;
    case "PatientsList":
      return <PatientsList />;
    default:
      break;
  }
};

const DashboardDoctor = ({ content }: DashboardDoctorProps) => {
  return (
    <DashboardLayout userRole={roles.DOCTOR}>
      {renderContent(content)}
    </DashboardLayout>
  );
};

export default DashboardDoctor;
