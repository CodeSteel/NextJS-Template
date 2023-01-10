import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";
import { StyleProps } from "../../utils/props";
import clsx from "clsx";
import { useRouter } from "next/router";

const ROOT = makeRootClassName("Text");
const el = makeElementClassNameFactory(ROOT);

export type TextProps = StyleProps & {
  /**
   * content of the text
   */
  children: ReactElement | string;

  /**
   * the size of the text
   * @default "base"
   */
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "small"
    | "base"
    | "large";

  /**
   * hover effects
   * @default false
   */
  isInteractable?: boolean;

  /**
   * href
   */
  href?: string;

  /**
   * onClick
   */
  onClick?: () => void;
};

export function Text(props: TextProps): ReactElement {
  const handleOnClick = () => {
    if (props.href) {
      document.location.href = "//" + props.href;
    }
  };

  return (
    <div
      className={clsx(ROOT, props.className, `size-${props.size ?? "base"}`, {
        "is-interactable":
          props.isInteractable ||
          props.href !== undefined ||
          props.onClick !== undefined,
        "is-linked": props.href !== undefined,
      })}
      onClick={() => {
        if (props.href) handleOnClick();
        if (props.onClick) props.onClick();
      }}
    >
      {props.children}
    </div>
  );
}
