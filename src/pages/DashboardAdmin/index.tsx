import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import AddTemplate from "./components/AddTemplate";
import ManageHospital from "./components/ManageHospital";

interface DashboardAdminProps {
  content: "ManageHospital" | "AddTemplate";
}

const renderContent = (content: string) => {
  switch (content) {
    case "ManageHospital":
      return <ManageHospital />;
    case "AddTemplate":
      return <AddTemplate />;
    default:
      break;
  }
};

const DashboardAdmin = ({ content }: DashboardAdminProps) => {
  return (
    <DashboardLayout userRole={roles.ADMIN}>
      {renderContent(content)}
    </DashboardLayout>
  );
};

export default DashboardAdmin;
