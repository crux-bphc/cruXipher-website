type Props = {
  linkText: string;
  url: string;
  textColor?: string;
};

const LinkButton = ({ linkText, url, textColor = "text-white" }: Props) => {
  return (
    <a
      href={url}
      className={`${textColor} text-[20px] hover:underline underline-offset-4`}
    >
      [{linkText}]
    </a>
  );
};

export default LinkButton;
