import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";

const ROOT = makeRootClassName("Layout");
const el = makeElementClassNameFactory(ROOT);

type LayoutProps = {
  children: ReactElement;
};

export function Layout(props: LayoutProps): ReactElement {
  return (
    <div className={ROOT}>
      <main>{props.children}</main>
    </div>
  );
}
