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

type Props = {
  name: string;
  article_id: number;
  title: string;
  updated_at: Date;
};

const tags: Array<string> = ['JavaScript', 'TypeScript'];

export const ArticleCard: FC<Props> = memo((props) => {
  const { name, article_id, title, updated_at } = props;
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
              {updated_at.toString()}
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
            <Flex textAlign="center">
              <HartIcon numOfGood={12} />
            </Flex>
          </Box>
          <SaveIcon />
        </Flex>
      </Stack>
    </Box>
  );
});
