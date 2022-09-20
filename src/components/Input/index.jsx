import * as S from "./style";

export const Input = ({ type, id, label, value, setValue, ...props }) => {
  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        type={type}
        id={id}
        value={value}
        onChange={setValue}
        {...props}
      />
    </>
  );
};
