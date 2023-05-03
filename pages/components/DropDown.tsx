import { MdKeyboardArrowDown } from "react-icons/md";
import { ChangeEvent, useId, useState } from 'react'
import { coins } from "../json/coins";

interface Props {
    stateValue: {
        iValue: string
        setIValue: (value: string) => void
    };
    label: string;
}

const DropDown = ({ stateValue: { iValue, setIValue }, label }: Props) => {

    const id = useId()

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
            <div className="relative flex justify-center items-center shadow bg-gray-800 cursor-pointer">
                <label htmlFor={id} className="px-2">{label}</label>
                <input type="search" id={id} defaultValue={iValue} onChange={handleChange} onBlur={() => setOpenDD(false)} className="px-4 bg-gray-800 rounded-sm border border-gray-700 uppercase" />
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
            </div>
        </div>
    )
}

export default DropDown