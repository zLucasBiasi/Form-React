import * as S from "./style";

export const Button = ({ status, children, type }) => (
  <S.Button status={status} type={type}>
    {children}
  </S.Button>
);
