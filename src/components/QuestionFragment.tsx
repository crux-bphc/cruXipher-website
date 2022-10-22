import Question from "../types/Question";

const QuestionFragment = ({ question }: { question: Question }) => {
  return (
    <>
      {/* <span>Real slug: {params.slug}</span> */}
      <div className="pl-16 pr-8 flex flex-col">
        <span className="text-3xl font-bold">
          {question.title} [{question.points} points]
        </span>
        <p className="text-xl font-normal pt-4 block">
          {question.body.split("\n").map((x) => (
            <>
              {x}
              <br />
              <br />
            </>
          ))}
        </p>
        <div className="overflow-hidden">
          <button className="border-white border-2 rounded-none bg-black h-16 py-4 float-right px-12 focus:outline-none text-xl ml-8 hover:bg-grey/10 transition-all ease-in-out duration-300">
            SUBMIT
          </button>
          <span className="block overflow-hidden">
            <input
              className="border-white border-2 rounded-none w-full bg-black h-16 py-4 px-4 text-xl focus:outline-none focus:bg-grey/10 transition-all ease-in-out duration-300"
              placeholder="Enter flag here"
            />
          </span>
        </div>
        <button className="border-white border-2 group rounded-none bg-black h-16 my-8 px-4 font-bold text-xl focus:outline-none hover:bg-grey/10 transition-all ease-in-out duration-300">
          <div className="flex">
            <span className="float-left py-4">Click here to get a hint</span>
            <div className="grow"></div>
            <span className="material-symbols-rounded float-right inline-flex items-center text-2xl py-2 group-hover:text-3xl transition-all ease-in-out duration-300">
              arrow_forward_ios
            </span>
          </div>
        </button>
      </div>
      {/* <code>{JSON.stringify(question)}</code> */}
    </>
  );
};

export default QuestionFragment;
