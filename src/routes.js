//copy
import de from "../src/assets/copy/de.json";

const copyNavbar = de.routes;

const routes = [
  {
    name: copyNavbar.services.head,
    route: "",
  },
  {
    name: copyNavbar.portfolio,
    route: "",
  },
  {
    name: copyNavbar.about.title,
    route: "",
    collapse: [
      {
        name: copyNavbar.about.aboutUs,
        route: "",
      },
      {
        name: copyNavbar.about.contactUs,
        route: "",
      },
      {
        name: copyNavbar.about.partner,
        route: "",
      },
    ],
  },
];

export default routes;
