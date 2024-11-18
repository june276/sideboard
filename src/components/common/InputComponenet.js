import React from 'react';
import S from './style.js';

const InputComponenet = ({
	type="text",
	value="",
	placeholder="",
	onChange = ()=>{},
	onBlur = ()=>{},
	onFocus = ()=>{},
}) => {
	return (
		<S.InputContainer>
			<S.InputBox
					type={type} 
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					onFocus={onFocus}
			/>
		</S.InputContainer>
	);
};

export default InputComponenet;