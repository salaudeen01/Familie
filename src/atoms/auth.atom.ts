import { atom } from "recoil"

const authAtom = atom({
  key: 'authentication',
  default: {
    token: localStorage.getItem('accessToken') || null,
    isAuthenticated: true,
    user: null,
  },
});

export default authAtom;