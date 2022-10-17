import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Category } from "../../Models/Category";
import { useAppStore } from "../../Store/AppStore";
import { Navbar } from "../Organisms/Navbar";
import { Layout } from "../Templates/Layout";

export const TimerPage = () => {
    const appStore = useAppStore();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        let subscription = appStore.categories.subscribe((value) => setCategories(value));
        return () => subscription.unsubscribe();
    }, []);

    const onClick = () => {
        appStore.categories.add({ name: "New Category" });
    };

    return <Layout
                header={<Navbar/>}
                content={<div>
                            Timer
                            <Button onClick={() => onClick()}>Add</Button>
                            <div>
                                {categories?.map(category => {
                                    return <div key={category.id}>{category.name}</div>
                                })}
                            </div>
                        </div>}
                footer={<></>}
            />;
}