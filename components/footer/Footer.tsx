import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";
import { StyleProps } from "../../utils/props";
import { Text } from "../text";
import clsx from "clsx";

const ROOT = makeRootClassName("Footer");
const el = makeElementClassNameFactory(ROOT);

export type FooterProps = StyleProps & {
  size?: "small" | "medium" | "large";
};

export function Footer(props: FooterProps): ReactElement {
  return (
    <div className={clsx(ROOT, `size-${props.size ?? "medium"}`)}>
      <Text size="h6">Made with 💖 by </Text>
      <Text size="h6" href="codesteel.io" className={el`link`}>
        CodeSteel.io
      </Text>
    </div>
  );
}
