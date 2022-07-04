import { Router } from "express"

import { categoriesRoutes } from "./categories.routes"
import { specificationsRoutes } from "./specifications.routes"

const router = Router()

router.use("/categories", categoriesRoutes) // Somente as minha rotas de categorias
router.use("/specifications", specificationsRoutes)

export { router }