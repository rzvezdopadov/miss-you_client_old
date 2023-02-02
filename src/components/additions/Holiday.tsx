import * as React from "react";
import { useEffect, useState } from "react";
import { getRandNum } from "../../helpers/random";
import { convertTextToSign } from "../../helpers/convert";

const snowflakes_type_arr = ["&#10052;", "&#10053;", "&#10054;"];

const holidayObj_count = 50;

interface IHolidayObj {
	type: number;
	size: number;
	posX: number;
	posY: number;
	deg: number;
}

export function Holiday() {
	const [holidaysObj, setHolidaysObj] = useState<Array<IHolidayObj>>([]);

	function holidaysObjTimerHandler(holidayObj: Array<IHolidayObj>) {
		setTimeout(() => {
			const holidaysObjNew = [...holidayObj];

			if (!holidaysObjNew.length) {
				for (let i = 0; i < holidayObj_count; i++) {
					const holidayObj: IHolidayObj = {
						type: getRandNum(snowflakes_type_arr.length - 1),
						size: 10 + getRandNum(20),
						posX: getRandNum(window.innerWidth),
						posY: getRandNum(window.innerHeight),
						deg: getRandNum(360),
					};

					holidaysObjNew.push(holidayObj);
				}
			} else {
				for (let i = 0; i < holidaysObjNew.length; i++) {
					holidaysObjNew[i].posX += (15 - getRandNum(30)) / 30;
					if (
						holidaysObjNew[i].posX >
						window.innerWidth - holidaysObj[i].size * 1.5
					) {
						holidaysObjNew[i].posX =
							window.innerWidth - holidaysObj[i].size * 1.5;
					} else if (
						holidaysObjNew[i].posX <
						holidaysObj[i].size * 1.5
					) {
						holidaysObjNew[i].posX = holidaysObj[i].size * 1.5;
					}

					holidaysObjNew[i].posY += getRandNum(100) / 100;

					if (
						holidaysObjNew[i].posY >
						window.innerHeight - holidaysObj[i].size * 1.5
					) {
						holidaysObjNew[i].type = getRandNum(
							snowflakes_type_arr.length - 1
						);
						holidaysObjNew[i].posX = getRandNum(window.innerWidth);
						holidaysObjNew[i].posY = -100;
						holidaysObjNew[i].size = 10 + getRandNum(20);
					}
				}
			}

			setHolidaysObj(holidaysObjNew);
		}, 10);
	}

	useEffect(() => {
		holidaysObjTimerHandler(holidaysObj);
	}, []);

	useEffect(() => {
		holidaysObjTimerHandler(holidaysObj);
	}, [holidaysObj]);

	return (
		<>
			{holidaysObj ? (
				holidaysObj.map((value, index) => {
					return (
						<div
							className="absolute text-white select-none"
							key={`holiday${index}`}
							style={{
								fontSize: `${value.size}px`,
								left: value.posX,
								top: value.posY,
							}}
						>
							{convertTextToSign(snowflakes_type_arr[value.type])}
						</div>
					);
				})
			) : (
				<></>
			)}
		</>
	);
}
