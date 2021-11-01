import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { IHospital } from "../../../models/IHospital";
import routes from "../../../router/constantRoutes.json";

const FixedBox = styled.div`
  // width: 18rem;
  height: 13rem;
`;

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
    <FixedBox className="col-12 col-lg-3 col-md-4 col-sm-6 card">
      {/* <CroppedImage
        src={hospital.image}
        alt="hospital"
        className="card-img-top"
      /> */}
      <div className="card-body">
        <h5 className="card-title">{hospital.name}</h5>
        <OverflowText className="card-text mb-2">
          {/* {hospital.description} */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis
          esse expedita, quibusdam architecto dolorem officia ex ipsum similique
          dolorum dolores voluptatum totam rerum quod facere ullam alias nam
          repellendus cumque explicabo iusto consequuntur itaque? Temporibus
          omnis cum neque et doloremque praesentium eum consequatur commodi?
          Facere consequatur fugiat porro quae.
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
