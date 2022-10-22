import LinkButton from "../components/LinkButton";
import { useQuestionsContext } from "../providers/QuestionsProvider";

const MainApp = () => {
  const { QuestionList } = useQuestionsContext();
  return (
    <div className="px-32 pt-16 pb-8">
      <ol className="list-[upper-alpha] text-4xl">
        {QuestionList.map((domain) => {
          return (
            <li key={domain.topic}>
              <div className="py-4 flex flex-col">
                <span className="text-4xl font-medium">
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
};

export default MainApp;
