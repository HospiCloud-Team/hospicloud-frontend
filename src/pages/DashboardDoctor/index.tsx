import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";

const DashboardDoctor = () => {
  return (
    <DashboardLayout userRole={roles.DOCTOR}>
      <div>Doctor</div>
    </DashboardLayout>
  );
};

export default DashboardDoctor;
