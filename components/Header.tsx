import { FunctionalComponent } from "preact";
import { BiArrowBack } from "https://esm.sh/react-icons@4.8.0/bi?alias=react:preact/compat";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: FunctionalComponent<HeaderProps> = ({ label, showBackArrow }) => {
  const handleBack = () => {};
  return (
    <div class="border-b-[1px] border-gray-500 p-5">
      <div class="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            class="cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h1 class="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;