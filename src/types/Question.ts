import Hint from "./Hint";

export default interface Question {
  slug: string;
  title: string;
  body: string;
  category: string;
  locked: boolean;
  points: number;
}
