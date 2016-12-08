import { formatTimeString } from './time';

describe('Time Utility', () => {
	describe('Time Formatter', () => {
		it('should handle seconds correctly', () => {
			expect(formatTimeString(1000)).toEqual('00:00:01');
			expect(formatTimeString(9000)).toEqual('00:00:09');
			expect(formatTimeString(59000)).toEqual('00:00:59');
		});

		it('should handle minutes correctly', () => {
			expect(formatTimeString(60000)).toEqual('00:01:00');
			expect(formatTimeString(360000)).toEqual('00:06:00');
			expect(formatTimeString(3540000)).toEqual('00:59:00');
		});

		it('should handle hours correctly', () => {
			expect(formatTimeString(3600000)).toEqual('01:00:00');
			expect(formatTimeString(111600000)).toEqual('31:00:00');
			expect(formatTimeString(212400000)).toEqual('59:00:00');
		});

		it('should handle a full timestamp correctly', () => {
			expect(formatTimeString(3661000)).toEqual('01:01:01');
			expect(formatTimeString(111972000)).toEqual('31:06:12');
			expect(formatTimeString(215999000)).toEqual('59:59:59');
		});
	});
});
