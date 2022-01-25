import { ReactNode } from "react";
import LandingHeader from "../components/LandingHeader";

interface LandingLayoutProps {
  children: ReactNode;
  displayHeader?: boolean;
}

const LandingLayout = ({ children, displayHeader }: LandingLayoutProps) => {
  return (
    <>
      {displayHeader === false ? <></> : <LandingHeader />}
      <div className="container-fluid container-md my-4">{children}</div>
    </>
  );
};

export default LandingLayout;
