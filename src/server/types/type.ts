export type Customers = {
    _id: string
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
