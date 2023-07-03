import { create } from "zustand";

interface UserInfo {
  isLoggedIn: boolean;
  email: string;
  id: number;
  accessToken: string;
  refreshToken: string;

  setIsLoggedIn: (val: boolean) => void;
  setEmail: (val: string) => void;
  setId: (val: number) => void;
  setAccessToken: (val: string) => void;
  setRefreshToken: (val: string) => void;
}

export default create<UserInfo>((set) => ({
  isLoggedIn: false,
  email: "",
  id: -1,
  accessToken: "",
  refreshToken: "",

  setIsLoggedIn: (val: boolean) => {
    set({ isLoggedIn: val });
  },
  setEmail: (val: string) => {
    set({ email: val });
  },
  setId: (val: number) => {
    set({ id: val });
  },
  setAccessToken: (val: string) => {
    set({ accessToken: val });
  },
  setRefreshToken: (val: string) => {
    set({ refreshToken: val });
  },
}));
