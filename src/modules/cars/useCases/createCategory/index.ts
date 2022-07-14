import { CategoriesRepository } from "../../repositories/implementations/CategorysRepositories";
import { CreateCategoryUseCase } from "./CreateCategoryService";
import { CreateCategoryController } from "./createCategoryUseCase";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoriesRepository()
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
    const createCategoryController = new CreateCategoryController(createCategoryUseCase)

    return createCategoryController
}
