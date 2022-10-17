import { HomeSummary } from "../Organisms/HomeSummary";
import { Navbar } from "../Organisms/Navbar";
import { Layout } from "../Templates/Layout"

export const Homepage = () => {
    return <Layout
                header={<Navbar/>}
                content={<HomeSummary/>}
            />;
}