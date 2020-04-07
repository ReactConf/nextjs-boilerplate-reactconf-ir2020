import React, { useState } from "react";
import IntlMessage from "utils/intlMessage";
import Grid from "components/react-css-grid";
import Form from "components/antd/form";
import Input from "components/antd/input";
import { Cascader, message, Button } from "antd";
import data from "mock/data";
import SingleGrid from "./layouts/singleGrid";
import axios from "axios";
import getConfig from "next/config";
const {
	publicRuntimeConfig: { API_URL }
} = getConfig();
const { jobPositions } = data;
const { Item } = Form;

function SubscribeForm({ locale }) {
	const axiosInstance = axios.create({
		baseURL: API_URL,
		headers: { "accept-language": locale === "fa" ? "fa-IR" : "en-US" }
	});
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();
	const handleSubmit = async values => {
		try {
			setLoading(true);
			Object.assign(values, {
				experience: values.experience.toString()
			});

			const response = await axiosInstance.post("MailChimp", values);
			await form.resetFields();
			setLoading(false);
			await message.success(response.data.message);
		} catch (e) {
			setLoading(false);
			if (e.response.status === 400) {
				await message.error(e.response.data.message);
			} else {
				message.error("This is an error message");
			}
		} finally {
			setLoading(false);
		}
	};
	return (
		<SingleGrid
			title="subscribe.title"
			color="tx-gr-orange multi-height"
			grid="280px"
		>
			<div className="subscribe-form">
				<Grid width={280} gap={"var(--gap)"}>
					<Form
						initialValues={{ layout: "vertical" }}
						layout="vertical"
						size="middle"
						name="subscribe"
						form={form}
						onFinish={handleSubmit}
						scrollToFirstError
					>
						<Item
							name="first_name"
							label={
								<h4>
									<IntlMessage id="form.title.firstname" />
								</h4>
							}
							rules={[
								{
									required: true,
									message: (
										<h5>
											<IntlMessage id="form.valid.fill.firstname" />
										</h5>
									),
									whitespace: true
								}
							]}
						>
							<Input locale={locale} />
						</Item>
						<Item
							name="last_name"
							label={
								<h4>
									<IntlMessage id="form.title.lastname" />
								</h4>
							}
							rules={[
								{
									required: true,
									message: (
										<h5>
											<IntlMessage id="form.valid.fill.lastname" />
										</h5>
									),
									whitespace: true
								}
							]}
						>
							<Input locale={locale} />
						</Item>
						<Item
							name="experience"
							label={
								<h4>
									<IntlMessage id="form.title.experience" />
								</h4>
							}
							rules={[
								{
									type: "array",
									required: true,
									message: (
										<h5>
											<IntlMessage id="form.valid.fill.experience" />
										</h5>
									),
									whitespace: true
								}
							]}
						>
							<Cascader
								options={jobPositions}
								changeOnSelect
								placeholder={
									locale === "fa"
										? "تجربیات خود را انتخاب کنید"
										: " choose your experience "
								}
								popupPlacement={
									locale === "fa"
										? "bottomRight"
										: "bottomLeft"
								}
							/>
						</Item>
						<Item
							name="email"
							label={
								<h4>
									<IntlMessage id="form.title.email" />
								</h4>
							}
							validateTrigger="onBlur"
							rules={[
								{
									type: "email",
									message: (
										<h5>
											<IntlMessage id="form.valid.correct.email" />
										</h5>
									)
								},
								{
									required: true,
									message: (
										<h5>
											<IntlMessage id="form.valid.fill.email" />
										</h5>
									)
								}
							]}
						>
							<Input locale={locale} />
						</Item>
						<Item
							name="phone_number"
							label={
								<h4>
									<IntlMessage id="form.title.phoneNumber" />
								</h4>
							}
							rules={[
								{
									required: true,
									message: (
										<h5>
											<IntlMessage id="form.valid.fill.phoneNumber" />
										</h5>
									)
								}
							]}
						>
							<Input locale={locale} />
						</Item>

						<div className="subscribe-btn">
							<Button
								className="btn"
								loading={loading}
								htmlType="submit"
							>
								<img src="/static/images/subscribeIcon.svg" />
								<IntlMessage id="subscribe.btn.title" />
							</Button>
						</div>
					</Form>
					<Grid
						width={280}
						className="subscribe-img"
						gap={"var(--gap)"}
					>
						<div className="people__avatar ">
							<img src="/static/images/subscribe.jpg" />
						</div>
					</Grid>
				</Grid>
			</div>
		</SingleGrid>
	);
}

export default SubscribeForm;
