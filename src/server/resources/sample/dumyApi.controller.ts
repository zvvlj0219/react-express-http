import { Router, Request, Response, NextFunction } from 'express'
import Controller from '../../types/controller.interface'
import CustomError from '../../middleware/customError'

/*
 * dummy api controller
 *  @path 'baseUrl/sample/dummy_api
 *
 */

class DummyApiController implements Controller {
    public path = '/sample/dummy_api'
    public router = Router()

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
                res.setHeader(
                    'Access-Control-Allow-Origin', 'http://localhost:3000'
                )

                if(this.path) throw new Error('throw error')
                

                // if (this.path) {
                //     console.log('if')
                //     return res.status(500).json({ result: 'success dummy_api'})
                // }


                return res.status(200).json({ result: 'failed dummy_api'})
            } catch (error) {
                next(new CustomError(400, 'unexpected error'))
            }
        })
    }
}

export default DummyApiController
