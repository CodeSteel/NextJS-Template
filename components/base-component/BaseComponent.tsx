import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";

const ROOT = makeRootClassName("BaseComponent");
const el = makeElementClassNameFactory(ROOT);

export function BaseComponent(): ReactElement {
  return (
    <div className={ROOT}>
      <p>Hello</p>
    </div>
  );
}
