import Twemoji from "../components/Twemoji";
import LinkButton from "../components/LinkButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { IconX } from "@tabler/icons";

const MainApp = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("token")) navigate("/login");
  const [isLoaded, setIsLoaded] = useState(false);
  const { globalDispatch } = useGlobalContext();
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

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch(
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
      const result = await res.json();
      if (res.status === 200) {
        setIsLoaded(true);
        setQuestionsList(result);
      } else {
        setIsLoaded(true);
        globalDispatch({
          type: "show error",
          payload: {
            title: result.message,
            icon: <IconX size={18} />,
            message: undefined,
          },
        });
      }
    };
    fetchQuestions();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="px-8 pt-16 pb-8 flex justify-between md:flex-col lg:flex-row">
        <ol className="px-32 list-[upper-alpha] text-2xl lg:max-w-5xl md:max-w-3xl">
          {questionsList.map((domain) => {
            return (
              <li key={domain.topic}>
                <div className="py-4 flex flex-col">
                  <span className="text-2xl font-medium">
                    {domain.topic} [{domain.points}]
                  </span>
                  <ol className="list-decimal px-12">
                    {domain.questions.map((question) => {
                      return (
                        <li
                          className={
                            question.slug +
                            " text-xl pt-1 font-normal" +
                            (question.locked == true
                              ? " text-grey"
                              : " text-white")
                          }
                          key={question.slug}
                        >
                          {question.locked ? (
                            <span>
                              {question.title} [{question.points}]{" "}
                              <Twemoji emoji="🔒" />
                            </span>
                          ) : (
                            <LinkButton
                              linkText={`${question.title} [${question.points}]`}
                              url={`/question/${question.slug}`}
                              textColor={"text-white"}
                              textSize="text-xl"
                              className="hover:bg-white decoration-white/0 hover:decoration-white/100"
                            />
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};

export default MainApp;
