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
		const response = await instance
			.post("/login", {
				userEmail: email,
				password: pw,
			})
			.then((res) => {})
			.catch((e) => {
				console.log(e);
				return e.response;
			});
		return response;
	},
};
