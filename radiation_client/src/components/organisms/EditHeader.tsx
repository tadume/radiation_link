import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

import { useScreenTransition } from "../../hooks/useScreenTransition";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNewArticle } from "../../hooks/api/articles/useNewArticle";

export const EditHeader: FC = memo(() => {
  const { onClickNew, onClickArticles } = useScreenTransition();
  const { onCreateArticle } = useNewArticle();
  return (
    <>
      <Flex
        as="nav"
        bg="white"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mb="32px"
      >
        <Flex as="a" _hover={{ cursor: "pointer" }} mr={8}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            color="black"
            onClick={onClickArticles}
          >
            Radiation Link
          </Heading>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <Box mr={4}>
            <SecondaryButton onClick={onClickNew}>下書き保存</SecondaryButton>
          </Box>
          <PrimaryButton onClick={onCreateArticle}>
            記事を投稿する
          </PrimaryButton>
        </Flex>
        <Box display={{ base: "block", md: "none" }}>
          <PrimaryButton onClick={onClickNew}>記事を投稿する</PrimaryButton>
        </Box>
      </Flex>
    </>
  );
});
