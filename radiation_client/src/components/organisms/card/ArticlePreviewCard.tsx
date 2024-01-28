import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Tag } from '../../atoms/Tag';
import { HartIcon } from '../../atoms/icon/HartIcon';
import { SaveIcon } from '../../atoms/icon/SaveIcon';
import { useNavigate } from 'react-router-dom';

type Props = {
  name: string;
  articleId: number;
  title: string;
  updatedAt: string;
};

const tags: Array<string> = ['JavaScript', 'TypeScript'];

export const ArticlePreviewCard: FC<Props> = memo((props) => {
  const { name, articleId, title, updatedAt } = props;
  const navigate = useNavigate();
  const numOfGoods = 12;
  return (
    <Box
      mx="auto"
      w={{ base: 'full', md: '599px' }}
      minH="164px"
      bg="white"
      borderRadius={8}
      shadow="md"
      justifyContent="center"
      p={5}
      _hover={{ cursor: 'pointer' }}
      onClick={() => navigate(`/articles/${articleId}`)}
    >
      <Stack>
        <Flex textAlign="center">
          <Image
            src="https://source.unsplash.com/random"
            boxSize="32px"
            borderRadius="full"
          />
          <Box textAlign="left" pl={2}>
            <Text fontSize="sm">{name}</Text>
            <Text fontSize="xs" color="gray.500">
              {updatedAt.toString()}
            </Text>
          </Box>
        </Flex>
        <Text ml={10} fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Flex ml={10} justifyContent="space-between">
          <Box>
            <Wrap>
              {tags.map((tag) => (
                <WrapItem key={tag}>
                  <Tag name={tag} />
                </WrapItem>
              ))}
            </Wrap>
            <Flex textAlign="center" alignItems="center">
              <HartIcon iconSize={4} view="0 0 35 35" height={6} width={6} />
              <Text fontSize="sm">{numOfGoods}</Text>
            </Flex>
          </Box>
          <SaveIcon width={10} height={10} view="0 0 32 32" iconSize={8} />
        </Flex>
      </Stack>
    </Box>
  );
});
