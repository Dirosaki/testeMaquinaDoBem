import styled from "styled-components";

export const HeaderContainer = styled("header")<{ active: boolean }>`
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
  div {
    display: flex;
    align-items: center;
    span {
      font-size: 0.9375rem;
      font-weight: 400;
      color: var(--color-text);
    }
    .switch {
      position: relative;
      margin-left: 8px;
      display: flex;
      align-items: center;
      min-height: 1.375rem;
      min-width: 2.375rem;
      background: ${(props) =>
        props.active ? "var(--color-green)" : "var(--color-text)"};
      border-radius: 50px;
      border: none;
      span {
        position: absolute;
        left: 0.175rem;
        height: 1.1rem;
        width: 1.1rem;
        background: var(--color-white);
        border-radius: 1.2rem;
        transform: ${(props) =>
          props.active ? "translateX(calc(100% - 0.12rem))" : "translateX(0)"};
        transition: 0.3s;
      }
    }
  }

  @media (max-width: 1100px) {
    width: 660px;
  }

  @media (max-width: 700px) {
    width: 80vw;
    flex-direction: column;
    h1 {
      text-align: center;
    }
    div {
      margin: 1rem;
    }
  }
`;
