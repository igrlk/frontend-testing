import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Form } from './components/Form.tsx';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Form />
	</StrictMode>,
);
