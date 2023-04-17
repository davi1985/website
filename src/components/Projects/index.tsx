import { projects } from "../../mock/products";
import { Card } from "../Card";
import { CardsContainer, Container, Title } from "./styles";

export const Projects = () => (
  <Container>
    <Title>Some Projects 🚀</Title>

    <CardsContainer>
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </CardsContainer>
  </Container>
);
