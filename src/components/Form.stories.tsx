import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
	component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const SubmitForm: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement.ownerDocument.body);
		await userEvent.click(await canvas.findByRole('textbox', { name: 'Name' }));
		await userEvent.type(
			await canvas.findByRole('textbox', { name: 'Name' }),
			'jane',
		);
		await userEvent.tab();
		await userEvent.type(
			await canvas.findByLabelText('Password', { exact: true }),
			'12345',
		);
		await userEvent.click(await canvas.findByRole('button', { name: 'Submit' }));
		await userEvent.click(
			await canvas.findByText('Submitted data:', { exact: true }),
		);
		await userEvent.click(await canvas.findByText(': jane', { exact: true }));
		await userEvent.click(await canvas.findByText(': 12345', { exact: true }));
	},
};
