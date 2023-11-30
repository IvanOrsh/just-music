import { Link } from "react-scroll";

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
    path: "contact",
    name: "Contact",
  },
];

export default function Nav({ containerStyles, linkStyles }: NavProps) {
  return (
    <nav>
      <ul className={`${containerStyles}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${linkStyles} cursor-pointer border-2 border-transparent`}
              spy
              smooth
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
