import styled from "styled-components";
import { Input as AntInput } from "antd";
import { isRTL } from "utils/isRTL";
import { fontFamily } from "styles/injectGlobal";
const Input = styled(AntInput)`
	color: var(--foreground-color);
	direction: ${({ locale }) => (isRTL(locale) ? "rtl" : "ltr")};
	text-align: ${({ locale }) => (isRTL(locale) ? "right" : "left")};
	width: 100%;
	border: none;
	margin: 0;
	max-width: 450px;
	padding: 0 16px;
	position: relative;
	font-size: 16px;
	transition: background-color 5000s ease-in-out 0s;
	line-height: 50px;
	background-color: transparent;
	box-shadow: rgb(55, 56, 62) 0px 0px 0px 1000px inset;
	font-family: ${({ locale }) =>
		isRTL(locale) ? fontFamily.persian : fontFamily.english};
	&:focus {
		border-right: none;
		box-shadow: rgb(55, 56, 62) 0px 0px 0px 1000px inset;
		background-color: transparent;
	}
`;
export default Input;
