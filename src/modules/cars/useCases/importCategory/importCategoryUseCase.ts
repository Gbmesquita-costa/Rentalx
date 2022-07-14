import fs from "fs"
import { parse as csvParse } from "csv-parse"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepopsitory"

interface IImportCategories {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const parsefile = csvParse()

            const categories: IImportCategories[] = []

            stream.pipe(parsefile)

            parsefile.on("data", async (line) => {
                // ["name", "description"]
                const [name, description] = line

                categories.push({
                    name,
                    description
                })
            }).on("end", () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            }).on("error", (error) => {
                reject(error)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
        
        categories.map((category) => {
            const { name, description } = category

            const existsCategory = this.categoriesRepository.findByName(name)

            if (!existsCategory) {
                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportCategoryUseCase }