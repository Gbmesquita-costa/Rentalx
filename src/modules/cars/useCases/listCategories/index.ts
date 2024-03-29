import { CategoriesRepository } from "../../repositories/implementations/CategorysRepositories"
import { ListCategoriesController } from "./ListCategoriesController"
import { listCategoriesUseCase } from "./ListCategoriesUseCase"

const categoriesRepository = null
const ListCategoriesUseCase = new listCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(ListCategoriesUseCase)

export { listCategoriesController }