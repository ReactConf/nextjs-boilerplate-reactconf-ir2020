import React from "react";
import IntlMessage from "utils/intlMessage";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import CountDown from "components/countDown";
import useIntl from "hooks/useIntl";

const Header = ({ locale }) => {
	const intl = useIntl();
	return (
		<header className="header">
			<div className="container-fluid">
				<div className="brand">
					<Link href="/">
						<a
							href="/"
							title={intl.formatMessage({
								id: "reactconf.title"
							})}
						>
							<img
								className="reactconf-logo"
								src="/static/images/ReactConf.svg"
							/>
						</a>
					</Link>
					<div className="language">
						<a href="/en" className="english">
							<span>EN</span>
						</a>
						<a href="/" className="persian">
							<span>FA</span>
						</a>
					</div>
				</div>
				<Parallax y={[-20, 20]} tagOuter="div">
					<h1 className="heroConf">
						<span className="tx-gr-purple">
							<IntlMessage id="main.title.first.line" />
							<i className="tx-dot">
								<IntlMessage id="main.title.between" />
							</i>{" "}
							<i className="tx-gr-purple">
								<IntlMessage id="main.title.second.part" />
							</i>
						</span>

						<br />
						<span className="tx-gr-orange">
							<IntlMessage id="main.title.second.line" />{" "}
							<i className="tx-dot">—</i>{" "}
						</span>
						<br />
						<span className="tx-gr-blue">
							<IntlMessage id="main.title.thrid.line" />
							<i className="tx-dot">. </i>
						</span>
						<br />
						<span className="tx-gr-pink">
							<IntlMessage id="main.title.forth.line" />
							<i className="tx-dot">.</i>
						</span>
					</h1>
				</Parallax>
				<Parallax y={[-20, 50]} tagOuter="div">
					<p className="description">
						<a href="https://twitter.com/hashtag/ReactConfIran2019">
							<IntlMessage id="main.subtitle.hashtag" />
						</a>{" "}
						<IntlMessage id="main.subtitle" />
					</p>
				</Parallax>
				<CountDown locale={locale} />
			</div>
		</header>
	);
};
export default Header;
