import React from "react";
import IntlMessage from "utils/intlMessage";
import Grid from "components/react-css-grid";
import SingleGrid from "./singleGrid";

const DoubleGrid = ({ children, title, color = "", grid }) => {
	return (
		<section className="section">
			<div className="container-fluid">
				<section className="Grid">
					<aside className="section__outline">
						<h3 className={`${color} heading multi-height`}>
							<IntlMessage id={title} />
						</h3>
					</aside>
					<section className="section__main">
						<Grid width={grid} gap={"var(--gap)"}>
							{children}
						</Grid>
					</section>
				</section>
			</div>
		</section>
	);
};
export default DoubleGrid;
