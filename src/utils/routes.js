import { HomeView } from "../views/HomeView";
import { CharacterSearch } from "../views/CharacterSearch";
import { CharacterDetails } from "../views/CharacterDetails";
import { About } from "../views/About";

export const routes = [
  {
    path: "/",
    element: <HomeView />,
    title: "Home",
    isNavLink: true,
  },
  {
    path: "about",
    element: <About />,
    title: "About",
    isNavLink: true,
  },
  {
    path: "characters",
    element: <CharacterSearch />,
    title: "Character Search",
    isNavLink: true,
  },
  {
    path: "characters/:_id",
    element: <CharacterDetails />,
    title: "Film",
    isNavLink: false,
  },
];
