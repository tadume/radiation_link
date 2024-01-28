import { InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Tag } from '../../atoms/Tag';
import { ArticleType } from '../../../types/api/ArticleType';

type Props = {
  tags: Array<string>;
  timeStr: string | null;
  article: ArticleType;
};

export const ArticleDetailCard: FC<Props> = memo((props) => {
  const { tags, timeStr, article } = props;

  return (
    <Box
      bg="white"
      minH="1000px"
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
        <Text>{article.body}</Text>
      </Stack>
    </Box>
  );
});
