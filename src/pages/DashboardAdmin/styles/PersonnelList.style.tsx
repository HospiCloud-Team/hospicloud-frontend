import styled from "@emotion/styled";

export const PersonnelContainer = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h5`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const AddButton = styled.button`
  border-radius: 50px;
  display: flex;
  justify-content: flex-end;
  &:hover {
    animation: extend linear 1 normal forwards;
    .TextAfterHover {
      font-size: 1rem;
      display: initial;
    }

    .buttonText {
      display: none;
    }
  }

  @keyframes extend {
    from {
      display: flex;
    }
    to {
      display: flex;
    }
  }

  .TextAfterHover {
    display: none;
  }

  .buttonText {
    font-size: 1rem;
  }
`;

export const Border = styled.div`
  margin-top: 5px;
  border: 1px solid #d3d3d3;
  width: 100%;
`;
