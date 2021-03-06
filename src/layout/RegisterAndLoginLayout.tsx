import styled from "@emotion/styled";

type FixedBoxProps = {
  width?: string;
  height?: string;
};

export const MultiBg = styled.div`
  height: 50rem;
  background: repeating-linear-gradient(
    90deg,
    #99daff,
    #99daff 45.9%,
    white 46.1%,
    white 100%
  );
  display: flex;
  justify-content: center; //center horizontally
  align-items: center; //center vertically
`;

export const FixedBox = styled.div<FixedBoxProps>`
  display: flex;
  ${({ width }) => {
    if (width) {
      return `width: ${width}rem;`;
    }
  }}
  ${({ height }) => {
    if (height) {
      return `height: ${height}rem;`;
    }
  }}
  background-color: white;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  border-radius: 20px;
`;

export const ContainerDiv = styled.div`
  margin-top: 7%;
  margin-bottom: 5%;
  height: 100%;
`;

export const Icon = styled.img`
  width: 230px;
  height: 230px;
`;

export const LoginTitle = styled.h3`
  color: #067bc2;
`;

export const RegisterTitle = styled.h3`
  color: #067bc2;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;
