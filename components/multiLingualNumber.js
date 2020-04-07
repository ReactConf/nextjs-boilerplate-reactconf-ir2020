import React, { Fragment } from "react";

function MultiLingualNumber({ locale, children, style }) {
	if (children !== null) {
		let internationalNumber = children.toString();
		let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
		let persianMap = persianDigits.split("");
		let persianNumber = internationalNumber.replace(/\d/g, function(m) {
			return persianMap[parseInt(m)];
		});
		return (
			<span style={style}>
				{" "}
				{locale === "fa" ? persianNumber : internationalNumber}{" "}
			</span>
		);
	} else {
		return <Fragment />;
	}
}

export default MultiLingualNumber;
