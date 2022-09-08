import mongoose, { models } from 'mongoose'

export interface CustomersDoc extends mongoose.Document {
    username: string
    name: string
    address: string
    birthdate: Date
    email: string
    active: boolean
    account: number[]
    tier_and_details?: {
        [key: string]: {
            tier: string
            benefits: number[]
            active: boolean
            id: string
        }
    }
}

const customerSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        birthdate: {
            type: Date,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        active: {
            type: Boolean,
            require: true
        },
        account: {
            type: Array,
            require: true
        },
        tier_and_details: {
            type: Object
        }
    },
    {
        timestamps: true
    }
)

const schema = models.Customers
    ? models.Customers as mongoose.Model<CustomersDoc>
    : mongoose.model<CustomersDoc, mongoose.Model<CustomersDoc>>('Customers', customerSchema)

export default schema