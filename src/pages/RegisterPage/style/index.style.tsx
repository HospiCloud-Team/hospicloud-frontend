import styled from "@emotion/styled";

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
`;

export const FixedBox = styled.div`
  display: block;
  width: 55rem;
  height: 35rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
  background-color: white;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  border-radius: 20px;
`;

export const Icon = styled.img`
  width: 230px;
  height: 230px;
`;

export const RegisterTitle = styled.h3`
  color: #067bc2;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;
