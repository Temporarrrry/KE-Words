import create from "zustand";

const useUserStore = create(() => ({
	isLoggedIn: false,
	user: null,
	bookmarked: null,
}));

export default useUserStore;
