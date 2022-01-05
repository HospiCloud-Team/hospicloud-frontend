import styled from "@emotion/styled";

export type ErrorMessageProps = {
  message: string;
};

const Error = styled.div`
  color: #d8000c;
`;

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <Error>{message}</Error>;
};
