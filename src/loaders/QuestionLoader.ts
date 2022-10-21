import type { LoaderFunctionArgs } from "react-router-dom";
import Question from "../types/Question";

export default function QuestionLoader({
  params,
}: LoaderFunctionArgs): Question {
  return {
    slug: "i-got-a-in-cs-f111-can-i-get-inducted",
    title: "I got A in CS F111 can I get inducted",
    body: "You are UNHINGED. Please seek medical attention immediately.",
    category: "Miscellaneous",
    locked: false,
    points: 100,
    attachments: [],
    hints: [],
  };
}
