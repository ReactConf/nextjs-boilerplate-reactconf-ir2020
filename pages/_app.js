import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import AppLocale from "localization";
import get from "lodash/get";
import { ConfigProvider } from "antd";
import GlobalStyle from "styles/injectGlobal";
import { IntlContextProvider } from "hooks/useIntl";

function App(props) {
	const { Component, pageProps, locale } = props;
	const currentAppLocale = AppLocale[locale];
	return (
		<Fragment>
			<GlobalStyle locale={locale} />
			<div dir={locale === "en" ? "ltr" : "rtl"}>
				<IntlProvider
					locale={locale}
					messages={currentAppLocale.messages}
				>
					<IntlContextProvider>
						<ConfigProvider
							direction={locale === "en" ? "ltr" : "rtl"}
						>
							<Component {...pageProps} locale={locale} />
						</ConfigProvider>
					</IntlContextProvider>
				</IntlProvider>
			</div>
		</Fragment>
	);
}

App.getInitialProps = async ({ Component, ctx }) => {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps({ ctx });
	}
	const originalUrl = get(ctx, "req.url", "");
	return {
		pageProps,
		locale: originalUrl.includes("/en") === true ? "en" : "fa"
	};
};

export default App;
