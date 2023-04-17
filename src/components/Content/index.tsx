import { Link } from "react-router-dom";
import { Projects } from "../Projects";
import {
  About,
  BreakLine,
  Container,
  ImageContainer,
  Texts,
  Title,
} from "./styles";

export const Content = () => (
  <Container>
    <About>
      <Title>Welcome here 👋</Title>

      <Texts>
        <p>
          My name is <strong>Davi Silva</strong> and I'm a front-end developer
          based in Icapuí - CE, Brazil.
        </p>

        <BreakLine />

        <p>
          I have been developing software focused on Frontend Development using
          React, NextJS, Styled Components, Storybook, Typescript, Jest, and
          Testing Library. I have great skills in problem-solving, leadership
          and teamwork, giving and receiving feedback, and communication.
        </p>

        <BreakLine />

        <p>Graduated in Systems Analysis and Development.</p>

        <BreakLine />

        <p>
          I'm currently working remotely as a Front End at{" "}
          <Link to={"https://www.midway.com.br/"}>Midway</Link>.
        </p>
      </Texts>
    </About>

    <ImageContainer>
      <img src="https://github.com/davi1985.png" alt="" />
    </ImageContainer>
  </Container>
);
