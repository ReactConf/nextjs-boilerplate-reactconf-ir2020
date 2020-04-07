import React, { memo } from "react";
import data from "../pages/data";
import cx from "classnames";

const Schedule = memo(
	({
		id,
		type,
		people,
		subject,
		summary,
		time,
		presentation_video,
		presentation_pdf
	}) => (
		<section
			id={`schedule-${id}`}
			className={cx("table-row", { "is-break": type === "Break" })}
		>
			<div className="wrap-row">
				<div className="col">
					<h4 className="subject">
						{type === "Break" && (
							<svg
								className="icons"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 24 24"
								height={24}
								width={24}
							>
								<path
									d="M10.25,0c-0.552,0-1,0.448-1,1v5c0.001,0.524-0.204,1.026-0.571,1.4C8.581,7.498,8.422,7.499,8.324,7.401 C8.277,7.354,8.251,7.291,8.25,7.225V1c0-0.552-0.448-1-1-1s-1,0.448-1,1v6.223c-0.001,0.139-0.114,0.25-0.253,0.249 C5.931,7.472,5.868,7.445,5.821,7.398C5.455,7.025,5.25,6.523,5.25,6V1c0-0.552-0.448-1-1-1s-1,0.448-1,1v5 c0.002,1.695,1.07,3.205,2.667,3.772c0.2,0.071,0.333,0.259,0.333,0.471V23c0,0.552,0.448,1,1,1s1-0.448,1-1V10.243 c0-0.212,0.133-0.4,0.333-0.471C10.18,9.205,11.248,7.695,11.25,6V1C11.25,0.448,10.802,0,10.25,0z M16.75,0c-2.209,0-4,1.791-4,4 v2c0.002,1.695,1.07,3.205,2.667,3.772c0.2,0.071,0.333,0.259,0.333,0.471V23c0,0.552,0.448,1,1,1s1-0.448,1-1V10.243 c0-0.212,0.133-0.4,0.333-0.471C19.68,9.205,20.748,7.695,20.75,6V4C20.75,1.791,18.959,0,16.75,0z M16.25,2.5 c-0.552,0-1,0.448-1,1c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5c0-1.105,0.895-2,2-2c0.276,0,0.5,0.224,0.5,0.5 S16.526,2.5,16.25,2.5z"
									stroke="none"
									fill="currentColor"
									strokeWidth={0}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						)}
						{type === "Presentation" && (
							<svg
								className="icons"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 24 24"
								height={24}
								width={24}
							>
								<path
									d="M20.166,4.254c-0.213-0.19-0.497-0.28-0.781-0.247L6.452,5.5C5.919,5.474,5.499,5.034,5.5,4.5c0-0.312,0-0.784,1.193-1.018 C8.349,3.155,17.532,2,17.625,1.992c0.547-0.079,0.926-0.586,0.847-1.132c-0.077-0.533-0.562-0.91-1.097-0.852 C17,0.056,8.03,1.18,6.307,1.519C3.865,2,3.5,3.593,3.5,4.5V20c-0.063,2.146,1.625,3.937,3.771,4c0.076,0.002,0.153,0.002,0.229,0 c0.1,0,12.124-1.508,12.124-1.508c0.5-0.063,0.876-0.488,0.876-0.992V5C20.5,4.715,20.379,4.444,20.166,4.254z"
									stroke="none"
									fill="currentColor"
									strokeWidth={0}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						)}
						{subject}
					</h4>
					<p className="summary">{summary}</p>
					{data.peoples.find(p => p.slug === people) && (
						<div className="speaker">
							<img
								src={
									data.peoples.find(p => p.slug === people)
										.avatar
								}
								alt={people}
							/>{" "}
							{people}
						</div>
					)}
				</div>
				<div className="side">
					<time className="gray">{time.join(" — ")}</time>

					<div className="side__row">
						{presentation_video && (
							<a
								className="side__btn"
								target="_blank"
								href={presentation_video}
							>
								<svg
									viewBox="0 0 24 24"
									className="side__btn--icon"
									width={24}
									height={24}
									stroke="currentColor"
									strokeWidth={2}
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<polygon points="23 7 16 12 23 17 23 7" />
									<rect
										x={1}
										y={5}
										width={15}
										height={14}
										rx={2}
										ry={2}
									/>
								</svg>
								Play
							</a>
						)}
						{presentation_pdf && (
							<a
								className="side__btn"
								target="_blank"
								href={presentation_pdf}
							>
								<svg
									viewBox="0 0 24 24"
									className="side__btn--icon"
									width={24}
									height={24}
									stroke="currentColor"
									strokeWidth={2}
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
									<polyline points="14 2 14 8 20 8" />
									<line x1={16} y1={13} x2={8} y2={13} />
									<line x1={16} y1={17} x2={8} y2={17} />
									<polyline points="10 9 9 9 8 9" />
								</svg>
								PDF
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	)
);
export default Schedule;
