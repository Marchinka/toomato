import { Navbar } from "../Organisms/Navbar";
import { Timer } from "../Organisms/Timer";
import { Layout } from "../Templates/Layout";

export const TimerPage = () => {
    return <Layout
                header={<Navbar/>}
                content={<Timer/>}
                footer={<></>}
            />;
}