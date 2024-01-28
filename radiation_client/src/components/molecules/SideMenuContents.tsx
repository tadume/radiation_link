import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const SideMenuContents: FC = memo(() => {
  return (
    <Box
      bg="white"
      w="300px"
      shadow="md"
      borderRadius={8}
      display={{ base: 'none', md: 'block' }}
    ></Box>
  );
});
