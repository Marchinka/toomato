/** @jsxImportSource theme-ui */

import { Button } from "theme-ui"

export const Home = () => {
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