import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: ${(props) => props.theme["purple-500"]};

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const CardsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
`;
