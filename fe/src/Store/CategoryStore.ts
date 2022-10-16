import { Category } from "../Models/Category";
import { EntityStore } from "./EntityStore";

export class CategoryStore extends EntityStore<Category[]> {
    add(newCategory: Category) {
        let currentCategories = this.subject.value;
        console.log(currentCategories)
        let newCategories = currentCategories.concat({
            id: (newCategory.id ?? (currentCategories.length + 1)).toString(),
            ...newCategory
        });
        this.subject.next(newCategories);
    }
}