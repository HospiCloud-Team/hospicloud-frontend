import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import AddTemplate from "./components/AddTemplate";
import ManageHospital from "./components/ManageHospital";
import PersonnelList from "./components/Personnel/PersonnelList";
import AddAdminPersonnel from "./components/Personnel/AddAdminPersonnel";
import AddDoctorPersonnel from "./components/Personnel/AddDoctorPersonnel";
import { PersonnelDoctorDetail } from "./components/Personnel/PersonnelDoctorDetail";
import { PersonnelAdminDetail } from "./components/Personnel/PersonnelAdminDetail";
import TemplatesList from "./components/TemplatesList";
import EditTemplate from "./components/EditTemplate";
import { HospitalDetailByAdmin } from "./components/ManageHospital/components/HospitalDetailByAdmin";
import { AdminProfile } from "./components/AdminProfile";

interface DashboardAdminProps {
  content:
    | "ManageHospital"
    | "PersonnelList"
    | "AddAdminPersonnel"
    | "AddDoctorPersonnel"
    | "PersonnelDoctorDetail"
    | "PersonnelAdminDetail"
    | "TemplatesList"
    | "AddTemplate"
    | "EditTemplate"
    | "HospitalDetail"
    | "AdminProfile";
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
    case "PersonnelDoctorDetail":
      return <PersonnelDoctorDetail />;
    case "PersonnelAdminDetail":
      return <PersonnelAdminDetail />;
    case "HospitalDetail":
      return <HospitalDetailByAdmin />;
    case "AdminProfile":
      return <AdminProfile />;
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
