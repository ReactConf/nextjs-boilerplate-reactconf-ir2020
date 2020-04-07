import React, { useEffect, useState, Fragment } from "react";
import People from "components/people";
import Clients from "components/clients";
import IntlMessage from "utils/intlMessage";
import { shuffle } from "utils/shuffle";
import Style from "partials/home/style";
import data from "mock/data";
import DoubleGrid from "components/layouts/doubleGrid";
import SingleGrid from "components/layouts/singleGrid";
import SponsorItem from "components/sponsorItem";
import SubscribeForm from "components/subscribeForm";
import MainLayout from "components/layouts/mainLayout";
import { NextSeo } from "next-seo";
import useIntl from "hooks/useIntl";
import getConfig from "next/config";
const {
	publicRuntimeConfig: { RANDOM_USER_LIMIT }
} = getConfig();

const { team, partners, sponsors, friends, cfp } = data;

function Home({ locale }) {
	const intl = useIntl();
	const [randomUsers, setRandomUsers] = useState([]);
	useEffect(() => {
		import("mock/users.json").then(users => {
			const shuffleUsers = shuffle(users.default);
			shuffleUsers.length = RANDOM_USER_LIMIT || 250;
			setRandomUsers(shuffleUsers);
		});
	}, []);
	return (
		<Fragment>
			<NextSeo
				title={intl.formatMessage({ id: "reactconf.title" })}
				description={intl.formatMessage({
					id: "reactconf.description"
				})}
				canonical="https://reactconf.ir"
			/>
			<Style locale={locale}>
				<MainLayout locale={locale}>
					<SingleGrid
						title="speakers.title"
						color="tx-gr-orange multi-height"
						grid="280px"
					>
						<People data={cfp} />
					</SingleGrid>
					<DoubleGrid title="meet.people.title" grid="50px">
						{randomUsers.map((user, index) => (
							<Clients data={user} key={index} />
						))}
					</DoubleGrid>
					<SingleGrid title="partners.title" grid="180px">
						{partners.map(partner => (
							<SponsorItem data={partner} key={partner.url} />
						))}
					</SingleGrid>
					<SingleGrid title="partners.friends.title" grid="120px">
						{sponsors.map(partner => (
							<SponsorItem data={partner} key={partner.url} />
						))}
					</SingleGrid>
					<DoubleGrid title="core.team.title" grid="280px">
						{team.map(person => (
							<People key={person.id} data={person} />
						))}
					</DoubleGrid>
					<DoubleGrid title="friends.team.title" grid="280px">
						{friends.map(friend => (
							<People key={friend.id} data={friend} />
						))}
					</DoubleGrid>
					<SubscribeForm locale={locale} />
					<SingleGrid
						title="sponsors.title"
						color="tx-gr-purple multi-height"
						grid="280px"
					>
						<span>
							<p className="get-touch">
								<IntlMessage id="sponsors.subtitle" />
							</p>
							<div className="sponsors-btn">
								<a
									className="btn"
									href="mailto: reactconf.ir@gmail.com"
								>
									<img src="/static/images/contact.svg" />
									<IntlMessage id="sponsors.btn.title" />
								</a>
							</div>
						</span>
					</SingleGrid>
				</MainLayout>
			</Style>
		</Fragment>
	);
}
export default Home;
