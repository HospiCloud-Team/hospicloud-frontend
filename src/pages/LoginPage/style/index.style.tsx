import styled from "@emotion/styled";

export const MultiBg = styled.div`
  height:50rem;
  background: repeating-linear-gradient(90deg, #99DAFF, #99DAFF 45.9%, white 46.1%, white 100%);
  display: flex;
`;

export const FixedBox = styled.div`
  display: block;
  width: 50rem;
  height: 30rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  top: 50%; 
  left: 50%;
  transform: translate(-80%,-50%);
  background-color: white;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  border-radius: 20px;
`;

export const ContainerDiv = styled.div`
  margin-top: 7%;
  margin-bottom: 5%;
  height:100%;
`;

export const Icon = styled.img`
  width: 230px;
  height: 230px;
`;

export const Card = styled.div`
    right: 0;
    top: 0;
    // height: 100%;
    border-style: solid;
    border-color: gray;
    border-width: 1px;
    border-radius: 20px;
`;

export const LoginTitle = styled.h3`
  color: #067BC2;
`;