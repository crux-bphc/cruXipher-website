import QuestionViewer from "../components/QuestionViewer";

const QuestionPage = () => {
  return (
    <div className="flex py-16">
      <div className="min-w-4/6">
        <QuestionViewer />
      </div>
      <div className="pr-16 pl-8 max-w-2/6 border-l-2 border-dashed border-opacity-30 border-white">
        {"This is where the other questions should go. ".repeat(5)}
      </div>
    </div>
  );
};

export default QuestionPage;
