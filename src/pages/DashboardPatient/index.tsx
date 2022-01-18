import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import CheckupsList from "./components/CheckupsList";
import CheckupsDetail from "./components/CheckupsDetail";
import { PatientProfile } from "./components/PatientProfile";
import PatientDoctorsList from "./components/PatientDoctorsList";
import CheckupsListForDoctor from "./components/CheckupsListForDoctor";

interface DashboardPatientProps {
  content:
    | "CheckupsList"
    | "CheckupDetail"
    | "PatientProfile"
    | "DoctorsList"
    | "DoctorRecord";
}

const renderContent = (content: string) => {
  switch (content) {
    case "CheckupsList":
      return <CheckupsList />;
    case "CheckupDetail":
      return <CheckupsDetail />;
    case "PatientProfile":
      return <PatientProfile />;
    case "DoctorsList":
      return <PatientDoctorsList />;
    case "DoctorRecord":
      return <CheckupsListForDoctor />;
    default:
      break;
  }
};

const DashboardPatient = ({ content }: DashboardPatientProps) => {
  return (
    <DashboardLayout userRole={roles.PATIENT}>
      {renderContent(content)}
    </DashboardLayout>
  );
};

export default DashboardPatient;
