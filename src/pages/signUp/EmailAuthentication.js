import React from 'react';
import S from './style.js';
import InputComponenet from '../../components/common/InputComponenet.js';

const EmailAuthentication = () => {
	return (
		<S.SignUpContainer>
			<S.Header>회원가입</S.Header>
			<S.Description>회원가입을 위해서 이메일을 인증하세요.</S.Description>
			<InputComponenet placeholder={"이메일 주소"} />
			<S.SignLink to={"/login"}>이미 계정이 존재한다면?</S.SignLink>
		</S.SignUpContainer>
	);
};

export default EmailAuthentication;