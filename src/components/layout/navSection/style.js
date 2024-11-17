import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';

const S = {};

S.RowContainer = styled.div`
	position: fixed;
	top:0;
	left: 0;
	width: 25%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
	padding: 0rem;
`;

S.BorderLine = styled.div`
	height: ${(props)=>props.width};
	background-color: ${(props)=>props.color};
	margin: 0rem;
`;

S.Button = styled(NavLink)`
	width: 100%;
	height: 3rem;
	border: 0;
	background-color: #fff;
	font-size: 1rem;
	cursor: pointer;
	text-decoration: none;
	color: black;
	text-align: center;
	line-height: 3rem;

	&.active{
		background-color: #f4f4f4;
	}
`;




export default S;