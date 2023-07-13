import { create } from 'zustand';

interface LoginStore {
  isLogin : boolean
  logIn : () => void
  logOut : () => void
}

const useLogin = create<LoginStore>((set) => ({
  isLogin: false,
  logIn: () => set({ isLogin: true }),
  logOut: () => set({ isLogin: false }),
}));

export default useLogin;
