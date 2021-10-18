import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";

const DashboardAdmin = () => {
  return (
    <DashboardLayout userRole={roles.ADMIN}>
      <div>Admin</div>
    </DashboardLayout>
  );
};

export default DashboardAdmin;
