import {
	BookmarkedIcon,
	BookmarkIcon,
	LeftArrow,
	RightArrow,
} from "assets/icons";
import OutlinedButton from "components/common/OutlinedButton";
import PageLayout from "components/common/PageLayout";
import PageMiniTitle from "components/common/PageMiniTitle";
import PageTitle from "components/common/PageTitle";
import { palette } from "lib/styles/palette";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useUserStore from "stores/userStore";

function StudyPage() {
	const { lang, wordNum } = useParams();
	const { bookmarked } = useUserStore();
	const [word, setWord] = useState("");
	const [isBookmarked, setIsBookmarked] = useState(false);

	useEffect(() => {
		//getWord
		//get isBookmarked
	}, []);

	return (
		<PageLayout>
			<ItemLine>
				<PageMiniTitle>
					{lang === "kr" ? "한국어" : "영어"} 단어 공부하기
				</PageMiniTitle>
				<PageMiniTitle color={false}>#{wordNum}</PageMiniTitle>
			</ItemLine>
			<WordInfo color={true}>단어</WordInfo>
			<WordInfo color={false}>단어의 뜻</WordInfo>
			<ItemLine>
				<OutlinedButton width="200px" height="50px">
					<LeftArrow width="50px" height="50px" fill={palette.Primary} />
				</OutlinedButton>
				<OutlinedButton width="200px" height="50px">
					{isBookmarked ? (
						<BookmarkedIcon width="40px" height="50px" fill={palette.Primary} />
					) : (
						<BookmarkIcon width="40px" height="50px" fill={palette.Primary} />
					)}
				</OutlinedButton>
				<OutlinedButton width="200px" height="50px">
					<RightArrow width="50px" height="50px" fill={palette.Primary} />
				</OutlinedButton>
			</ItemLine>
		</PageLayout>
	);
}

const ItemLine = styled.div`
	width: 98%;
	height: 30px;
	display: flex;
	justify-content: space-between;
	margin: 20px auto;
`;

const WordInfo = styled.div`
	width: 98%;
	height: ${(props) => (props.color ? "200px" : "300px")};
	line-height: ${(props) => (props.color ? "200px" : "300px")};
	font-size: ${(props) => (props.color ? "50px" : "30px")};
	color: ${(props) => (props.color ? palette.Primary : palette.Secondary)};
	vertical-align: middle;
	text-align: center;
`;

export default StudyPage;
