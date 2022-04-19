import React from "react";
import { Link } from "react-router-dom";
import useUserStore from "stores/userStore";
import styled from "styled-components";
import HeaderButton from "./HeaderButton";

function Header() {
	const { isLoggedIn } = useUserStore((state) => state.isLoggedIn);
	const menu = isLoggedIn
		? [{ text: "내 정보", route: "/mypage" }]
		: [
				{ text: "로그인", route: "/login" },
				{ text: "가입하기", route: "/register" },
		  ];

	return (
		<Wrapper>
			<Link to="/">
				<img
					src="https://github.com/L-Hyun/KE-Words/blob/main/assets/logo_small.png?raw=true"
					alt="Logo"
				/>
			</Link>
			<Wrapper>
				{menu.map((e, i) => {
					return (
						<HeaderButton
							text={e.text}
							route={e.route}
							key={`Header_Menu_${i}`}
						/>
					);
				})}
			</Wrapper>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
`;

export default Header;
