export const getAgeFromYear = (year: number): number => {
	const date = new Date();
	const yearNow = date.getFullYear();
	return yearNow - year;
};

export const getStrYearFromAge = (year: number): string => {
	if (
		year === 0 ||
		year % 10 === 0 ||
		(year % 10 > 4 && year % 10 <= 9) ||
		(year > 5 && year < 19)
	)
		return "лет";
	if (year === 1 || year % 10 === 1) return "год";

	return "года";
};
