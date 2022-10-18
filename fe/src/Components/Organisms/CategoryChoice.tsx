import { useEffect, useState } from "react";
import { Category } from "../../Models/Category";
import { useAppStore } from "../../Store/AppStore";
import { CategorySelector } from "../Molecules/CategorySelector";

interface Props {
    onChange: (category: Category | null) => void;
}

export const CategoryChoice = (props: Props) => {
    const appStore = useAppStore();
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    useEffect(() => {
        let subscription = appStore.categories.subscribe((value) => setCategories(value));
        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        props.onChange(selectedCategory);
    }, [selectedCategory])

    return <CategorySelector    categories={categories} 
                                value={selectedCategory} 
                                onChange={value => setSelectedCategory(value)}/>
};