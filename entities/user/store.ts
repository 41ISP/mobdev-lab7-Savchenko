import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IUser {
    userID: string
    socketID?: string
}


export interface IUserStore {
    user: IUser
    setUser: (user: IUser) => void
}

export const useUserStore = create<IUserStore>()(
    persist(
        (set) => ({
            user: { userID: ""},
            setUser: (userID) => set((state) => ({...state, user: userID}))
        }),
        {
            name: 'UserStore',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)
