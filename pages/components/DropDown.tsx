import { MdKeyboardArrowDown } from "react-icons/md";
import { ChangeEvent, useState } from 'react'
import { coins } from "../json/coins";

interface Props {
    stateValue: {
        iValue: string
        setIValue: (value: string) => void
    }
}

const DropDown = ({ stateValue: { iValue, setIValue } }: Props) => {

    const INITIAL_STATE = Object.keys(coins.symbols)
    const [openDD, setOpenDD] = useState(false)
    const [symbols, setSymbols] = useState<string[]>(INITIAL_STATE)


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setOpenDD(true)


        const value = e.currentTarget.value
        setIValue(value)
        setSymbols(prev => prev.filter(item => item.toLowerCase().includes(value.toLowerCase())))

        if (value.length === 0) return setSymbols(INITIAL_STATE)
    }

    return (
        <div className="relative flex justify-center items-center gap-5">
            <button type="button" className="relative flex justify-center items-center shadow bg-gray-800">
                <input type="search" defaultValue={iValue} onChange={handleChange} onBlur={() => setOpenDD(false)} className="px-4 bg-gray-800 uppercase" />
                <span className="border-l p-2 hover:bg-gray-600" onClick={() => setOpenDD(!openDD)}>
                    <MdKeyboardArrowDown />
                </span>
                {openDD && (<div className="absolute top-full min-w-full w-max bg-gray-800 mt-1">
                    <ul className="text-left">
                        {symbols.map((item, i) => (
                            <li key={i} className="px-4 py-1 hover:bg-gray-600 border-b cursor-text" id={item}>{item}</li>
                        ))}
                    </ul>
                </div>)}
            </button>
        </div>
    )
}

export default DropDown