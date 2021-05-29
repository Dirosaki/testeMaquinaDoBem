import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 50px 0 40px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-title);
  }
  span {
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--color-text);
  }
`;
