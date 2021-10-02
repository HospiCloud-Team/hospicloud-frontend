import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { IHospital } from "../../../models/IHospital";
import routes from "../../../router/constantRoutes.json";

const FixedBox = styled.div`
  width: 18rem;
  height: 18rem;
`;

const OverflowText = styled.p`
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface HospitalItemProps {
  hospital: IHospital;
}

const HospitalItem = ({ hospital }: HospitalItemProps) => {
  const history = useHistory();

  return (
    <FixedBox className="card me-2 mb-2">
      <img src={hospital.image} alt="hospital" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{hospital.name}</h5>
        <OverflowText className="card-text mb-2">
          {hospital.description}
        </OverflowText>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary btn-sm stretched-link"
            onClick={() =>
              history.push(`${routes.HOSPITALS}/${hospital.id}`, hospital)
            }
          >
            Más Información
          </button>
        </div>
      </div>
    </FixedBox>
  );
};

export default HospitalItem;
