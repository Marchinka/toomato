interface Props {
    header: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

export const Layout = (props: Props) => {
    return  <div>
                <div>
                    {props.header}
                </div>
                <div>
                    {props.content}
                </div>
                {props.footer && <div>
                    {props.footer}
                </div>}
            </div>
};