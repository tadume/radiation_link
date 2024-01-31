import { FC, ReactNode, memo } from "react";

type Props = {
  header: ReactNode;
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children, header } = props;
  return (
    <>
      {header}
      {children}
    </>
  );
});
