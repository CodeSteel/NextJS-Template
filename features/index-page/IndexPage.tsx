import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";
import { Text } from "../../components";

const ROOT = makeRootClassName("IndexPage");
const el = makeElementClassNameFactory(ROOT);

export function IndexPage(): ReactElement {
  return (
    <div className={ROOT}>
      <Text size="h1" isInteractable>
        Hello, World!
      </Text>
    </div>
  );
}
