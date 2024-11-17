import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};

S.SignInContainer = styled.div`
	width: 100%;
	height: 100vh;
	/* background-color: #ccc; */
	display: flex;
	flex-direction: column;
`;

S.Header = styled.h2`
	margin: 3rem auto 1rem;
`;

S.Sign = styled(Link)`
	width: 100%;
	text-align: end;
	padding-right: 3rem;
`;


export default S;