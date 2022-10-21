import type { LoaderFunctionArgs } from "react-router-dom";
import Question from "../types/Question";

export default function QuestionLoader({
  params,
}: LoaderFunctionArgs): Question {
  return {
    slug: "i-got-a-in-cs-f111-can-i-get-inducted",
    title: "I got A in CS F111 can I get inducted",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet pellentesque diam sed rhoncus. Duis id vestibulum neque. Praesent tincidunt mollis convallis. Donec viverra dignissim orci et eleifend. Sed rhoncus ac erat in dictum. Proin convallis commodo nisi. Praesent orci ante, lobortis eget pretium sit amet, faucibus quis risus. Nunc sollicitudin neque eget elit iaculis, quis condimentum magna tempus. Sed imperdiet odio sit amet convallis bibendum. In imperdiet quam vitae lectus scelerisque dictum. Fusce et lacinia erat, ac tristique diam. Nulla ut ornare augue.\nAenean et magna purus. In tincidunt nisi non pretium sollicitudin. Etiam maximus scelerisque est, id luctus nunc viverra ut. Donec ut egestas purus. Nulla vel pellentesque ante. Nunc mattis, justo id varius sagittis, risus lorem facilisis velit, vel efficitur eros tortor ac quam. Nulla sit amet est sed nunc porttitor porta. Aliquam sit amet erat dapibus risus porttitor varius. Etiam egestas nunc nisi, in lacinia sem eleifend eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam et orci vitae lorem ultricies tincidunt sit amet et felis. Proin sed euismod erat.",
    category: "Miscellaneous",
    locked: false,
    points: 100,
    attachments: [],
    hints: [],
  };
}
