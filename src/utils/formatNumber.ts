export function formatNumber(num: number) {
	if (num < 1000) {
		return num.toString();
	}

	if (num === 1000) {
		return '1k';
	}

	if (num < 10000) {
		const thousands = Math.floor(num / 1000);
		const hundreds = Math.floor((num % 1000) / 100);
		return `${thousands}.${hundreds}k`;
	}

	const thousands = Math.floor(num / 1000);
	const hundreds = Math.floor((num % 1000) / 100);
	return `${thousands}.${hundreds}k`;
}
