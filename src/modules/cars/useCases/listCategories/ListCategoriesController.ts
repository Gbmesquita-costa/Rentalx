import { Request, Response } from "express"
import { listCategoriesUseCase } from "./ListCategoriesUseCase"

class ListCategoriesController {
    constructor(private listCategoriesUseCase: listCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCase.execute()
        return response.status(200).json(all)
    }
}

export { ListCategoriesController }