import { Navbar } from "../Organisms/Navbar";
import { Layout } from "../Templates/Layout"

export const Homepage = () => {
    return <Layout
                header={<Navbar/>}
                content={<div>Prova</div>}
            />;
}