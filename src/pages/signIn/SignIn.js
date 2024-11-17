import React from 'react';
import S from './style.js';
import InputComponenet from '../../components/common/InputComponenet.js';

const SignIn = () => {
	return (
		<S.SignInContainer>
			<S.Header>로그인</S.Header>
			<InputComponenet placeholder="아이디" />
			<InputComponenet placeholder="비밀번호" type='password' />
			<S.Sign to={"/signup"}>아직 계정이 없다면?</S.Sign>
		</S.SignInContainer>
	);
};

export default SignIn;