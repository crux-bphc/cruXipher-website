import { memo } from "react";
import twemoji from "twemoji";

const Twemoji = ({ emoji }: { emoji: string }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse<string>(emoji, {
        folder: "svg",
        ext: ".svg",
      }),
    }}
  />
);

export default memo(Twemoji);
