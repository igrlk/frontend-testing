import type React from 'react';
import { useState } from 'react';

export function Form() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: '',
		password: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">
					{step === 1
						? 'Personal Information'
						: step === 2
							? 'Contact Details'
							: 'Thank you!'}
				</h2>
				asdf
				<form onSubmit={handleSubmit}>
					{step === 1 ? (
						<>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder={'Enter your name'}
									value={formData.name}
									onChange={handleChange}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									required
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="password"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									name="password"
									placeholder={'Enter your password'}
									value={formData.password}
									onChange={handleChange}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									required
								/>
							</div>
						</>
					) : (
						<div className="text-center">
							<div className="text-gray-600">Submitted data:</div>
							{(['name', 'password'] as const).map((key) => (
								<div key={key} className="text-gray-600">
									<span className="font-bold">{key}</span>: {formData[key]}
								</div>
							))}
						</div>
					)}
					{step === 1 && (
						<div className="flex items-center justify-between">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							>
								Submit
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}
