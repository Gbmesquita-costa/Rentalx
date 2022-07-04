import { CategoriesRepository } from "../../repositories/implementations/CategorysRepositories";
import { CreateCategoryUseCase } from "./CreateCategoryService";
import { CreateCategoryController } from "./createCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }