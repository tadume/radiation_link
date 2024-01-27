import { FC, memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

import { Tag } from '../atoms/Tag';
import { useShowArticle } from '../../hooks/api/articles/useShowArticle';
import { Page404 } from './Page404';
import { HartIcon } from '../atoms/icon/HartIcon';

export const ArticleDetailScreen: FC = memo(() => {
  const { id } = useParams();
  const { article, getArticle } = useShowArticle(id);

  useEffect(() => getArticle, [id]);
  const tags = ['React', 'Ruby'];
  const numOfGoods = 12;

  if (!article) return <Page404 />;

  const now = new Date();
  const articleTime = new Date(article.updated_at);
  // const articleTime = new Date('2020/1/28'); // 更新日時警告文を表示するためのテストコード
  const diffTime: number = now.getTime() - articleTime.getTime();
  let timeStr: string | null = null;
  if (diffTime / 31536000000 >= 1) {
    timeStr = `${Math.floor(diffTime / 31536000000)}年`;
  } else if (diffTime > 15552000000) {
    timeStr = '半年';
  }

  return (
    <HStack spacing={14} pt="16px" px="24px" justifyContent="center">
      <Box h="1190px" w="50px" shadow="md" borderRadius={8}>
        <Stack>
          <Stack alignItems="center">
            <Box bg="white" w={9} h={9} borderRadius="full" shadow="md">
              <HartIcon
                iconSize={7}
                view="-4 -2 33 30"
                width={30}
                height={30}
              />
            </Box>
            <Text fontSize="sm">{numOfGoods}</Text>
          </Stack>
        </Stack>
      </Box>
      <Box
        bg="white"
        h="1190px"
        w="776px"
        shadow="md"
        borderRadius={8}
        py="32px"
        px="56px"
      >
        <Stack>
          <Flex
            bg="orange.100"
            p={4}
            borderRadius={8}
            mb={3}
            display={timeStr ? 'flex' : 'none'}
            textAlign="center"
            alignItems="center"
          >
            <Icon as={InfoIcon} w={5} h={5} mr={2} color="orange.500" />
            <Text>{`この記事は最終更新日から${timeStr}以上が経過しています。`}</Text>
          </Flex>
          <Flex alignItems="center">
            <Image
              src="https://source.unsplash.com/random"
              boxSize="24px"
              borderRadius="full"
              mr={2}
            />
            <Text fontWeight="600" fontSize="xl">
              {article.user.name}
            </Text>
          </Flex>
          <Heading mt={2} as="h1">
            {article.title}
          </Heading>
          <Wrap mt={3}>
            {tags.map((tag) => (
              <WrapItem key={tag}>
                <Tag name={tag} />
              </WrapItem>
            ))}
          </Wrap>
          <Flex fontSize="sm" color="gray.600">
            <Text mr={2}>最終更新日時</Text>
            <Text>{article.updated_at.toString()}</Text>
          </Flex>
        </Stack>
      </Box>
      <Box bg="white" h="1190px" w="300px" shadow="md" borderRadius={8}></Box>
    </HStack>
  );
});
