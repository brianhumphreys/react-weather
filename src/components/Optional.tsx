import React, { ReactElement } from "react";

type Props = {
  renderIf: string | boolean | undefined | any;
  children: ReactElement[] | ReactElement;
};

export const Optional = ({ renderIf, children }: Props) => {
  return renderIf ? <>{children}</> : <></>;
};
