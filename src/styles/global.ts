import styled, { createGlobalStyle } from "styled-components";

interface ButtonProps {
  margin?: string;
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-neutral: #E6EAF6;
    --color-green: #21D170;
    --color-title: #274264;
    --color-text: #8798AD;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding-bottom: 6.25rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--color-white);
    -webkit-font-smoothing: antialiased;
    div.button {
      display: flex;
      width: 100%;
      @media (max-width: 700px) {
        justify-content: center;
      }
    }
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  gap: 1.875rem 0;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }
`;

export const Button = styled.button`
  margin-top: ${(props: ButtonProps) => props.margin || 0};
  padding: 1rem 1.5rem;
  background: var(--color-white);
  border: 1.5px solid var(--color-green);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-green);

  @media (max-width: 700px) {
    min-width: 235.7px;
    justify-self: center;
  }
`;
