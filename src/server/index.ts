import dotenv from 'dotenv'
import App from './app'
import Controller from './types/controller.interface'
import sampleController from './resources/sample/controller'
import { baseUrl } from './config/index'

dotenv.config()

const controllers: Controller[] = [new sampleController()]

const port = Number(process.env.PORT || 5000)

const app = new App(controllers, port, baseUrl)

app.listen()
