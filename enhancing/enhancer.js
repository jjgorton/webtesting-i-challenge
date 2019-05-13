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
	return { ...item };
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
