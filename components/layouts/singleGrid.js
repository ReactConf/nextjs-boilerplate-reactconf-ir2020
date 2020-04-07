import React from "react";
import IntlMessage from "utils/intlMessage";
import Grid from "components/react-css-grid";

const SingleGrid = ({ children, title, color = "tx-gr-purple", grid }) => {
	return (
		<section className="section">
			<div className="container">
				<section className="section__main">
					<h2 className={`${color} heading multi-height`}>
						<IntlMessage id={title} />
					</h2>
					<Grid width={grid} gap={"var(--gap)"}>
						{children}
					</Grid>
				</section>
			</div>
		</section>
	);
};
export default SingleGrid;
