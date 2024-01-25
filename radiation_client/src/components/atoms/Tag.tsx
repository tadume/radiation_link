import { Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  name: string;
};

export const Tag: FC<Props> = memo((props) => {
  const { name } = props;
  return (
    <Text fontSize="sm" bg="gray.200" px={1} borderRadius={3} color="gray.700">
      {name}
    </Text>
  );
});
