import styled from "styled-components";

export const CardContainer = styled.div`
  width: 315px;
  background: var(--color-white);
  border: 1.5px solid var(--color-neutral);
  border-radius: 5px;
  header {
    padding: 15px 1.5rem;
    border-bottom: 1.5px solid var(--color-neutral);
    strong {
      font-size: 0.875rem;
      font-weight: 500;
      text-transform: uppercase;
      color: var(--color-text);
    }
  }
  main {
    padding: 24px 1.5rem;
    div:first-child {
      display: flex;
      p {
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--color-title);
      }
      img {
        height: 48px;
        width: 48px;
      }
    }
    p {
      margin-top: 1rem;
      font-size: 0.9375rem;
      color: var(--color-green);
    }
    div:last-child {
      margin-top: 2.25rem;
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
        strong {
          font-size: 1.125rem;
          font-weight: 400;
          color: var(--color-title);
        }
        span {
          margin-left: 8px;
          max-width: 3.75rem;
          font-size: 0.625rem;
          text-transform: uppercase;
          color: var(--color-text);
        }
      }
      button {
        padding: 0.5rem 1rem;
        background: var(--color-green);
        border: none;
        border-radius: 5px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-white);
      }
    }
  }
  footer {
    padding: 15px 1.5rem;
    border-top: 1.5px solid var(--color-neutral);
    p {
      font-size: 0.9375rem;
      font-weight: 400;
      color: var(--color-text);
    }
  }

  @media (min-width: 700px) {
    div:last-child {
      button {
        transition: filter 0.2s;
        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }

  @media (max-width: 360px) {
    width: 80vw;
    main {
      div:first-child {
        align-items: center;
        flex-direction: column-reverse;
        p {
          margin-top: 0.5rem;
        }
      }

      div:last-child {
        margin-top: 1.875rem;
        flex-direction: column;
        text-align: center;
        div {
          margin-bottom: 1rem;
          flex-direction: column;
          span {
            margin-top: 0.25rem;
            margin-left: 0px;
          }
        }
      }
    }
  }
`;
