import dotenv from 'dotenv'
import App from './app'
import Controller from './types/controller.interface'
import CustomersController from './resources/sample/customers.controller'
import DummyApiController from './resources/sample/dumyApi.controller'
import { apiRoute } from './config/index'

dotenv.config()

const controllers: Controller[] = [
    new CustomersController(),
    new DummyApiController()
]

const port = Number(process.env.PORT || 5000)

const app = new App(controllers, port, apiRoute)

app.listen()
