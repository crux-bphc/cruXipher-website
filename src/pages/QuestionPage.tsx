import QuestionFragment from "../components/QuestionFragment";
import { Accordion } from "@mantine/core";
import { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";
import { Notification } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";
import { useNavigate, useParams } from "react-router-dom";
import Question from "../types/Question";
import { useGlobalContext } from "../context/globalContext";

const QuestionPage = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("token")) navigate("/login");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [questionsList, setQuestionsList] = useState(
    [] as {
      topic: string;
      points: number;
      questions: {
        slug: string;
        title: string;
        points: number;
        locked: boolean;
      }[];
    }[]
  );
  const [currentQuestion, setCurrentQuestion] = useState({} as Question);
  const [accordionValue, setAccordionValue] = useState<string | null>(
    currentQuestion.category
  );
  const params = useParams();

  useEffect(() => {
    const loadQuestion = async () => {
      const result = await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") +
          "/api/questions/" +
          params.slug,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          mode: "cors",
        }
      );
      const json = await result.json();
      if (result.status === 200) {
        setIsLoaded(true);
        setCurrentQuestion(json);
        setAccordionValue(json.category);
      } else {
        setIsLoaded(true);
        setError(error);
      }
    };
    const loadQuestions = async () => {
      const result = await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") + "/api/questions",
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          mode: "cors",
        }
      );
      const json = await result.json();
      if (result.status === 200) {
        setIsLoaded(true);
        setQuestionsList(json);
      } else {
        setIsLoaded(true);
        setError(error);
      }
    };
    loadQuestion();
    loadQuestions();
  }, []);

  return (
    <div className="flex py-16">
      <div className="max-w-6xl">
        {isLoaded && <QuestionFragment question={currentQuestion} />}
        {isLoaded || <div>Loading...</div>}
      </div>
      <div className="pr-16 pl-8 border-l-2 border-dashed border-opacity-30 border-white w-full">
        <h3 className="text-3xl font-bold text-center pb-8">Problem List</h3>

        <Accordion
          multiple={false}
          value={accordionValue}
          onChange={setAccordionValue}
          classNames={{
            item: "border-none",
            control: "text-white text-bold font-mono text-xl",
            content: "text-white font-mono",
          }}
        >
          {questionsList.map((domain, idx) => {
            return (
              // TODO:Change chevron size after a meet
              <Accordion.Item value={domain.topic} key={domain.topic}>
                <Accordion.Control>{domain.topic}</Accordion.Control>
                <Accordion.Panel>
                  <ol className="list-decimal pl-8">
                    {domain.questions.map((question, idx) => (
                      <li
                        className={
                          question.slug +
                          "font-normal" +
                          (question.locked == true
                            ? " text-grey"
                            : " text-white")
                        }
                        key={question.slug}
                      >
                        {question.locked ? (
                          <span>
                            {question.title} [{question.points}] 🔒
                          </span>
                        ) : (
                          <LinkButton
                            linkText={`${question.title} [${question.points}]`}
                            url={`/question/${question.slug}`}
                            textColor={"text-white"}
                            textSize={"text-base"}
                            className="hover:bg-white decoration-white/0 hover:decoration-white/100"
                          />
                        )}
                      </li>
                    ))}
                  </ol>
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
      <div className="fixed bottom-8 right-8">
        <Notification
          icon={<IconCheck size={18} />}
          color="teal"
          title="Correct answer"
          radius="xs"
          className="my-4"
        >
          beri gud
        </Notification>

        <Notification
          icon={<IconX size={18} />}
          color="red"
          title="Wrong notif or some shit idk"
          radius="xs"
          className="my-4"
        >
          Wrong answer dumbfuck
        </Notification>
      </div>
    </div>
  );
};

export default QuestionPage;
