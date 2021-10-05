import { ReactNode } from "react";
import LandingHeader from "../components/LandingHeader";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <LandingHeader />
      <div className="container-fluid container-md">{children}</div>
    </>
  );
};

export default LandingLayout;
