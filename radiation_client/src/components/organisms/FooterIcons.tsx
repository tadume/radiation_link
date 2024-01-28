import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { HartIcon } from '../atoms/icon/HartIcon';
import { SaveIcon } from '../atoms/icon/SaveIcon';

type Props = {
  numOfGoods: number;
  numOfSaves: number;
};

export const FooterIcons: FC<Props> = memo((props) => {
  const { numOfGoods, numOfSaves } = props;

  return (
    <Flex
      position="fixed"
      bottom="0"
      w="100%"
      h="auto"
      py={2}
      display={{ base: 'flex', md: 'none' }}
      bg="gray.100"
      shadow="md"
      border="1px solid #CBD5E0"
      justifyContent="space-evenly"
    >
      <Flex alignItems="center">
        <Box bg="white" w={9} h={9} borderRadius="full" shadow="md" mr={2}>
          <HartIcon iconSize={7} view="-4 -2 33 30" width={30} height={30} />
        </Box>
        <Text fontSize="sm">{numOfGoods}</Text>
      </Flex>
      <Flex alignItems="center">
        <Box bg="white" w={9} h={9} borderRadius="full" shadow="md" mr={2}>
          <SaveIcon iconSize={7} view="-7 -4 36 28" width={30} height={30} />
        </Box>
        <Text fontSize="sm">{numOfSaves}</Text>
      </Flex>
    </Flex>
  );
});
