import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ApiLayer } from '../types/response'


type State = {
    dataConvert: ApiLayer | null
}

type Actions = {
    setDataConvert: (dataConvert: ApiLayer) => void
}


export const useConvertStore = create(persist<State & Actions>(
    (set) => ({
        dataConvert: null,
        setDataConvert: (dataConvert: ApiLayer) => set(() => ({
            dataConvert,
        })),
    }), {
    name: 'convert'
}
))