import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { HartIcon } from "../atoms/icon/HartIcon";
import { SaveIcon } from "../atoms/icon/SaveIcon";
import { XIcon } from "../atoms/icon/XIcon";
import { FBIcon } from "../atoms/icon/FBIcon";
import { useDeleteArticle } from "../../hooks/useDeleteArticle";

type Props = {
  numOfGoods: number;
  numOfSaves: number;
  articleId: string | undefined;
};

export const SideMenuIcons: FC<Props> = memo((props) => {
  const { numOfGoods, numOfSaves, articleId } = props;
  const { onDeleteArticle } = useDeleteArticle();
  return (
    <Stack
      position="sticky"
      h="300px"
      top="20px"
      display={{ base: "none", md: "flex" }}
      spacing={5}
      alignItems="center"
    >
      <Stack alignItems="center">
        <Box bg="white" w={9} h={9} borderRadius="full" shadow="md">
          <HartIcon iconSize={7} view="-4 -2 33 30" width={30} height={30} />
        </Box>
        <Text fontSize="sm">{numOfGoods}</Text>
      </Stack>
      <Stack alignItems="center">
        <Box bg="white" w={9} h={9} borderRadius="full" shadow="md">
          <SaveIcon iconSize={7} view="-7 -4 36 28" width={30} height={30} />
        </Box>
        <Text fontSize="sm">{numOfSaves}</Text>
      </Stack>
      <XIcon iconSize={8} view="-6 -6 30 30" width={32} height={32} />
      <FBIcon iconSize={9} view="-7 -5 33 32" width={30} height={30} />
      <Icon as={EditIcon} w={27} h={27} color="gray.600" />
      <Icon
        as={DeleteIcon}
        onClick={() => onDeleteArticle(articleId)}
        mt={2}
        w={27}
        h={27}
        color="gray.600"
      />
    </Stack>
  );
});
