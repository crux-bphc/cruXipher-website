import QuestionViewer from "../components/QuestionViewer";
import { Accordion } from "@mantine/core";
import { useQuestionsContext } from "../providers/QuestionsProvider";
import { useState } from "react";
import LinkButton from "../components/LinkButton";

const QuestionPage = () => {
  const { QuestionList } = useQuestionsContext();
  const [accordionValue, setAccordionValue] = useState<string | null>(null);
  return (
    <div className="flex py-16">
      <div className="max-w-5xl">
        <QuestionViewer />
      </div>
      <div className="pr-16 pl-8 border-l-2 border-dashed border-opacity-30 border-white w-full">
        <h3 className="text-3xl font-bold text-center pb-8">Problem List</h3>

        {QuestionList.map((domain, idx) => {
          return (
            // TODO:Change chevron size after a meet
            <Accordion
              key={idx}
              multiple={false}
              value={accordionValue}
              onChange={setAccordionValue}
              classNames={{
                item: "border-none",
                control: "text-white text-bold font-sans text-xl",
                content: "text-white font-sans",
              }}
            >
              <Accordion.Item value={domain.topic}>
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
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionPage;
