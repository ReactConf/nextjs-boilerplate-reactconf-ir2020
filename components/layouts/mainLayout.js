import "styles/styles.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./header";
import Footer from "./footer";
import Head from "components/head";
import React, { Fragment } from "react";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import useIntl from "hooks/useIntl";

const MainLayout = ({ children, locale }) => {
	const intl = useIntl();
	return (
		<Fragment>
			<Head />
			<NextSeo
				openGraph={{
					type: "website",
					url: "https://reactconf.ir",
					title: intl.formatMessage({ id: "reactconf.title" }),
					description: intl.formatMessage({
						id: "reactconf.description"
					}),
					images: [
						{
							url: "/static/reactconf-iran-share.jpg",
							width: 800,
							height: 400,
							alt: "reactconf"
						},
						{
							url: "/static/reactconf-iran-share.jpg",
							width: 800,
							height: 400,
							alt: "reactconf"
						}
					]
				}}
				twitter={{
					handle: "@reactconf_ir",
					site: "@site",
					cardType: "summary_large_image"
				}}
			/>
			<SocialProfileJsonLd
				type="Organization"
				name="ReactConf"
				url="https://reactconf.ir"
				sameAs={[
					"https://instagram.com/reactconf",
					"https://twitter.com/reactconf_ir",
					"https://www.youtube.com/channel/UCFd13z4XR4A3zHKLHV0X7Xg"
				]}
			/>
			<ParallaxProvider>
				<main>
					<Header locale={locale} />
					{children}
					<Footer locale={locale} />
				</main>
			</ParallaxProvider>
		</Fragment>
	);
};
export default MainLayout;
