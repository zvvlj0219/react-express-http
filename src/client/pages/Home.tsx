import { useCallback, useEffect, useState } from "react"
import type { Customers } from '../types/customer'
import { baseUrl } from "../../server/config"
import { useLoading } from "../utils/useLoading"

const Home = () => {
    const [customers, setcustomers] = useState<Customers[]>([])
    const { state: { loading }, startLoad, finishLoad } = useLoading()

    const getcustomers = async () => {

        startLoad()

        const sampleDelayApi = () => {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    const res = await fetch(`${baseUrl}/sample/customers`,{
                        method: 'GET'
                    })
                    const { result } = await res.json() as { result: Customers[] }
                    resolve(result)
                }, 1000);
            })
        }

        const data = await sampleDelayApi() as Customers[]

        if (data) {
            setcustomers(data)
            finishLoad()
        }
    }

    const dummyApi = async () => {
        try {
            const res = await fetch(`${baseUrl}/sample/dummy_api`,{
                method: 'GET'
            })

            const { result } = await res.json() as { result: string }
            console.log(result)

            if(typeof result === 'undefined') {
                console.log('catched dummy error')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3>home</h3>
            <div>
                <div>
                    {
                        customers && customers.map((user: Customers) => (
                            <div key={user._id}>
                                {user.name}
                            </div>
                        ))
                    }
                </div>
                <button
                    style={{
                        width: '150px',
                        height: '30px',
                        marginTop: '10px',
                        fontSize: '15px'
                    }}
                    onClick={() => getcustomers()}
                >
                    {
                        !loading
                        ? 'fetch users'
                        : '...loading'

                    }
                </button>
            </div>
            <div>
                <h3>sample error 500</h3>
                <button
                    style={{
                        width: '100px',
                        height: '30px',
                        fontSize: '15px'
                    }}
                    onClick={() => setTimeout(
                        () => {
                            dummyApi()
                        }, 1000)
                    }
                >
                    call api
                </button>
            </div>
        </div>
    )
}

export default Home
