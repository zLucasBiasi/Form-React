import styled, { css } from "styled-components";

const modifyWrapper = {
  error: () => css`
    background-color: red;
  `,
  aproved: () => css`
    background-color: green;
  `,
};

export const Button = styled.button`
  ${({ status }) => css`
    background-color: gray;
    padding: 2rem 4rem;
    color: white;
    margin-top: 2rem;
    border: none;
    ${status && modifyWrapper[status]()}
  `}
`;
