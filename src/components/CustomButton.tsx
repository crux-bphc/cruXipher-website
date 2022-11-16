import { MouseEventHandler } from "react";

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ text, onClick }: Props) => {
  return (
    <>
      <div className="overflow-hidden p-2">
        <button
          onClick={onClick}
          className="w-full border-white border-2  group rounded-none bg-black h-16 my-2 px-4 font-bold text-xl text-center focus:outline-none hover:bg-grey/10 transition-all ease-in-out duration-300"
        >
          <span className="py-4">{text}</span>
        </button>
      </div>
    </>
  );
};

export default CustomButton;
