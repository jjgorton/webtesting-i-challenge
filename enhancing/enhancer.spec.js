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

	describe('fail', () => {
		it('enhancement less than 15 - dur. decrease by 5', () => {
			const item = { name: 'name', durability: 10, enhancement: 14 };
			const actual = enhancer.fail(item);
			expect(actual.durability).toBe(5);
		});

		it('enhancement more than 14 - dur. decrease by 10', () => {
			const item = { name: 'name', durability: 10, enhancement: 15 };
			const actual = enhancer.fail(item);
			expect(actual.durability).toBe(0);
		});

		it('enhancement more than 16 - decrease by 1', () => {
			const item = { name: 'name', durability: 10, enhancement: 17 };
			const actual = enhancer.fail(item);
			expect(actual.enhancement).toBe(16);
		});

		// it('Enhancement min 0', () => {
		// 	const item = { name: 'name', durability: 1, enhancement: 1 };
		// 	const actual = enhancer.fail(item);
		// 	expect(actual.enhancement).toBe(0);
		// });

		it('Durability min 0', () => {
			const item = { name: 'name', durability: 1, enhancement: 1 };
			const actual = enhancer.fail(item);
			expect(actual.durability).toBe(0);
		});
	});

	describe('get', () => {
		it('name change if enhancement > 0', () => {
			const item = { name: 'name', durability: 50, enhancement: 7 };
			const actual = enhancer.get(item);
			expect(actual.name).toBe('[+7] name');
		});

		it('name not changed if enhancement is 0', () => {
			const item = { name: 'name', durability: 50, enhancement: 0 };
			const actual = enhancer.get(item);
			expect(actual.name).toBe('name');
		});
	});
});
