import React from 'react';
import { Form, withFormik, FastField, ErrorMessage } from 'formik';
import {
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

const cf7Domain = 'https://www.thekeepstudios.com';
const cf7Id = 7350;
const formEndpoint =
	`${cf7Domain}/wp-json/contact-form-7/v1/contact-forms/${cf7Id}/feedback`;

const ContactForm = ({
	setFieldValue,
	isSubmitting,
	values,
	errors,
	touched,
}) => (
	<Form
		name="portfolio-dev"
		method="post"
		// data-netlify="true"
		// data-netlify-recaptcha="true"
		// data-netlify-honeypot="bot-field"
	>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="name"
				component="input"
				aria-label="name"
				placeholder="Full name*"
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name="name" />
		</InputField>
		<InputField>
			<Input
				id="email"
				aria-label="email"
				component="input"
				as={FastField}
				type="email"
				name="email"
				placeholder="Email*"
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name="email" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component="textarea"
				aria-label="message"
				id="message"
				rows="8"
				type="text"
				name="message"
				placeholder="Message*"
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name="message" />
		</InputField>
		<InputField>
			<FastField
				component={GoogleReCaptcha}
				name="recaptcha"
				onVerify={token =>
					console.debug(`Google Recaptcha Token: ${token}`) ||
					setFieldValue('recaptcha', token)
				}
				// onChange={value => setFieldValue('recaptcha', value)}
			/>
			<ErrorMessage component={Error} name="recaptcha" />
		</InputField>
		{values.success && (
			<InputField>
				<Center>
					<h4>
						Your message has been successfully sent, I will get back to you	ASAP!
					</h4>
				</Center>
			</InputField>
		)}
		<Center>
			<Button secondary type="submit" disabled={isSubmitting || !values.recaptcha }>
				Submit
			</Button>
		</Center>
	</Form>
);

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		message: '',
		recaptcha: '',
		success: false,
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('Full name field is required'),
			email: Yup.string()
				.email('Invalid email')
				.required('Email field is required'),
			message: Yup.string().required('Message field is required'),
			recaptcha: Yup.string().required('Robots are not welcome yet!'),
		}),
	handleSubmit: async (
		{ name, email, message, recaptcha },
		{ setSubmitting, resetForm, setFieldValue }
	) => {
		try {
			const encode = data => {
				return Object.keys(data)
					.map(
						key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
					)
					.join('&');
			};
			const response = await fetch(formEndpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					'form-name': 'portfolio-dev',
					'your-name': name,
					'your-email':email,
					'your-subject':`${name} is interested in hiring`,
					'your-message':message,
					'g-recaptcha-response': recaptcha,
				}),
			});
			const responseJson = await response.json();
			await setSubmitting(false);
			await setFieldValue('success', responseJson.status === 'mail_sent');
			setTimeout(() => resetForm(), 2000);
		} catch (err) {
			setSubmitting(false);
			setFieldValue('success', false);
			//TODO fix bad error handling message
			alert('Something went wrong, please try again!'); // eslint-disable-line
		}
	},
})(ContactForm);
