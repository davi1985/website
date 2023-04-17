import styled from "styled-components";

export const Container = styled.main`
  padding: 8rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const BreakLine = styled.br``;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  position: relative;

  p {
    font-size: 0.9rem;
    font-weight: 100;
    line-height: 1.6;
    text-align: justify;

    a {
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const Texts = styled.div`
  &:before {
    content: " ";
    width: 0.4rem;
    background: linear-gradient(
      0deg,
      ${(props) => props.theme["purple-500"]} 0%,
      ${(props) => props.theme["purple-500"]} 100%
    );
    position: absolute;
    top: 0;
    bottom: 0;
    left: -20px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;

  img {
    max-width: 320px;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 800px) {
    max-width: none;
  }
`;
