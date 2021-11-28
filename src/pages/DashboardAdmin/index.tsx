import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import AddTemplate from "./components/AddTemplate";
import ManageHospital from "./components/ManageHospital";
import PersonnelList from "./components/PersonnelList";
import AddAdminPersonnel from "./components/AddAdminPersonnel";
import AddDoctorPersonnel from "./components/AddDoctorPersonnel";
import TemplatesList from "./components/TemplatesList";
import EditTemplate from "./components/EditTemplate";

interface DashboardAdminProps {
  content:
    | "ManageHospital"
    | "PersonnelList"
    | "AddAdminPersonnel"
    | "AddDoctorPersonnel"
    | "TemplatesList"
    | "AddTemplate"
    | "EditTemplate";
}

const renderContent = (content: string) => {
  switch (content) {
    case "ManageHospital":
      return <ManageHospital />;
    case "TemplatesList":
      return <TemplatesList />;
    case "AddTemplate":
      return <AddTemplate />;
    case "EditTemplate":
      return <EditTemplate />;
    case "PersonnelList":
      return <PersonnelList />;
    case "AddAdminPersonnel":
      return <AddAdminPersonnel />;
    case "AddDoctorPersonnel":
      return <AddDoctorPersonnel />;
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
