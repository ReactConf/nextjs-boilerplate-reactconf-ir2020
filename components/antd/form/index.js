import styled from "styled-components";
import { Form as AntForm } from "antd";

const Form = styled(AntForm)`
	.ant-form-item-has-error .ant-input:not([disabled]):hover,
	.ant-form-item-has-error .ant-input-affix-wrapper:not([disabled]):hover {
		box-shadow: rgb(55, 56, 62) 0px 0px 0px 1000px inset;
		background-color: transparent;
		border-color: transparent;
	}
	.ant-form-item-has-error .ant-input:focus,
	.ant-form-item-has-error .ant-input-affix-wrapper:focus,
	.ant-form-item-has-error .ant-input-focused,
	.ant-form-item-has-error .ant-input-affix-wrapper-focused {
		border-right-width: 0px;
		outline: 0;
		box-shadow: rgb(55, 56, 62) 0px 0px 0px 1000px inset;
	}
	.ant-form-vertical .ant-form-item-label {
		padding: 0px;
	}
	.ant-form-item-label {
		line-height: 45px;
		color: var(--foreground-color);
	}
	.ant-form-item-label > label::after {
		display: inline-block;
		margin-right: 4px;
		color: var(--foreground-color);
		font-size: 18px;
		font-family: SimSun, sans-serif;
		line-height: 1;
		content: "*";
		position: relative;
		top: -5px;
	}
	.ant-form-item-label > label::before {
		content: "";
	}
	.ant-form-item-explain,
	.ant-form-item-extra {
		padding-top: 5px;
	}
`;
export default Form;
