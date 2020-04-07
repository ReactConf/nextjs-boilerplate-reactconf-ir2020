import React from "react";

const SponsorItem = ({data}) => {
	const {url, logo , title} = data;
	return (
		<figure
			className="sponsors--item"
		>
			<a href={url} target="_blank">
				<img
					src={logo}
					alt={title}
					className="sponsors--item-image"
				/>
			</a>
		</figure>
	);
};
export default SponsorItem;
