import {create} from 'zustand'

import {persist, createJSONStorage} from 'zustand/middleware'


interface AuthStore {
    isLogin: boolean
    login: (token: string) => void
    logout: () => void
    token?: string
}


const useAuthStore = create(persist<AuthStore>((set) => ({
    token: '',
    isLogin: false,
    login: (token) => set({isLogin: true, token}),
    logout: () => set({isLogin: false}),
}), {
    name: 'auth-storage', // unique name
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
}))

export default useAuthStore