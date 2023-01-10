import { ReactElement } from "react";
import {
  makeElementClassNameFactory,
  makeRootClassName,
} from "../../utils/classnames";
import { Footer, Navbar, PageStyle } from "../../components";
import { StyleProps } from "../../utils/props";
import { svgLogo } from "../../utils/svgs";
import { FaHome, FaPaperclip } from "react-icons/fa";

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
      <PageStyle className={el`pagestyle`} size="medium" />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
