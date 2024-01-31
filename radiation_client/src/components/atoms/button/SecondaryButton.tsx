import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  children: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const SecondaryButton: FC<Props> = memo((props) => {
  const { children, isDisabled = false, isLoading = false, onClick } = props;
  return (
    <Button
      border="1px"
      color="black"
      isLoading={isLoading}
      isDisabled={isDisabled}
      bg="white"
      colorScheme="none"
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
