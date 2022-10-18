import { useEffect, useState } from "react";
import { Category } from "../../Models/Category";
import { useAppStore } from "../../Store/AppStore";
import { CategoryChoice } from "./CategoryChoice";

enum TimerPhase {
    CategoryChoice,
    ReadyToStart,
    InProgress,
    Completed
}

export const Timer = () => {
    const [phase, setPhase] = useState(TimerPhase.CategoryChoice);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    useEffect(() => {
        if (selectedCategory != null) {
            setTimeout(() => {
                setPhase(TimerPhase.ReadyToStart);
            }, 250);
        }
    }, [selectedCategory]);

    switch (phase) {
        case TimerPhase.CategoryChoice:
            return <CategoryChoice onChange={category => setSelectedCategory(category)}/>
        case TimerPhase.ReadyToStart:
            return <></>
        case TimerPhase.InProgress:
            return <></>
        case TimerPhase.Completed:
        default:
            return <></>
    }
};