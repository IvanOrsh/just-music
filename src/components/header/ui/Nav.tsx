import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

// TODO: refactor - must receive links as props

type NavProps = {
  containerStyles?: string;
  linkStyles?: string;
};

const links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discography",
    name: "Discography",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

export default function Nav({ containerStyles, linkStyles }: NavProps) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });

  return (
    <nav>
      <ul className={`${containerStyles}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${linkStyles} cursor-pointer border-2 border-transparent`}
              spy
              smooth={isDesktop}
              activeClass="active"
              offset={-50}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
