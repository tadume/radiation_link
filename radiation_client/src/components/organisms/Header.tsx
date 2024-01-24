import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { useScreenTransition } from '../../hooks/useScreenTransition';
import { MenuIconButton } from '../atoms/button/MenuIconButton';
import { MenuDrawer } from '../molecules/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onClickArticles, onClickSetting, onClickUsers } =
    useScreenTransition();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          as="a"
          _hover={{ cursor: 'pointer' }}
          mr={8}
          onClick={onClickArticles}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
          fontSize="sm"
        >
          <Box pr={4}>
            <Link onClick={onClickUsers}>ユーザ一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
