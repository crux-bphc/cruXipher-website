import { Link } from "react-router-dom";

type Props = {
  linkText: string;
  url: string;
  textColor?: string;
  textSize?: string;
  className?: string;
};

const LinkButton = ({
  linkText,
  url,
  textColor = "text-white",
  textSize = "text-[20px]",
  className = "",
}: Props) => {
  return (
    <Link
      to={url}
      className={`${textColor} ${textSize} underline underline-offset-4 hover:bg-opacity-20 transition-all ease-in-out duration-300 ${className}`}
    >
      {linkText}
    </Link>
  );
};

export default LinkButton;
