import React from "react";
import LazyLoad from "react-lazyload";
import cx from "classnames";

const Clients = ({ data }) => {
	const {fullName, email} = data;
	return (
		<figure className={cx("clients")} key={email}>
			<LazyLoad height={50} offset={50}>
				<div className="clients__avatar">
					<img src={email} alt={fullName} />
				</div>
			</LazyLoad>
		</figure>
	);
};
export default Clients;
