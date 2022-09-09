import { Router, Request, Response, NextFunction } from 'express'
import Controller from '../../types/controller.interface'
import DB, { Doc } from '../../utils/db'
import customerSchema from '../../models/Customers'
import CustomError from '../../middleware/customError'

/*
 * customers controller
 *  @path 'baseUrl/sample/customers
 *
 */

class CustomersController implements Controller {
    public path = '/sample/customers'
    public router = Router()
    public db = DB

    constructor() {
        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.get(this.path, async (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            try {
                this.db.connect()
                const customers = await customerSchema.find().limit(10).lean() as Doc[]
                const result = await customers
                    ? customers.map((doc) => {
                        return this.db.convertDocToObj(doc)
                    })
                    : []
                this.db.disconnect()

                res.setHeader(
                    'Access-Control-Allow-Origin', 'http://localhost:3000'
                )
    
                return res.status(200).json({ result })
            } catch (error) {
                next(new CustomError(400, 'failed to fetch customers'))
            }
        })
    }
}

export default CustomersController
