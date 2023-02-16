export const data_second: number[] = [];
export const data_minute: number[] = [];
export const data_hour: number[] = [];
export const data_month: number[] = [];

function generateAdminTime() {
	for (let i = 0; i < 60; i++) {
		data_second.push(i);
		data_minute.push(i);
	}

	for (let i = 0; i < 24; i++) {
		data_hour.push(i);
	}

	for (let i = 0; i < 12; i++) {
		data_month.push(i);
	}
}

generateAdminTime();
