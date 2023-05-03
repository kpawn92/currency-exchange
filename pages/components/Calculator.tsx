import { FormEvent, useState } from "react"
import DropDown from "./DropDown"
import { useMutation } from "@tanstack/react-query"
import { fetchData } from "../hooks/useFetch"
// import { useConvertStore } from "../store/conver"
import Loading from "./Loading"
import { ApiLayer } from "../types/response"

const Calculator = () => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [data, setData] = useState<ApiLayer>()

    const { mutateAsync, isLoading } = useMutation(fetchData)


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const amount = e.currentTarget.amount.value

        mutateAsync({ to: to.toUpperCase(), from: from.toUpperCase(), amount })
            .then(value => value.json())
            .then(result => setData(result))
    }

    return (
        <form className="rounded-sm flex justify-center my-32 bg-gray-900 w-auto py-4 border border-gray-700" onSubmit={handleSubmit}>
            <div>
                <div>
                    <div className="text-center py-4">
                        <h3 className="font-bold text-4xl">Currency exchange</h3>
                    </div>

                    <div className="flex items-center">
                        <div className="px-2">
                            <DropDown stateValue={{ iValue: to, setIValue: setTo }} label="To" />
                        </div>

                        <div className="px-2">
                            <DropDown stateValue={{ iValue: from, setIValue: setFrom }} label="From" />
                        </div>

                        <div className="relative flex justify-center items-center shadow bg-gray-800 py-1 px-1 mx-2">
                            <label htmlFor="amount" className="px-2">Amount</label>
                            <input type="number" className="px-4 bg-gray-800 rounded-sm border border-gray-700 uppercase" required id="amount" />
                        </div>
                    </div>

                </div>
                <div className="flex justify-center py-2">
                    <button className="rounded-sm bg-yellow-500 px-4 py-1 font-bold text-black">Convert {isLoading && <Loading />}</button>
                </div>

                <div className="text-center py-4">
                    <div>RESULT: <p data-testid='success-message'>{data && String(data.result)}</p></div>
                </div>
            </div>
        </form>
    )
}

export default Calculator