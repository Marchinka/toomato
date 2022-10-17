/** @jsxImportSource theme-ui */

import { ThemeUIStyleObject } from "theme-ui";
import { NEUTRALS } from "../../Theme/Colors";

interface Props {
    header: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

const headerCss : ThemeUIStyleObject = {
    top: 0,
    left: 0,
    position: "fixed",
    height: "64px",
    width: "100vw",
    zIndex: 64
};

const contentCss : ThemeUIStyleObject = {
    marginTop: headerCss.height
};

const footerCss : ThemeUIStyleObject = {
    bottom: 0,
    left: 0,
    position: "fixed"
};

export const Layout = (props: Props) => {
    return  <div>
                <div sx={headerCss}>
                    {props.header}
                </div>
                <div sx={contentCss}>
                    {props.content}
                </div>
                {props.footer && <div sx={footerCss}>
                    {props.footer}
                </div>}
            </div>
};