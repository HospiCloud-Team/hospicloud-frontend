import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import AddTemplate from "./components/AddTemplate";
import ManageHospital from "./components/ManageHospital";
import PersonnelList from "./components/PersonnelList";
import AddAdminPersonnel from "./components/AddAdminPersonnel";

interface DashboardAdminProps {
  content:
    | "ManageHospital"
    | "AddTemplate"
    | "PersonnelList"
    | "AddAdminPersonnel";
}

const renderContent = (content: string) => {
  switch (content) {
    case "ManageHospital":
      return <ManageHospital />;
    case "AddTemplate":
      return <AddTemplate />;
    case "PersonnelList":
      return <PersonnelList />;
    case "AddAdminPersonnel":
      return <AddAdminPersonnel />;
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
