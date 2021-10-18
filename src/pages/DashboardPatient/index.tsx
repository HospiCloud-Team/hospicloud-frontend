import DashboardLayout from "../../layout/DashboardLayout";
import roles from "../../constants/constantsRoles.json";

const DashboardPatient = () => {
  return (
    <DashboardLayout userRole={roles.PATIENT}>
      <div>Patient</div>
    </DashboardLayout>
  );
};

export default DashboardPatient;
