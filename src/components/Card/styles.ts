import styled from "styled-components";

export const Container = styled.div`
  color: inherit;
  padding: 1rem;
  max-width: 320px;
  height: 190px;
  width: 100%;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @keyframes vibrate {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-1deg);
    }
    20% {
      transform: rotate(1deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(1deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    60% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotate(-1deg);
    }
    80% {
      transform: rotate(1deg);
    }
    90% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-1deg);
    }
  }

  &:hover {
    animation: vibrate 0.8s;
  }
`;

export const Title = styled.h3`
  padding: 1rem 0;
  font-weight: 400;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-300"]};
  position: relative;

  a {
    color: ${(props) => props.theme["yellow-500"]};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  font-size: 0.9rem;
`;
