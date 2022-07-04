import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private especificationRepository: ISpecificationsRepository) {}
    
    execute({ description, name }: IRequest): void {
        const specificationAlreadyExists = this.especificationRepository.findByName(name)

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        this.especificationRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }