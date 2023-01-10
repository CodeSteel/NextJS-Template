import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";
import { StyleProps } from "../../utils/props";

const ROOT = makeRootClassName("BaseComponent");
const el = makeElementClassNameFactory(ROOT);

export type BaseComponentProps = StyleProps & {
  //...
};

export function BaseComponent(props: BaseComponentProps): ReactElement {
  return (
    <div className={ROOT}>
      <p>Hello</p>
    </div>
  );
}
