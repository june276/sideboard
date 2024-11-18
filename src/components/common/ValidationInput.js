import React, { useEffect, useState } from 'react';
import S from './style.js';
import useDebounce from '../../hooks/useDebounce.js';

const ValidationInput = ({
	validateFunction = ()=>{return true},
	delay = 500,
	onValidInput,
	onValidationChange,
	placeholder,
	type
}) => {
	const [value, setValue]	= useState("");
	const [isValid, setIsValid] = useState(null);
	
	const debouncedValue = useDebounce(value, delay);

	useEffect(()=>{
		if (debouncedValue.trim() === "") {	// 빈칸일 경우 초기 상태로 리셋
      setIsValid(null);
      onValidationChange?.({ value: debouncedValue, isValid: null });
      return;
    }

    const result = validateFunction(debouncedValue);
    setIsValid(result);
    // 유효성 검사 결과 상위 전달
    onValidationChange?.({ value: debouncedValue, isValid: result });

    // 유효성 통과 시 값 상위 전달
    if (result) {
      onValidInput?.(debouncedValue);
    }
	}, [
		debouncedValue,
		validateFunction,
		onValidationChange,
		onValidInput
	]);

	const iconStyle = {"-webkit-text-stroke": "0.5px"};

	return (
		<S.InputContainer>
			<S.InputBox
					type={type} 
					placeholder={placeholder}
					value={value}
					onChange={(e)=>{setValue(e.target.value)}}
					className={isValid !== null && (isValid ? "valid" : "invalid") }
			/>
			{
				isValid !== null && (
					<S.AlertValid color={isValid ? "green" : "red"}>
						{isValid ?
							(
								<i style={iconStyle} className='bi bi-check-circle'></i>
							) : (
								<>
									올바르지 않은 형식 <i style={iconStyle} className='bi bi-x-circle'></i>
								</>
							)
						}
					</S.AlertValid>
				)
			}
		</S.InputContainer>
	);
};

export default ValidationInput;