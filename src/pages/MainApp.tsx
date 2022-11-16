import Twemoji from "../components/Twemoji";
import LinkButton from "../components/LinkButton";
import { useEffect, useState } from "react";

const MainApp = () => {
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

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/api/questions", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuestionsList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="px-8 pt-16 pb-8 flex justify-between md:flex-col lg:flex-row">
        <ol className="px-32 list-[upper-alpha] text-3xl lg:max-w-5xl md:max-w-3xl">
          {questionsList.map((domain) => {
            return (
              <li key={domain.topic}>
                <div className="py-4 flex flex-col">
                  <span className="text-3xl font-medium">
                    {domain.topic} [{domain.points}]
                  </span>
                  <ol className="list-decimal px-12">
                    {domain.questions.map((question) => {
                      return (
                        <li
                          className={
                            question.slug +
                            " text-2xl pt-1 font-normal" +
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
                              textSize="text-2xl"
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
