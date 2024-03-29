import { ICategoriesRepository } from "../../repositories/ICategoriesRepopsitory";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!")
        }
    
        this.categoriesRepository.create({
            description,
            name
        })
    }
}

export { CreateCategoryUseCase }