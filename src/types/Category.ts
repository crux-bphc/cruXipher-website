import Question from "./Question";

export default interface Category {
  topic: string;
  points: number;
  questions: Question[];
}
