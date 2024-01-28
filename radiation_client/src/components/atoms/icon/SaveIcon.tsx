import { Icon } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  iconSize: number;
  view: string;
  width: number;
  height: number;
};

export const SaveIcon: FC<Props> = memo((props) => {
  const { iconSize, view, width, height } = props;
  return (
    <Icon
      width={width}
      height={height}
      viewBox={view}
      boxSize={iconSize}
      color="black"
    >
      <path d="M6.5 5H25.5C25.7761 5 26 5.22386 26 5.5V6.5C26 6.77614 25.7761 7 25.5 7H6.5C6.22386 7 6 6.77614 6 6.5V5.5C6 5.22386 6.22386 5 6.5 5ZM24 19V11.5C24 11.3674 23.9473 11.2402 23.8536 11.1464C23.7598 11.0527 23.6326 11 23.5 11H8.5C8.36739 11 8.24021 11.0527 8.14645 11.1464C8.05268 11.2402 8 11.3674 8 11.5V19C8 20.8565 8.7375 22.637 10.0503 23.9497C11.363 25.2625 13.1435 26 15 26H17C18.8565 26 20.637 25.2625 21.9497 23.9497C23.2625 22.637 24 20.8565 24 19ZM6.58579 9.58579C6.96086 9.21071 7.46957 9 8 9H24C24.5304 9 25.0391 9.21071 25.4142 9.58579C25.7893 9.96086 26 10.4696 26 11V19C26 21.3869 25.0518 23.6761 23.364 25.364C21.6761 27.0518 19.3869 28 17 28H15C12.6131 28 10.3239 27.0518 8.63604 25.364C6.94821 23.6761 6 21.3869 6 19V11C6 10.4696 6.21071 9.96086 6.58579 9.58579Z" />
    </Icon>
  );
});
