import { Flex, Heading, Icon, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";

import { useScreenTransition } from "../../hooks/useScreenTransition";
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { AtSignIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onClickArticles, onClickNew } = useScreenTransition();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mb="32px"
      >
        <Flex
          as="a"
          _hover={{ cursor: "pointer" }}
          mr={8}
          onClick={onClickArticles}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            Radiation Link
          </Heading>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <Icon as={AtSignIcon} boxSize={7} mr={5} />
          <PrimaryButton onClick={onClickNew}>投稿する</PrimaryButton>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
