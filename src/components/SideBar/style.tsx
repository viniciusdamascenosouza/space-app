import styled from "styled-components";

export const ListStyled = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  column-gap: 1em;
  align-items: center;
`;

export const SidebarLink = styled.a`
  color: #d9d9d9;
  text-decoration: none;
`;

export const IconSideBar = styled.img`
  &:hover{
    background-color: #C98CF1 50%;
  }
`;

export const FirstIconSideBar = styled(IconSideBar)`
  background-color: #7b78e5;
  padding: 4px;
  border-radius: 6px;
`;
