import React, { useState, useEffect, Fragment } from "react";
import { Parallax } from "react-scroll-parallax";
import MultiLingualNumber from "components/multiLingualNumber";
import Style from "./style";
import IntlMessage from "utils/intlMessage";
import getConfig from "next/config";
const {
	publicRuntimeConfig: { REACT_CONF_DATE }
} = getConfig();

function CountDown({ confDate, locale }) {
	const [days, setDays] = useState(0);
	const [isEnd, setIsEnd] = useState(false);
	let timeInterval;
	useEffect(() => {
		countDownTimer();
	}, []);
	const countDownTimer = () => {
		const t = getTimeRemaining();
		setDays(`${t.finalDays}`);
		setIsEnd(t.isEnd);
		if (t.isEnd) {
			clearInterval(timeInterval);
		}
		return t;
	};
	const getTimeRemaining = () => {
		const currentTime = new Date();
		const confTime = new Date(confDate);
		const timeToConf = confTime - currentTime;
		const finalDays = Math.floor(timeToConf / 86400000);
		const finalHours = Math.floor((timeToConf % 86400000) / 3600000);
		const finalMinutes = Math.floor(
			((timeToConf % 86400000) % 3600000) / 60000
		);
		const finalSeconds = Math.floor(
			(((timeToConf % 86400000) % 3600000) % 60000) / 1000
		);
		return {
			isEnd: finalSeconds <= 0 && finalMinutes <= 0 && finalHours <= 0,
			finalDays
		};
	};
	if (!isEnd) {
		return (
			<Style locale={locale}>
				<Parallax y={[-100, 60]} tagOuter="div">
					<div className="days">
						<MultiLingualNumber locale={locale}>
							{days}
						</MultiLingualNumber>
					</div>
				</Parallax>
				<Parallax y={[-20, 60]} tagOuter="div">
					<div className="counter">
						<IntlMessage id="days.title" />
					</div>
				</Parallax>
			</Style>
		);
	} else {
		return <Fragment />;
	}
}
CountDown.defaultProps = {
	confDate: REACT_CONF_DATE || "July 30, 2020 08:00:00"
};
export default CountDown;
