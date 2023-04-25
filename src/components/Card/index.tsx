import { Link } from "react-router-dom";
import { Container, Description, Links, Title } from "./styles";

type CardProps = {
  name: string;
  repository: string;
  demo: string;
  description: string;
};

export const Card = ({ name, repository, demo, description }: CardProps) => (
  <Container>
    <Title>👉 {name}</Title>

    <Description>{description}</Description>

    <Links>
      <Link to={repository} target="_blank">
        Repository
      </Link>

      <Link to={demo} target="_blank">
        Demo
      </Link>
    </Links>
  </Container>
);
