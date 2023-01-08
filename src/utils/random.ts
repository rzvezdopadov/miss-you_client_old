export const randNum = (count: number) => {
	return Math.floor(Math.random() * count);
};

let alphabet = "abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789";

export function getRandomString(count: number): string {
	let str = "";

	if (!count) return str;

	for (let i = 0; i < count; i++) {
		var pos = randNum(alphabet.length);
		str += alphabet[pos];
	}

	return str;
}
