import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import CheckupsList from "./components/CheckupsList";
import CheckupsDetail from "./components/CheckupsDetail";
import AddCheckup from "./components/AddCheckup";

interface DashboardDoctorProps {
  content: "CheckupsList" | "CheckupDetail" | "AddCheckup";
}

const renderContent = (content: string) => {
  switch (content) {
    case "CheckupsList":
      return <CheckupsList />;
    case "CheckupDetail":
      return <CheckupsDetail />;
    case "AddCheckup":
      return <AddCheckup />;
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
