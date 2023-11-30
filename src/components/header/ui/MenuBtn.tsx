import { useNavContext } from "./NavContext";

// TODO: move onClick logic to it's parent

type MenuBtnProps = {
  onClickHandler: () => void;
};

export default function MenuBtn({ onClickHandler }: MenuBtnProps) {
  return (
    <div
      onClick={onClickHandler}
      role="button"
      className="group flex flex-col gap-y-2 cursor-pointer items-end "
    >
      <div className="w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-7 h-[2px] bg-white transition-all"></div>
    </div>
  );
}
