import { Router, Request, Response, NextFunction } from 'express'
import Controller from '../../types/controller.interface'
import DB from '../../utils/db'

/*
 * post controller
 *  @path 'baseUrl/sample
 *
 */

class sampleController implements Controller {
    public path = '/sample'
    public router = Router()
    public db = DB

    constructor() {
        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.get(this.path, (req: Request, res: Response) => {
            this.db.connect()
            this.db.disconnect()
            return res.status(200).json({ msg: 'hello world' })
        })
    }
}

export default sampleController
