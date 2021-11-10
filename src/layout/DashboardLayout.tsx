import { ReactNode } from "react";
import DashboardHeader from "../components/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: string;
}

const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  return (
    <>
      <DashboardHeader userRole={userRole} />
      <div className="container-fluid container-md my-4">{children}</div>
    </>
  );
};

export default DashboardLayout;
