import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { IHospital } from "../../../models/IHospital";
import routes from "../../../router/constantRoutes.json";

const OverflowText = styled.p`
  height: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CroppedImage = styled.img`
  width: 286;
  height: 138;
  object-fit: cover;
`;

interface HospitalItemProps {
  hospital: IHospital;
}

const HospitalItem = ({ hospital }: HospitalItemProps) => {
  const history = useHistory();

  return (
    <div className="col-12 col-lg-3 col-md-4 col-sm-6 card">
      {/* <CroppedImage
        src={hospital.image}
        alt="hospital"
        className="card-img-top"
      /> */}
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
    </div>
  );
};

export default HospitalItem;
