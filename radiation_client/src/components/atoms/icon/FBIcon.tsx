import { Icon } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  iconSize: number;
  view: string;
  width: number;
  height: number;
};

export const FBIcon: FC<Props> = memo((props) => {
  const { iconSize, view, width, height } = props;
  return (
    <Icon
      width={width}
      height={height}
      viewBox={view}
      boxSize={iconSize}
      color="black"
    >
      <path d="m20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99c4.78-.75 8.44-4.89 8.44-9.88z"></path>
    </Icon>
  );
});
