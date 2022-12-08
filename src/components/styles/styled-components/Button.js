import styled from 'styled-components';

const Button = styled.button`
	display: block;
	background-color: #b20a2c;
	color: hsla(0, 0%, 96%, 0.91);
	font-size: 1.4rem;
	border: 0;
	height: 40px;
	padding: 0 20px;
	cursor: pointer;
	box-sizing: border-box;
	/* font-family: 'Arial', sans-serif; */
	font-family: 'Gemini Moon', sans-serif;
	color: #fcffbb;

	&hover {
		transition-duration: 1000ms;
		background-color: #b20a2c;
		border-radius: 70%;
	}
`;
export default Button;
