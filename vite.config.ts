import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	test: {
		watch: false,
		exclude: ['**/e2e/**', '**/node_modules/**'],
	},
	plugins: [react()],
});
