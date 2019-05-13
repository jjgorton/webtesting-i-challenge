const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
	describe('repair', () => {
		it('durability set to 100', () => {
			const item = { name: 'name', durability: 10, enhancement: 20 };
			const actual = enhancer.repair(item);
			expect(actual.durability).toBe(100);
		});

		it('durability set to 100 even if negative', () => {
			const item = { name: 'name', durability: -10, enhancement: 20 };
			const actual = enhancer.repair(item);
			expect(actual.durability).toBe(100);
		});

		it('durability set to 100 but never over', () => {
			const item = { name: 'name', durability: 1020, enhancement: 20 };
			const actual = enhancer.repair(item);
			expect(actual.durability).toBe(100);
		});
	});

	describe('succeed', () => {
		it('enhancement increase by 1', () => {
			const item = { name: 'name', durability: 10, enhancement: 10 };
			const actual = enhancer.succeed(item);
			expect(actual.enhancement).toBe(11);
		});

		it('enhancement max is 20', () => {
			const item = { name: 'name', durability: 10, enhancement: 20 };
			const actual = enhancer.succeed(item);
			expect(actual.enhancement).not.toBe(21);
		});
	});
});
