module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	const add = item.enhancement >= 20 ? 20 : item.enhancement + 1;

	return {
		...item,
		enhancement : add
	};
}

function fail(item) {
	let decreaseDurability = item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
	decreaseDurability < 0 ? (decreaseDurability = 0) : decreaseDurability;

	let decreaseEnhancement = item.enhancement > 16 ? item.enhancement - 1 : item.enhancement - 0;
	decreaseEnhancement < 0 ? (decreaseEnhancement = 0) : decreaseEnhancement;

	// let decreaseDurability = 0;
	// let decreaseEnhancement = 0;
	// if (item.enhancement < 15) {
	// 	decreaseDurability = 5;
	// } else if (item.enhancement >= 15) {
	// 	decreaseDurability = 10;
	// }
	// if (item.enhancement > 16) {
	// 	decreaseEnhancement = 1;
	// }

	return {
		...item,
		enhancement : decreaseEnhancement,
		durability  : decreaseDurability
	};
}

function repair(item) {
	return {
		...item,
		durability : 100
	};
}

function get(item) {
	return { ...item };
}
