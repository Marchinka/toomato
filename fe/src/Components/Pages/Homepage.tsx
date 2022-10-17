/** @jsxImportSource theme-ui */

import { Button } from "theme-ui"
import { Navbar } from "../Organisms/Navbar";
import { Layout } from "../Templates/Layout"

export const Homepage = () => {
    return <Layout
                header={<Navbar/>}
                content={<div>Prova</div>}
            />;
    return <div>
                <h1
                    sx={{
                        color: 'green',
                    }}>
                    Home
                </h1>
                <Button mr={2}>Beep</Button>
                <Button variant='secondary'>Boop</Button>
                <Button ml={2} hidden>Hidden</Button>
            </div>
}