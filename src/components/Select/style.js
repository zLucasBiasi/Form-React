import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 30rem;
  font-size: 2rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Select = styled.select`
  height: 5rem;
`;
