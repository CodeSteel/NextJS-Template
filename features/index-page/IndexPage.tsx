import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";

const ROOT = makeRootClassName("IndexPage");
const el = makeElementClassNameFactory(ROOT);

export function IndexPage(): ReactElement {
  return (
    <div className={ROOT}>
      <p>Hello, World!</p>
    </div>
  );
}
