import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  children: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, isDisabled = false, isLoading = false, onClick } = props;
  return (
    <Button
      color="white"
      isLoading={isLoading}
      isDisabled={isDisabled}
      bg="#55c500"
      colorScheme="none"
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
