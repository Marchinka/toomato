import { Category } from "../Models/Category";
import { CategoryStore } from "./CategoryStore";
import { EntityStore } from "./EntityStore";

const AppStore = {
    categories: new CategoryStore([])
}

export const useAppStore = () => AppStore;
