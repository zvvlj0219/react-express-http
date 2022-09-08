import express from 'express'
import type { Application } from 'express'
import Controller from './types/controller.interface'
import DB from './utils/db'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import { corsOptions } from './config/index'

class App {
    public app: Application
    public port: number
    public apiRoute: string
    public db = DB

    constructor(controllers: Controller[], port: number, apiRoute: string) {
        this.app = express()
        this.port = port
        this.apiRoute = apiRoute

        this.initializeControllers(controllers)
        this.initializeMiddleware()
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.app.use(this.apiRoute, controller.router)
        })
    }

    private initializeMiddleware(): void {
        this.app.use(helmet())
        this.app.use(cors(corsOptions))
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(compression())
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`)
            console.log(`NODE_ENV is ${String(process.env.NODE_ENV)}`)
        })
    }
}

export default App
