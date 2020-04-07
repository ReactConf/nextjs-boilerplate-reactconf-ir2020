import React, { useRef, useState, useEffect } from "react";

export default function Masonry({ children, minWidth = 300 }) {
	const cols = [];
	const ref = useRef();
	const [numCols, setNumCols] = useState(3);

	const calcNumCols = () =>
		setNumCols(Math.floor(ref.current.offsetWidth / minWidth));

	const createCols = () => {
		for (let i = 0; i < numCols; i++) cols[i] = [];
		children.forEach((child, i) => {
			if (child) {
				cols[i % numCols].push(child);
			}
		});
	};

	useEffect(() => {
		calcNumCols();
		window.addEventListener(`resize`, calcNumCols);
		return () => window.removeEventListener(`resize`, calcNumCols);
	});

	createCols();

	return (
		<div className="MasonryDiv" ref={ref}>
			{Array(numCols)
				.fill()
				.map((el, i) => (
					<div className="Col" key={i}>
						{cols[i]}
					</div>
				))}
		</div>
	);
}
