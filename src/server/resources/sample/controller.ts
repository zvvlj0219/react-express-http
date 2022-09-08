import { Router, Request, Response, NextFunction } from 'express'
import Controller from '../../types/controller.interface'
import DB, { Doc } from '../../utils/db'
import customerSchema from '../../models/Customers'

/*
 * post controller
 *  @path 'baseUrl/sample
 *
 */

class sampleController implements Controller {
    public path = '/sample/customers'
    public router = Router()
    public db = DB

    constructor() {
        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.get(this.path, async (req: Request, res: Response) => {
            this.db.connect()
            const customers = await customerSchema.find().limit(10).lean() as Doc[]
            this.db.disconnect()

            return res.status(200).json({
                result: customers
                ? customers.map((doc) => {
                    return this.db.convertDocToObj(doc)
                })
                : []
            })
        })
    }
}

export default sampleController
