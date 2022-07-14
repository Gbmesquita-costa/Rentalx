import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepopsitory";

class listCategoriesUseCase {
    constructor(private categories: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categories.list()
        return categories
    }
}

export { listCategoriesUseCase }