import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage(Component => props =>
			sheet.collectStyles(<Component {...props} />)
		);

		const styleElements = sheet.getStyleElement();
		return { ...page, styleElements };
	}

	render() {
		const { styleElements } = this.props;

		return (
			<html>
				<Head>{styleElements}</Head>
				<body>
					<div className="root">
						<Main />
					</div>
					<NextScript />
				</body>
			</html>
		);
	}
}
