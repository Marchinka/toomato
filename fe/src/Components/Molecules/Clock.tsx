interface Props {
    elapsedSeconds: number;
    maxDuration: number;
    onEnd: () => void;
}

export const Clock = (props: Props) => {
    if (props.elapsedSeconds >= props.maxDuration) {
        props.onEnd();
        return <>Completed</>;
    }

    let minutes = Math.floor(props.elapsedSeconds / 60);
    let seconds = Math.floor(props.elapsedSeconds % 60);
    return <>{minutes}:{seconds}</>
};