import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ContactList, HeaderContainer, ListItem, Logo } from "./styles";

export const Header = () => (
  <HeaderContainer>
    <Logo>
      <Link to={"/"}>DS</Link>
    </Logo>

    <ContactList>
      <ListItem>
        <Link to={"mailto:'davisilvaphoto@gmail.com'"} target={"_blank"}>
          <AiOutlineMail size={32} />
        </Link>
      </ListItem>

      <ListItem>
        <Link to={"https://www.linkedin.com/in/davisilva85/"} target={"_blank"}>
          <AiFillLinkedin size={32} />
        </Link>
      </ListItem>

      <ListItem>
        <Link to={"https://github.com/davi1985"} target={"_blank"}>
          <AiFillGithub size={32} />
        </Link>
      </ListItem>
    </ContactList>
  </HeaderContainer>
);
