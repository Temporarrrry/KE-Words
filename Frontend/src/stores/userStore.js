import create from 'zustand';

const useUserStore = create(()=>({
  isLoggedIn: false,
  user: null,
}));

export default useUserStore;