import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import AddTemplate from "./components/AddTemplate";
import ManageHospital from "./components/ManageHospital";
import PersonnelList from "./components/PersonnelList";

interface DashboardAdminProps {
  content: "ManageHospital" | "AddTemplate" | "PersonnelList";
}

const renderContent = (content: string) => {
  switch (content) {
    case "ManageHospital":
      return <ManageHospital />;
    case "AddTemplate":
      return <AddTemplate />;
    case "PersonnelList":
      return <PersonnelList />;
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
