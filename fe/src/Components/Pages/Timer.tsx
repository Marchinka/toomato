import { useEffect, useState } from "react";
import { Button } from "theme-ui";
import { Category } from "../../Models/Category";
import { useAppStore } from "../../Store/AppStore";

export const Timer = () => {
    const appStore = useAppStore();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        let subscription = appStore.categories.subscribe((value) => setCategories(value));
        return () => subscription.unsubscribe();
    }, []);

    const onClick = () => {
        appStore.categories.add({ name: "New Category" });
    };

    return <div>
                Timer
                <Button onClick={() => onClick()}>Add</Button>
                <div>
                    {categories?.map(category => {
                        return <div key={category.id}>{category.name}</div>
                    })}
                </div>
            </div>
}