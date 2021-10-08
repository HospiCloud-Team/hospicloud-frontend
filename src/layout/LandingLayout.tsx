import { ReactNode } from "react";
import LandingHeader from "../components/LandingHeader";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <LandingHeader />
      <div className="container-fluid container-md my-4">{children}</div>
    </>
  );
};

export default LandingLayout;
