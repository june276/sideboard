import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};

S.SignUpContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* background-color: blanchedalmond; */
`;

S.Header = styled.h2`
	text-align: center;
	margin: 3rem auto 1rem;
`;

S.SignLink = styled(Link)`
	width: 100%;
	text-align: end;
	padding-right: 3rem;
`;

S.Description = styled.p`
	font-size: 1rem;
	width: 80%;
	margin: 1rem auto;
	padding: 0;
	/* text-align: center; */
`;

export default S;