import React from 'react';
import S from './style.js';

const NavSection = () => {
	const btnBorderColor = "#000"
	const btnBorderWidth = "1px"
	return (
		<S.RowContainer>
			<S.BorderLine width={btnBorderWidth} color={btnBorderColor} />
			<S.Button to="/login" >Log in</S.Button>
			<S.BorderLine width={btnBorderWidth} color={btnBorderColor} />
			<S.Button to="/signup" >Sign up</S.Button>
			<S.BorderLine width={btnBorderWidth} color={btnBorderColor} />
		</S.RowContainer>
	);
};

export default NavSection;