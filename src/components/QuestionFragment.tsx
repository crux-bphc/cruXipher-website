import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons";
import { useRef } from "react";
import { useGlobalContext } from "../context/globalContext";
import Question from "../types/Question";
import CustomInput from "./CustomInput";

const QuestionFragment = ({ question }: { question: Question }) => {
  const { globalDispatch, globalState } = useGlobalContext();
  const flagRef = useRef<HTMLInputElement>(null);

  const showHint = async () => {
    const questionDetails = {
      slug: question.slug,
    };
    const response = await fetch(
      (import.meta.env.VITE_BACKEND_URL
        ? import.meta.env.VITE_BACKEND_URL
        : "") + "/api/hint",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        mode: "cors",
        body: JSON.stringify(questionDetails),
      }
    );
    const result = await response.json();
    if (response.status === 200) {
      openModal({
        title: <span className="text-xl font-mono font-bold">Hint</span>,
        centered: true,
        children: (
          <>
            <span className="text-lg font-mono">{result.message}</span>
            <br />
            <br />
            <span className="text-lg font-mono">{result.points}</span>
          </>
        ),
        onClose: closeAllModals,
      });
    } else {
      closeAllModals();
      globalDispatch({
        type: "send notification",
        payload: {
          disallowClose: false,
          autoClose: 3000,
          className: "pb-24 mb-24",
          color: "red",
          title: result.message,
          radius: "xs",
          icon: <IconX size={18} />,
          id: "submit-flag",
          loading: false,
          message: undefined,
        },
      });
    }
  };

  const handleHint = async () => {
    const questionDetails = {
      slug: question.slug,
    };
    const response = await fetch(
      (import.meta.env.VITE_BACKEND_URL
        ? import.meta.env.VITE_BACKEND_URL
        : "") + "/api/hintused",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        mode: "cors",
        body: JSON.stringify(questionDetails),
      }
    );
    const result = await response.json();
    if (response.status === 200) {
      if (result.message) {
        await showHint();
      } else {
        openConfirmModal({
          title: (
            <span className="text-xl font-bold font-mono">
              Are you sure you want to take a hint?
            </span>
          ),
          centered: true,
          children: (
            <span className="text-lg font-mono">
              Taking a hint will incur a penalty of 20 points. Do you want to
              proceed?
            </span>
          ),
          labels: {
            confirm: <span className="font-mono">Confirm</span>,
            cancel: <span className="font-mono">Cancel</span>,
          },
          confirmProps: { color: "red" },
          size: "lg",
          onConfirm: async () => await showHint(),
          closeOnConfirm: false,
        });
      }
    } else {
      globalDispatch({
        type: "send notification",
        payload: {
          disallowClose: false,
          autoClose: 3000,
          className: "pb-24 mb-24",
          color: "red",
          title: result.message,
          radius: "xs",
          icon: <IconX size={18} />,
          id: "submit-flag",
          loading: false,
          message: undefined,
        },
      });
    }
  };

  const submitQuestion = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    globalDispatch({
      type: "send notification",
      payload: {
        disallowClose: true,
        autoClose: false,
        className: "pb-24 mb-24",
        color: "blue",
        title: "Submitting answer...",
        radius: "xs",
        icon: <IconCheck size={18} />,
        id: "submit-flag",
        loading: true,
        message: undefined,
      },
    });
    const answerDetails = {
      slug: question.slug,
      flag: flagRef.current?.value,
    };

    const response = await fetch(
      (import.meta.env.VITE_BACKEND_URL
        ? import.meta.env.VITE_BACKEND_URL
        : "") + "/api/submit",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        mode: "cors",
        body: JSON.stringify(answerDetails),
      }
    );
    const result = await response.json();
    if (response.status === 200) {
      globalDispatch({
        type: "update notification",
        payload: {
          disallowClose: false,
          autoClose: 3000,
          className: "pb-24 mb-24",
          color: "teal",
          title: "Correct answer!",
          radius: "xs",
          icon: <IconCheck size={18} />,
          id: "submit-flag",
          loading: false,
          message: result.message,
        },
      });
    } else {
      globalDispatch({
        type: "update notification",
        payload: {
          disallowClose: false,
          autoClose: 3000,
          className: "pb-24 mb-24",
          color: "red",
          title: result.message,
          radius: "xs",
          icon: <IconX size={18} />,
          id: "submit-flag",
          loading: false,
          message: undefined,
        },
      });
    }
  };
  return (
    <>
      {/* <span>Real slug: {params.slug}</span> */}
      <div className="pl-16 pr-8 flex flex-col">
        <span className="text-3xl font-bold">
          {question.title} [{question.points} points]
        </span>
        <p className="text-xl font-normal pt-4 block">
          {question.body.split("\\n").map((paragraphText) => (
            <>
              {paragraphText}
              <br />
              <br />
            </>
          ))}
        </p>
        <div className="overflow-hidden">
          <form onSubmit={submitQuestion}>
            <button className="border-white border-2 rounded-none bg-black h-16 py-4 float-right px-12 focus:outline-none text-xl ml-8 hover:bg-grey/10 transition-all ease-in-out duration-300">
              SUBMIT
            </button>
            <CustomInput placeholder="Enter flag here" inputRef={flagRef} />
          </form>
        </div>
        <button
          onClick={handleHint}
          className="border-white border-2 group rounded-none bg-black h-16 my-8 px-4 font-bold text-xl focus:outline-none hover:bg-grey/10 transition-all ease-in-out duration-300"
        >
          <div className="flex">
            <span className="float-left py-4">Click here to get a hint</span>
            <div className="grow"></div>
            <span className="material-symbols-rounded float-right inline-flex items-center text-2xl py-2 group-hover:text-3xl transition-all ease-in-out duration-300">
              arrow_forward_ios
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default QuestionFragment;
