import { useLoaderData, useParams } from "react-router-dom";
import Question from "../types/Question";

const QuestionView = () => {
  let params = useParams();
  let todo = useLoaderData() as Question;
  return (
    <>
      <span>Question: {params.slug}</span>
      <code>{JSON.stringify(todo)}</code>
    </>
  );
};

export default QuestionView;
