import styled from "styled-components";

const S = {};

S.InputContainer = styled.div`
	height: 5rem;
	width: 100%; 
	text-align: center;
`;

S.InputBox = styled.input`
	width: 80%;
	/* height: 2rem; */
	margin : 0 auto;
	padding: 0.6rem;
	border-width: 0 0 2px 0;
	border-radius: 4px 4px 0 0;
	box-sizing: border-box;
	font-size: 0.9rem;
	
	&:focus {
		outline: none;
		border-color: #5A88FF;
	}
	&.valid {
		border-color: green;
	}
	&.invalid {
		border-color: red;
	}
`;

S.AlertValid = styled.div`
	width: 80%;
	margin: 0 auto;
	text-align: end;
	color: ${(props)=> props.color ? props.color : "black"};
	
`;

export default S;