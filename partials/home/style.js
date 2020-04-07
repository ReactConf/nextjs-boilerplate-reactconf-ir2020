import styled from "styled-components";
import { isRTL } from "utils/isRTL";
import { fontFamily } from "styles/injectGlobal";

const Style = styled.div`
	font-family: ${({ locale }) =>
		isRTL(locale) ? fontFamily.persian : fontFamily.english};
	p {
		span {
			line-height: 25px;
		}
		line-height: 25px;
	}
	.section {
		margin: calc(var(--baseline) * 3) 0;
		&__outline {
			.heading {
				width: 20rem;
				font-weight: 888;
				margin-top: var(--baseline);
				margin-bottom: 0;
				max-width: 100%;
				font-family: ${({ locale }) =>
					isRTL(locale) ? fontFamily.persian : fontFamily.english};
				text-align: ${({ locale }) =>
					isRTL(locale) ? "right" : "left"};
				line-height: ${({ locale }) =>
					isRTL(locale) ? "45px" : "calc(var(--baseline) * 1.5)"};
				// line-height: calc(var(--baseline) * 1.5);
				@media only screen and (min-width: 48rem) {
					position: -webkit-sticky;
					position: sticky;
					top: 65px;
					text-align: ${({ locale }) =>
						isRTL(locale) ? "right" : "left"};
				}
				@media only screen and (max-width: 768px) {
					margin-bottom: 20px;
				}
			}
		}
	}

	.fr {
		position: relative;
		background-image: url("/static/video/pr.gif");
		background-size: cover;

		background-position: center;
		background-color: var(--black-color);
		min-height: 40rem;

		@media screen and (min-width: 48rem) {
			margin: 0;
		}
		iframe {
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}
	.people {
		margin: 0 0 var(--baseline);
		&.hero {
			z-index: 999999;
			display: flex;
			flex-direction: column;
			justify-items: stretch;
			align-items: center;
			@media only screen and (min-width: 48rem) {
				display: grid;
				grid-template-columns: 1fr 1.5fr;
				grid-column-gap: calc(var(--gap) * 2);
			}
			@media only screen and (max-width: 768px) {
				.people__bio {
					margin-top: 20px;
				}
			}
			.people__avatar {
				min-height: 400px;
				img {
					height: 400px;
					object-fit: fill;
				}
			}
		}
		&__avatar {
			position: relative;
			background: #e50914;
			overflow: hidden;
			border-radius: var(--radius);
			margin-bottom: var(--baseline);
			min-height: 280px;
			img {
				display: block;
				margin: 0;
				width: 100%;
				height: auto;
				object-fit: cover;

				-webkit-filter: grayscale(100%) contrast(1.2);
				filter: grayscale(100%) contrast(1.2);
				mix-blend-mode: darken;
			}
			&:after {
				content: "";
				display: block;
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				${({ locale }) => (isRTL(locale) ? "right: 0" : "left: 0")};
				background: #0c087d;
				mix-blend-mode: lighten !important;
				-webkit-filter: contrast(1.1) !important;
				filter: contrast(1.1) !important;
			}
		}
		&__name {
			margin-bottom: calc(var(--baseline) / 2);
			font-weight: 900;
			line-height: 40px;
			word-break: break-word;
		}
		&__subject {
			margin-bottom: calc(var(--baseline) / 2);
		}
		&__bio {
			font-weight: 350;
			color: var(--light-gray-color);
			font-size: 1rem;
			// line-height: 1.5;
			line-height: 25px;
			word-break: break-word;
			text-align: ${({ locale }) => (isRTL(locale) ? "right" : "left")};
		}
		&__social {
			margin-bottom: 1px;
			.icon {
				${({ locale }) =>
					isRTL(locale) ? "margin-left: 1em" : "margin-right: 1em"};
			}
		}
		&__link {
			margin-top: 20px;
			a {
				color: var(--secondary-color);
				&:hover {
					color: var(--secondary-color);
				}
			}
		}
		.tech-icons {
			span {
				color: var(--primary-color);
				&:hover {
					color: var(--secondary-color);
				}
			}
		}
	}
	.clients {
		margin: 0;
		&__avatar {
			position: relative;
			background: #e50914;
			overflow: hidden;
			border-radius: var(--radius);
			margin-bottom: 0;
			min-height: 50px;
			width: 50px;
			img {
				display: block;
				margin: 0;
				width: 100%;
				height: auto;
				object-fit: cover;

				-webkit-filter: grayscale(100%) contrast(1.2);
				filter: grayscale(100%) contrast(1.2);
				mix-blend-mode: darken;
			}
			&:after {
				content: "";
				display: block;
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				${({ locale }) => (isRTL(locale) ? "right: 0" : "left: 0")};
				// -webkit-filter: contrast(1.3);
				// filter: contrast(1.3);
				// mix-blend-mode: hue;
				background: #0c087d;
				mix-blend-mode: lighten !important;
				-webkit-filter: contrast(1.1) !important;
				filter: contrast(1.1) !important;
			}
		}
	}
	.Grid {
		display: flex;
		flex-direction: column;
		@media only screen and (min-width: 48rem) {
			display: grid;
			grid-template-columns: 1fr 3fr;
			grid-gap: calc(var(--gap) * 3);
			grid-template-areas: ". .";
		}
	}

	.location {
		position: relative;
		background-image: url("/static/images/hall.jpg");
		background-size: cover;
		background-position: center;
		background-color: var(--black-color);
		min-height: 40rem;
		@media only screen and (min-width: 48rem) {
			height: 80vh;
		}
		&__query {
			position: absolute;
			bottom: 0;
			width: 33.3%;
			padding: var(--gap);
			background: var(--background-color);
			@media only screen and (max-width: 48rem) {
				position: relative;
				width: 100%;
			}
			h3 {
				font-weight: 800;
				line-height: 1.2;
			}
		}
	}
	.surprise {
		position: relative;
		background-image: url("/static/images/surprise.jpg");
		background-size: cover;
		background-position: center;
		background-color: var(--black-color);
		min-height: 40rem;
		@media only screen and (min-width: 48rem) {
			height: 80vh;
		}
		&__query {
			position: absolute;
			bottom: 0;
			width: 33.3%;
			padding: var(--gap);
			background: var(--background-color);
			@media only screen and (max-width: 48rem) {
				position: relative;
				width: 100%;
			}
			h3 {
				font-weight: 800;
				line-height: 1.2;
			}
		}
	}
	.talk {
		position: relative;
		background-image: url("/static/images/talking.jpg");
		background-size: cover;
		background-position: center;
		background-color: var(--black-color);
		min-height: 40rem;
		@media only screen and (min-width: 48rem) {
			height: 80vh;
		}
		&__query {
			position: absolute;
			bottom: 0;
			width: 33.3%;
			padding: var(--gap);
			background: var(--background-color);
			@media only screen and (max-width: 48rem) {
				position: relative;
				width: 100%;
			}
			h3 {
				font-weight: 800;
				line-height: 1.2;
			}
		}
	}
	.sponsors--item {
		position: relative;
		margin: 0;
		margin-bottom: 1.5rem;
		align-self: center;
		a {
			display: block;
		}
	}

	.sponsors--item-image {
		display: block;
		max-width: 100%;
		margin: 0 auto;
		height: auto;
		object-fit: cover;
		object-position: 50% 50%;
		filter: grayscale(1);
		opacity: 0.6;
		transition: 0.3s;

		&:hover {
			opacity: 1;
		}
	}

	.sponsors--item-title {
		display: block;
		margin: 0.25em auto 0;
		color: var(--foreground-color);
		text-align: center;
	}

	.sponsors--item-type {
		display: block;
		font-size: 0.85em;
		margin: 0 auto 0;
		text-align: center;
	}

	.ticket {
		position: relative;
		background-color: var(--black-color);
		background-image: url("/static/images/ticket.jpg");
		background-size: cover;
		background-position: center;
		min-height: 40rem;
		height: 50vh;
		// background-image: linear-gradient(to right top, #dd51a0, #d26abd, #c381d3, #b395e3, #a7a7ec, #99b4f6, #8cc0fb, #83cbfe, #67d7ff, #49e1ff, #37ebf7, #43f4e8);
	}
	.ticket--card {
		text-align: center;
		width: 36rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0 4.5rem;
		max-width: 100%;
		color: var(--gray-color);
		border-radius: 0.5rem;
		background: #fff;
		box-shadow: 0 2rem 50px rgba(50, 60, 90, 0.13);
		z-index: 11;
		h2 {
			margin-top: var(--baseline);
			font-weight: 900;
			color: #5232ea;
			letter-spacing: -0.05em;
			font-size: 3rem;
			margin: 0 0 var(--baseline);
			small {
				opacity: 0.9;
				text-transform: uppercase;
				font-size: 0.5em;
				position: relative;
				bottom: 4px;
				left: 5px;
				font-weight: 700;
				letter-spacing: -0.025em;
			}
		}
		h2.offer {
			position: relative;
			font-size: 1.5em;
			margin: 0 auto;
			display: table;
			color: var(--gray-color);
			&:before {
				content: "";
				position: absolute;
				top: 50%;
				height: 1px;
				width: 100%;
				background-color: currentColor;
				left: 0;
				right: 0;
			}
		}
		.btn {
			padding: 0.75rem 5rem !important;
			margin: 0 auto;
		}
		&:before {
			content: " ";
			display: block;
			background: rgba(#fff, 1);
			border-radius: 0.5rem;
			position: absolute;
			left: 1.7rem;
			top: -0.7rem;
			width: calc(100% - 3.4rem);
			height: calc(100% + 1.4rem);
			z-index: -1;
			box-shadow: 0 2rem 50px rgba(50, 60, 90, 0.13);
		}
		&:after {
			content: " ";
			display: block;
			background: rgba(#fff, 1);
			border-radius: 0.5rem;
			position: absolute;
			left: 3rem;
			top: -2rem;
			width: calc(100% - 6rem);
			height: calc(100% + 4rem);
			z-index: -1;
			box-shadow: 0 2rem 50px rgba(50, 60, 90, 0.13);
		}
	}

	.footer {
		margin: 10vh 0 5vh;
		.container {
			padding-top: 4vh;
			border-top: 1px solid rgba(#eee, 0.1);
		}
		.footer-logo {
			display: inline-block;
			&.space {
				margin-left: 20px;
			}
			img {
				vertical-align: sub;
				width: 200px;
				height: auto;
			}
		}
		.first-logo img {
			position: relative;
			${({ locale }) => (isRTL(locale) ? "left: 0" : "left: -40px")};
		}
		.second-logo {
			@media only screen and (max-width: 450px) {
				margin-top: 10px;
			}
		}

		._logo {
			margin-bottom: 1vh;
		}
		p {
			width: 45rem;
			color: var(--light-gray-color);
			max-width: 100%;
		}
		.socials {
			a {
				color: var(--light-gray-color);
				&:hover {
					color: var(--secondary-color);
				}
			}
			.icon {
				margin-right: 0.75em;
			}
		}
	}
	.header {
		padding: var(--baseline) 0;
		margin-bottom: var(--baseline);
	}
	.container-fluid {
		position: relative;
		z-index: 1;
	}
	.logo {
		width: 50rem;
		object-fit: cover;
		position: absolute;
		top: 0;
		z-index: 0;
		pointer-events: none;
		opacity: 0.25;
	}
	.brand {
		margin: var(--baseline) 0 0 0;
	}
	.btn {
		background: var(--secondary-color);
		display: table;
		text-decoration: none;
		color: var(--background-color);
		padding: 0.5rem 1.5rem;
		line-height: 1.75rem;
		border-radius: var(--radius);
		transition: 0.1s ease-in;
		margin-bottom: 10px;
		font-family: ${({ locale }) =>
			isRTL(locale) ? fontFamily.persian : fontFamily.english};
	}
	.btn:hover {
		background-color: var(--primary-color);
	}
	.btn svg {
		display: inline-block;
		vertical-align: -5px;
		margin-right: 0.5rem;
	}
	.heroConf {
		color: var(--black-color);
		text-transform: uppercase;
		width: 80rem;
		line-height: ${({ locale }) => (isRTL(locale) ? "normal" : "100px")};
		font-weight: 750;
		max-width: 100%;
		margin: var(--baseline) 0;
		display: block;
		// background: linear-gradient(to right, #8c77f1 0%, #8c77f1 100%);
		// -webkit-background-clip: text;
		// -webkit-text-fill-color: transparent;
		span {
			line-height: normal;
			margin-bottom: 0px;
		}
		i {
			font-style: normal;
		}
		@media only screen and (max-width: 48rem) {
			line-height: ${({ locale }) =>
				isRTL(locale)
					? "calc(2.5 * var(--baseline))"
					: "calc(2.5 * var(--baseline))"};
			span {
				display: block;
			}
			br {
				display: none !important;
			}
		}
		@media only screen and (max-width: 36rem) {
			font-size: 32px;
		}
	}
	.tx-dot {
		color: var(--black-color);
		text-transform: uppercase;
		background-image: linear-gradient(
			to right,
			var(--black-color),
			var(--black-color)
		) !important;
		-webkit-background-clip: text;
		background-clip: text;
		position: relative;
	}

	.tx-gr-pink {
		background-image: linear-gradient(to right, #ee2281, #ffba54);
		color: rgba(0, 0, 0, 0);
		-webkit-background-clip: text;
		background-clip: text;
		position: relative;
		margin-bottom: 20px;
	}
	.tx-gr-blue {
		background-image: linear-gradient(to right, #009cf3, #16d6d9);
		color: rgba(0, 0, 0, 0);
		-webkit-background-clip: text;
		background-clip: text;
		position: relative;
		margin-bottom: 20px;
	}
	.tx-gr-green {
		background-image: linear-gradient(to right, #16d6d9, #96cc29);
		color: rgba(0, 0, 0, 0);
		-webkit-background-clip: text;
		background-clip: text;
		position: relative;
		margin-bottom: 20px;
	}
	.tx-gr-orange {
		background-image: linear-gradient(to right, #ffbf02, #ed0082);
		color: rgba(0, 0, 0, 0);
		-webkit-background-clip: text;
		background-clip: text;
		position: relative;
		margin-bottom: 20px;
	}

	.tx-gr-purple {
		background-image: linear-gradient(to right, #61d4c9, #ffba54);
		color: rgba(0, 0, 0, 0);
		-webkit-background-clip: text;
		background-clip: text;
		margin-bottom: 20px;
		position: relative;
	}
	.description {
		color: var(--light-gray-color);
		width: 40rem;
		max-width: 100%;
		margin-top: ${({ locale }) => (isRTL(locale) ? "40px" : "unset")};
		line-height: ${({ locale }) => (isRTL(locale) ? "30px" : "24px")};
	}
	.description span b {
		display: inline-block;
		opacity: 0.5;
		margin-right: 0.325em;
	}
	.multi-height {
		line-height: 70px;
		@media only screen and (max-width: 768px) {
			line-height: calc(2 * var(--baseline));
		}
	}
	.people-num {
		float: ${({ locale }) => (isRTL(locale) ? "right" : "left")};
	}
	.footer-heart {
		width: 24px;
		height: 24px;
		position: relative;
		top: 6px;
		right: 5px;
		margin-left: 12px;
		vertical-align: unset;
	}

	.language {
		display: block;
		font-family: "Inter";
		font-size: 20px;
		float: ${({ locale }) => (isRTL(locale) ? "left" : "right")};
		@media only screen and (max-width: 48rem) {
			font-size: 14px;
		}
		a {
			display: block;
			color: var(--foreground-color);
		}
		.english {
			${({ locale }) =>
				isRTL(locale)
					? "pointer-events: auto;"
					: "pointer-events: none;"};
			border-bottom: 1px solid var(--foreground-color);
			span {
				opacity: ${({ locale }) => (isRTL(locale) ? ".5" : ".8")};
				position: relative;
				bottom: 2px;
			}
		}
		.persian {
			${({ locale }) =>
				isRTL(locale)
					? "pointer-events: none;"
					: "pointer-events: auto;"};
			span {
				opacity: ${({ locale }) => (isRTL(locale) ? ".8" : ".5")};
				position: relative;
				top: 3px;
				${({ locale }) =>
					isRTL(locale) ? "left: -2px" : "right: -2px"};
			}
		}
	}
	.subscribe-form {
		box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
			0 6.7px 5.3px rgba(0, 0, 0, 0.048),
			0 12.5px 10px rgba(0, 0, 0, 0.06),
			0 22.3px 17.9px rgba(0, 0, 0, 0.072),
			0 41.8px 33.4px rgba(0, 0, 0, 0.086),
			0 100px 80px rgba(0, 0, 0, 0.12);
		@media only screen and (max-width: 48rem) {
			box-shadow: none;
		}
		form {
			${({ locale }) =>
				isRTL(locale) ? "margin-right:50px;" : "margin-left:50px;"};
			margin-top: 50px;
			@media only screen and (max-width: 48rem) {
				margin-right: 0px;
				margin-left: 0px;
			}
			h4 {
				margin-bottom: 10px;
			}
		}
		.subscribe-img {
			@media only screen and (max-width: 768px) {
				display: none;
			}
			div {
				opacity: 0.4;
				height: 100%;
			}
			img {
				height: 100%;
			}
		}
	}
	.subscribe-btn {
		.btn {
			width: 100%;
			max-width: 450px;
			position: relative;
			height: 50px;
			border: none;
			text-align: center;
			padding: 0px 10px;
			.anticon-loading {
				position: relative;
				top: -5px;
			}
			img {
				width: 24px;
				height: 24px;
				position: relative;
				top: ${({ locale }) => (isRTL(locale) ? "0px" : "-2px")};
				${({ locale }) => (isRTL(locale) ? "left:5px" : "right:5px")};
			}
		}
		margin-bottom: 40px;
		margin-top: 40px;
	}
	.sponsors-btn {
		a {
			max-width: 130px;
			display: block;
			position: relative;
			line-height: 50px;
			text-align: center;
			padding: 0px 10px;
			img {
				width: 24px;
				height: 24px;
				position: relative;
				${({ locale }) => (isRTL(locale) ? "left:5px" : "right:5px")};
			}
		}
	}
	.reactconf-logo {
		width: 150px;
		height: auto;
	}
	.get-touch {
		font-size: 16px;
	}
`;
export default Style;
