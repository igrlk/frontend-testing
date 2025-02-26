import { describe, expect, test } from 'vitest';

import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
	test('returns full number if less than 1000', () => {
		expect(formatNumber(999)).toBe('999');
	});

	test('returns 1k if number is 1000', () => {
		expect(formatNumber(1000)).toBe('1k');
	});

	test('returns 1.1k if number is 1100', () => {
		expect(formatNumber(1100)).toBe('1.1k');
	});

	test('returns {THOUSANDS}.{HUNDREDS}.K if number is above 10000', () => {
		expect(formatNumber(12345)).toBe('12.3k');
		expect(formatNumber(123456)).toBe('123.4k');
	});
});
