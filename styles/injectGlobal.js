import { createGlobalStyle } from "styled-components";
import { isRTL } from "utils/isRTL";

export const fontFamily = {
	persian:
		"Vazir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
	english:
		"Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"	"
};

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Inter';
font-weight: 100 900;
font-style: normal;
font-named-instance: 'Regular';
src: url("/static/fonts/inter.woff2") format("woff2");
}

///vazir font 
@font-face {
font-family: Vazir;
src: url('static/fonts/vazir/eot/Vazir.eot');
src: url('static/fonts/vazir/eot/Vazir.eot?#iefix') format('embedded-opentype'),
 url('static/fonts/vazir/woff2/Vazir.woff2') format('woff2'),
 url('static/fonts/vazir/woff/Vazir.woff') format('woff'),
 url('static/fonts/vazir/ttf/Vazir.ttf') format('truetype');
font-weight: normal;
font-style: normal;
  }
  
  @font-face {
font-family: Vazir;
src: url('static/fonts/vazir/eot/Vazir-Bold.eot');
src: url('static/fonts/vazir/eot/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
 url('static/fonts/vazir/woff2/Vazir-Bold.woff2') format('woff2'),
 url('static/fonts/vazir/woff/Vazir-Bold.woff') format('woff'),
 url('static/fonts/vazir/ttf/Vazir-Bold.ttf') format('truetype');
font-weight: bold;
font-style: normal;
  }
  
  @font-face {
font-family: Vazir;
src: url('static/fonts/vazir/eot/Vazir-Light.eot');
src: url('static/fonts/vazir/eot/Vazir-Light.eot?#iefix') format('embedded-opentype'),
 url('static/fonts/vazir/woff2/Vazir-Light.woff2') format('woff2'),
 url('static/fonts/vazir/woff/Vazir-Light.woff') format('woff'),
 url('static/fonts/vazir/ttf/Vazir-Light.ttf') format('truetype');
font-weight: 300;
font-style: normal;
  }
  
  @font-face {
font-family: Vazir;
src: url('static/fonts/vazir/eot/Vazir-Medium.eot');
src: url('static/fonts/vazir/eot/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
 url('static/fonts/vazir/woff2/Vazir-Medium.woff2') format('woff2'),
 url('static/fonts/vazir/woff/Vazir-Medium.woff') format('woff'),
 url('static/fonts/vazir/ttf/Vazir-Medium.ttf') format('truetype');
font-weight: 500;
font-style:normal;
  }
  
  @font-face {
font-family: Vazir;
src: url('static/fonts/vazir/eot/Vazir-Thin.eot');
src: url('static/fonts/vazir/eot/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
 url('static/fonts/vazir/woff2/Vazir-Thin.woff2') format('woff2'),
 url('static/fonts/vazir/woff/Vazir-Thin.woff') format('woff'),
 url('static/fonts/vazir/ttf/Vazir-Thin.ttf') format('truetype');
font-weight: 100;
font-style:normal;
  }
  
  @font-face {
font-family: Vazir;
src: url('static/fonts/vazir/eot/Vazir-Black.eot');
src: url('static/fonts/vazir/eot/Vazir-Black.eot?#iefix') format('embedded-opentype'),
 url('static/fonts/vazir/woff2/Vazir-Black.woff2') format('woff2'),
 url('static/fonts/vazir/woff/Vazir-Black.woff') format('woff'),
 url('static/fonts/vazir/ttf/Vazir-Black.ttf') format('truetype');
font-weight: 900;
font-style: style;
  }  
	body {
		direction:  ${({ locale }) => (isRTL(locale) ? "rtl" : "ltr")};
		font-family: ${({ locale }) =>
	isRTL(locale) ? fontFamily.persian : fontFamily.english};
		color: red;
	}
	.ant-message-notice-content {
		color:var(--foreground-color);
		box-shadow:
		0 2.8px 2.2px rgba(0, 0, 0, 0.034),
		0 6.7px 5.3px rgba(0, 0, 0, 0.048),
		0 12.5px 10px rgba(0, 0, 0, 0.06),
		0 22.3px 17.9px rgba(0, 0, 0, 0.072),
		0 41.8px 33.4px rgba(0, 0, 0, 0.086),
		0 100px 80px rgba(0, 0, 0, 0.12);
		background-color:#37383e;
		font-family: ${({ locale }) =>
	isRTL(locale) ? fontFamily.persian : fontFamily.english};
	}
	.ant-message .anticon {
	 ${({ locale }) => (isRTL(locale) ? "margin-left: 8px" : "margin-right: 8px")}
	}
	.ant-form-item-explain, .ant-form-item-extra {
		padding-top:10px;
	}
	
	.ant-cascader-menus {
		font-family: 'Inter';
	}
	.ant-cascader-menu{
		padding-bottom:10px;
		 .ant-cascader-menu-item-expand,.ant-cascader-menu-item {
			font-size:14px;
		}
	}
	.ant-cascader-picker .ant-cascader-input  {
		border:none;
		font-size: 14px;
		padding:0px 11px;
		transition: background-color 5000s ease-in-out 0s; 
		line-height: 50px;
		box-shadow: rgb(55, 56, 62) 0px 0px 0px 1000px inset;
	}
	.ant-cascader-picker {
		max-width:450px;
		width:100%;
		background-color:#37383e;
		color: var(--foreground-color);
	}
	.ant-cascader-picker:focus .ant-cascader-input {
		border-color:transparent;
		box-shadow:none;
	}
	.ant-cascader-picker-label {
		z-index:9999;
	}
	`;
export default GlobalStyle;
