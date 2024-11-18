import React, { useCallback, useState } from 'react';
import S from './style.js';
import InputComponenet from '../../components/common/InputComponenet.js';
import ValidationInput from '../../components/common/ValidationInput.js';

const EmailAuthentication = () => {
	const [ email, setEmail ] = useState("");

	const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

	 // 유효성 검사 결과 변경 시 처리
	const handleValidationChange = ({ value, isValid }) => {
    console.log("Validation Change:", { value, isValid });
  };

  // 유효성 통과 값 처리
  const handleValidInput = (value) => {
    console.log("Valid Input:", value);
    setEmail(value);
  };

	return (
		<S.SignUpContainer>
			<S.Header>회원가입</S.Header>
			<S.Description>회원가입을 위해서 이메일을 인증하세요.</S.Description>
			<ValidationInput 
				validateFunction={validateEmail}
				delay={300}
				onValidationChange={handleValidationChange}
				onValidInput={handleValidInput}
			/>
			<S.SignLink to={"/login"}>이미 계정이 존재한다면?</S.SignLink>
		</S.SignUpContainer>
	);
};

export default EmailAuthentication;