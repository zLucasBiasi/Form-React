import * as S from "./style";

export const Radio = ({ label, options, value, setValue, ...props }) => {
  return (
    <>
      <S.WrapperCollum>
        {label}
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
              {...props}
            />
            {option}
          </label>
        ))}
      </S.WrapperCollum>
    </>
  );
};
