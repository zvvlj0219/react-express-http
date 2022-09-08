import { useCallback, useEffect, useState } from "react"
import type { Customers } from '../types/customer'
import { baseUrl } from "../../server/config"

const Home = () => {
    const [customers, setcustomers] = useState<Customers[] | null>(null)

    const getcustomers = async () => {
        const res = await fetch(`${baseUrl}/sample/customers`)
        const { result } = await res.json() as { result: Customers[] }

        setcustomers(result)
    }

    useEffect(() => {
        getcustomers()
    }, [])

    return (
        <div>
            <h3>home</h3>
            <div>
                {
                    customers && customers.map((user: Customers) => (
                        <div key={user._id}>
                            {user.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
