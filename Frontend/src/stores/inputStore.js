import create from 'zustand';

const useInputStore = create((set)=>({
  id: "",
  setId: (e)=> set(state => ({id: e.target.value}))
}));

export default useInputStore;