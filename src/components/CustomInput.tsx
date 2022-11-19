import { Ref } from "react";

interface InputProps {
  placeholder: string;
  className?: string;
  inputRef?: Ref<HTMLInputElement>;
  type?: string;
}

const CustomInput = ({
  placeholder,
  className,
  inputRef,
  type,
}: InputProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <input
        ref={inputRef}
        className="border-white border-2 rounded-none w-full bg-black h-16 py-4 px-4 text-xl focus:outline-none focus:bg-grey/10 transition-all ease-in-out duration-300"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default CustomInput;
