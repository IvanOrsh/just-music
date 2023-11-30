import { RiCloseLine } from "react-icons/ri";

import Nav from "./Nav";

type NavMobileProps = {
  isOpen: boolean;
  onCloseHandler: () => void;
};

export default function NavMobile(props: NavMobileProps) {
  const { isOpen, onCloseHandler } = props;

  return (
    <nav
      className={`${
        isOpen ? "right-0" : "translate-x-full"
      } xl:hidden fixed w-full top-0 bg-black/75 bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 z-20 bottom-0 transition-all duration-500`}
    >
      <div
        onClick={onCloseHandler}
        className="absolute right-4 top-5 cursor-pointer"
      >
        <RiCloseLine className="text-5xl" />
      </div>

      <Nav
        containerStyles="flex flex-col items-center gap-y-8 h-screen justify-center"
        linkStyles="text-3xl uppercase font-bold"
      />
    </nav>
  );
}
