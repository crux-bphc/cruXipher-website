import React, { useContext } from "react";

type Props = {
  children: JSX.Element;
};

const QuestionList = [
  {
    topic: "Web Dev",
    points: 580,
    questions: [
      {
        slug: "lorem-ipsum",
        title: "Lorem Ipsum",
        points: 100,
        locked: false,
      },
      {
        slug: "lorem-ipsum-dolor-sit",
        title: "Lorem Ipsum Dolor Sit",
        points: 120,
        locked: false,
      },
      {
        slug: "lorem-ipsum-dolor-sit-amet",
        title: "Lorem Ipsum Dolor Sit Amet",
        points: 160,
        locked: true,
      },
      {
        slug: "delete-the-entire-website",
        title: "Delete the entire website",
        points: 200,
        locked: true,
      },
    ],
  },
  {
    topic: "Python",
    points: 400,
    questions: [
      {
        slug: "lorem-ipsum-python",
        title: "Lorem Ipsum Python",
        points: 100,
        locked: false,
      },
      {
        slug: "virtual-youtuber-ceres-fauna",
        title: "Virtual YouTuber Ceres Fauna",
        points: 140,
        locked: true,
      },
      {
        slug: "i-cant-sleep-please-send-help",
        title: "I can't sleep, please send help",
        points: 160,
        locked: true,
      },
    ],
  },
  {
    topic: "AI/ML",
    points: 260,
    questions: [
      {
        slug: "train-this-model",
        title: "Train this model",
        points: 120,
        locked: false,
      },
      {
        slug: "i-like-trains",
        title: "I Like trains",
        points: 140,
        locked: true,
      },
    ],
  },
  {
    topic: "Cryptography",
    points: 420,
    questions: [
      {
        slug: "oooo-cool-hacker-music",
        title: "OOOO Cool hacker music",
        points: 120,
        locked: false,
      },
      {
        slug: "hacking-is-like-gamig",
        title: "hacking is like gamig",
        points: 140,
        locked: true,
      },
      {
        slug: "bhaiya-how-to-hack-erp",
        title: "Bhaiya how to hack ERP",
        points: 160,
        locked: true,
      },
    ],
  },
  {
    topic: "Miscellaneous",
    points: 600,
    questions: [
      {
        slug: "i-got-a-in-cs-f111-can-i-get-inducted",
        title: "I got A in CS F111 can I get inducted",
        points: 100,
        locked: false,
      },
      {
        slug: "my-life-a-movie",
        title: "My life a movie",
        points: 160,
        locked: true,
      },
      {
        slug: "i-am-losing-my-sanity-by-the-second",
        title: "I am losing my sanity by the second",
        points: 160,
        locked: true,
      },
      {
        slug: "abdul-cycle-shop-ps2-my-beloved",
        title: "Abdul cycle shop PS-2 my beloved",
        points: 180,
        locked: true,
      },
    ],
  },
];

const QuestionsContext = React.createContext({});

const QuestionsProvider = ({ children }: Props) => {
  return (
    <QuestionsContext.Provider value={{ QuestionList }}>
      {children}
    </QuestionsContext.Provider>
  );
};
// TODO:Export questions types to a separate file
export const useQuestionsContext = (): {
  QuestionList: {
    topic: string;
    points: number;
    questions: {
      slug: string;
      title: string;
      points: number;
      locked: boolean;
    }[];
  }[];
} => {
  return useContext(QuestionsContext) as {
    QuestionList: {
      topic: string;
      points: number;
      questions: {
        slug: string;
        title: string;
        points: number;
        locked: boolean;
      }[];
    }[];
  };
};

export default QuestionsProvider;
