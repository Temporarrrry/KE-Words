import axios from "axios";

const parseJwt = (token: string) => {
	let base64Url = token.split(".")[1];
	let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	let jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	return JSON.parse(jsonPayload);
};

const instance = axios.create({
	baseURL: "http://43.201.192.197:8080/",
	timeout: 3000,
});

export default {
	login: async (email: string, pw: string) => {
		let form = new FormData();
		form.append("userEmail", email);
		form.append("password", pw);

		const response = await instance
			.post("/member/login", form)
			.then((res) => {
				return res;
			})
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
	register: async (email: string, pw: string) => {
		const response = await instance
			.post("/member/register", {
				userEmail: email,
				password: pw,
			})
			.then((res) => {
				return res;
			})
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
};
