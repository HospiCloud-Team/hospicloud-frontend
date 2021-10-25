import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";
import AddTemplate from "./components/AddTemplate";

interface DashboardAdminProps {
  content: "AddTemplate" | "TemplatesList";
}

const renderContent = (content: string) => {
  switch (content) {
    // case "TemplatesList":
    //   return <CheckupsList />;
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
