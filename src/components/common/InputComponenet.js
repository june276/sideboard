import React from 'react';
import S from './style.js';

const InputComponenet = ({type="text", placeholder}) => {
	return (
		<S.InputContainer>
			<S.InputBox type={type} placeholder={placeholder} />
		</S.InputContainer>
	);
};

export default InputComponenet;