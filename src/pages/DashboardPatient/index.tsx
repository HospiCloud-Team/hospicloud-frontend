import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import CheckupsList from "./components/CheckupsList";
import CheckupsDetail from "./components/CheckupsDetail";
import { PatientProfile } from "./components/PatientProfile";

interface DashboardPatientProps {
  content: "CheckupsList" | "CheckupDetail" | "PatientProfile";
}

const renderContent = (content: string) => {
  switch (content) {
    case "CheckupsList":
      return <CheckupsList />;
    case "CheckupDetail":
      return <CheckupsDetail />;
    case "PatientProfile":
      return <PatientProfile />;
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
