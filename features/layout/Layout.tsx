import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";
import { StyleProps } from "../../utils/props";

const ROOT = makeRootClassName("Layout");
const el = makeElementClassNameFactory(ROOT);

type LayoutProps = StyleProps & {
  /**
   * the children elements of the layout
   */
  children: ReactElement;
};

export function Layout(props: LayoutProps): ReactElement {
  return (
    <div className={ROOT}>
      <main>{props.children}</main>
    </div>
  );
}
