import { Category } from "../Models/Category";
import { ToomatoSummary } from "../Models/ToomatoSummary";
import { CategoryStore } from "./CategoryStore";
import { EntityStore } from "./EntityStore";
import { SummaryStore } from "./SummaryStore";


const REACT = { id: "1", name: "React" };
const DESIGN = { id: "2", name: "Design" };
const JAPANESE = { id: "3", name: "日本語" };
const YOGA = { id: "4", name: "Yoga" };
const ENGLISH = { id: "5", name: "English" };

let categories : Category[] = [
    REACT,
    DESIGN,
    JAPANESE,
    YOGA,
    ENGLISH
];

let todaySummary: ToomatoSummary[] = [
    { category: DESIGN, toomatoCount: 3},
    { category: YOGA, toomatoCount: 1},
    { category: REACT, toomatoCount: 2}
];

let weekSummary: ToomatoSummary[] = [
    { category: DESIGN, toomatoCount: 12},
    { category: YOGA, toomatoCount: 5},
    { category: ENGLISH, toomatoCount: 1},
    { category: JAPANESE, toomatoCount: 8}
];

const AppStore = {
    categories: new CategoryStore(categories),
    todaySummary: new SummaryStore(todaySummary),
    weekSummary: new SummaryStore(weekSummary)
};

export const useAppStore = () => AppStore;
