import { useState } from "react";
import { IconSideBar, ListStyled, SidebarLink } from "./style";

const SideBar = () => {
  const [linkSidebarSelected, setLinkSidebarSelected] = useState();

  return (
    <aside>
      <nav>
        <ul style={{ display: "flex", flexDirection: "column", rowGap: "1em" }}>
          <ListStyled>
            <IconSideBar src="/src/assets/home.png" alt="" />
            <SidebarLink href="">início</SidebarLink>
          </ListStyled>
          <ListStyled>
            <IconSideBar src="/src/assets/visible.png" alt="" />
            <SidebarLink href="">Mais vistas</SidebarLink>
          </ListStyled>
          <ListStyled>
            <IconSideBar src="/src/assets/moreLikes.png" alt="" />
            <SidebarLink href="">Mais curtidas</SidebarLink>
          </ListStyled>
          <ListStyled>
            <IconSideBar src="/src/assets/news.png" alt="" />
            <SidebarLink href="">Novas</SidebarLink>
          </ListStyled>
          <ListStyled>
            <IconSideBar src="/src/assets/genial.png" alt="" />
            <SidebarLink href="">Surpreenda-me</SidebarLink>
          </ListStyled>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
