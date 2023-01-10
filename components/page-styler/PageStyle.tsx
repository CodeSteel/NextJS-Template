import { ReactElement, useEffect, useState } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";
import { FaSun, FaMoon } from "react-icons/fa";
import { StyleProps } from "../../utils/props";
import clsx from "clsx";
import { Text } from "../text";

const ROOT = makeRootClassName("PageStyle");
const el = makeElementClassNameFactory(ROOT);

type PageStyle = "light" | "dark";

type PageStyleProps = StyleProps & {
  /**
   * the size of the button
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
};

export function PageStyle(props: PageStyleProps): ReactElement {
  const [pageStyle, setPageStyle] = useState<PageStyle>("light");

  useEffect(() => {
    const style = localStorage.getItem("style") as PageStyle;
    setPageStyle(style);
    document.documentElement.setAttribute("style", style);
  }, [pageStyle]);

  const handleChangeStyle = () => {
    const prevStyle = pageStyle;
    const newStyle = prevStyle === "light" ? "dark" : "light";

    setPageStyle(newStyle);
    localStorage.setItem("style", newStyle);
    document.documentElement.setAttribute("style", newStyle);
  };

  return (
    <div
      className={clsx(ROOT, props.className, `size-${props.size ?? "medium"}`)}
    >
      <Text onClick={handleChangeStyle} className={el`button`}>
        {pageStyle === "light" ? (
          <FaSun className={el`icon`} />
        ) : (
          <FaMoon className={el`icon`} />
        )}
      </Text>
    </div>
  );
}
