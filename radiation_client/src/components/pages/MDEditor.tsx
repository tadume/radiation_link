import { ChangeEvent, FC, memo, useCallback, useContext, useMemo } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Input, Stack } from "@chakra-ui/react";
import { ArticleContext } from "../../providers/ArticleProvider";

export const MDEditor: FC = memo(() => {
  const { title, body, setTitle, setBody, tags, setTags } =
    useContext(ArticleContext);

  const onChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);

  const onChangeBody = useCallback((value: string) => {
    setBody(value);
  }, []);

  const onChangeTags = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTags([...tags, event.target.value]);
  }, []);

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  return (
    <Stack mx={4}>
      <Input
        placeholder="記事タイトル"
        value={title}
        onChange={onChangeTitle}
        bg="white"
        variant="unstyled"
        h={14}
        fontSize="25px"
      />
      <Input
        placeholder="タグを入力してください。スペース区切りで5つまで入力できます。"
        onChange={onChangeTags}
        bg="white"
        variant="unstyled"
        h={9}
        fontSize="18px"
      />
      <SimpleMdeReact
        value={body}
        placeholder="Markdown記法で書いてみよう"
        options={autofocusNoSpellcheckerOptions}
        onChange={onChangeBody}
      />
    </Stack>
  );
});
