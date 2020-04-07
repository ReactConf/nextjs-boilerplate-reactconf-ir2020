import styled from "styled-components";
import { isRTL } from "utils/isRTL";

const Style = styled.div`
	position: absolute;
	${({ locale }) =>
		isRTL(locale) ? "left: var(--gap)" : "right: var(--gap)"};
	font-weight: 545;
	font-size: 25vw;
	color: #070708;
	top: 0;
	line-height: 0.75;
	text-align: right;
	letter-spacing: -0.02em;
	z-index: -1;
	.month {
		font-size: 0.75em;
		position: relative;
		top: 20px;
	}
	.counter {
		display: flex;
		font-weight: 500;
		color: var(--gray-color);
		opacity: 0.15;
		justify-content: center;
		margin: -1rem 0 0;
		letter-spacing: -0.07em;
		padding-right: var(--gap);
		min-height: 42px;
	}
`;
export default Style;
