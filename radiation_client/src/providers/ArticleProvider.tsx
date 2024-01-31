import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  memo,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ArticleContextType = {
  title: string;
  body: string;
  tags: Array<string | null>;
  setTitle: Dispatch<SetStateAction<string>>;
  setBody: Dispatch<SetStateAction<string>>;
  setTags: Dispatch<SetStateAction<Array<string | null>>>;
};

export const ArticleContext = createContext<ArticleContextType>(
  {} as ArticleContextType
);

export const ArticleProvider: FC<Props> = memo((props) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<Array<string | null>>([]);

  const { children } = props;

  return (
    <ArticleContext.Provider
      value={{ title, body, tags, setTitle, setBody, setTags }}
    >
      {children}
    </ArticleContext.Provider>
  );
});
