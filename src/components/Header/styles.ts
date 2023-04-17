import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 2rem;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    letter-spacing: 2px;
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ListItem = styled.li``;
