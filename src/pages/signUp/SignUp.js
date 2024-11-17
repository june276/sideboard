import React from 'react';
import S from './style.js';
import InputComponenet from '../../components/common/InputComponenet.js';

const SignUp = () => {
	return (
		<S.SignUpContainer>
			<S.Header>회원가입</S.Header>
			<InputComponenet placeholder="아이디" />
			<InputComponenet placeholder="비밀번호" type='password' />
			<InputComponenet placeholder="비밀번호 확인" type='password' />
		</S.SignUpContainer>
	);
};

export default SignUp;