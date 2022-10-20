import { Link } from "react-router-dom";

type Props = {
  linkText: string;
  url: string;
  textColor?: string;
};

const LinkButton = ({ linkText, url, textColor = "text-white" }: Props) => {
  return (
    <Link
      to={url}
      className={`${textColor} text-[20px] hover:underline underline-offset-4`}
    >
      [{linkText}]
    </Link>
  );
};

export default LinkButton;
