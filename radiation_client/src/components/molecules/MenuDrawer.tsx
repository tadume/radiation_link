import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { useScreenTransition } from "../../hooks/useScreenTransition";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  const { onClickArticles, onClickSetting, onClickUsers, onClickNew } =
    useScreenTransition();
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody bg="gray.100" p={0}>
            <Button w="100%" onClick={onClickArticles}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUsers}>
              ユーザ一覧
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              設定
            </Button>
            <Button w="100%" onClick={onClickNew}>
              投稿する
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
