import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import CheckupsList from "./components/CheckupsList";
import CheckupsDetail from "./components/CheckupsDetail";

interface DashboardDoctorProps {
  content: "CheckupsList" | "CheckupDetail";
}

const renderContent = (content: string) => {
  switch (content) {
    case "CheckupsList":
      return <CheckupsList />;
    case "CheckupDetail":
      return <CheckupsDetail />;
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
