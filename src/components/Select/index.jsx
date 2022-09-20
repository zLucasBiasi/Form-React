import * as S from "./style";

export const Select = ({ label, options, value, setValue, ...props }) => {
  return (
    <S.Label>
      {label}
      <S.Select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Label>
  );
};
