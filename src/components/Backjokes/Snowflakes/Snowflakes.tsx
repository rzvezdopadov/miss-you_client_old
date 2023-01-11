import * as React from "react";
import { useEffect, useState } from "react";
import { convertTextToSign } from "../../../utils/convert";
import { getRandNum } from "../../../utils/random";

const snowflakes_type_arr = ["&#10052;", "&#10053;", "&#10054;"];

const snowflakes_count = 50;

interface ISnowflake {
	type: number;
	size: number;
	posX: number;
	posY: number;
	deg: number;
}

export function Snowflakes() {
	const [snowflakes, setSnowflakes] = useState<Array<ISnowflake>>([]);

	function snowflakesTimerHandler(snowflakes: Array<ISnowflake>) {
		setTimeout(() => {
			const snowflakesNew = [...snowflakes];

			if (!snowflakes.length) {
				for (let i = 0; i < snowflakes_count; i++) {
					const snowflakeNew: ISnowflake = {
						type: getRandNum(snowflakes_type_arr.length - 1),
						size: 10 + getRandNum(20),
						posX: getRandNum(window.innerWidth),
						posY: getRandNum(window.innerHeight),
						deg: getRandNum(360),
					};

					snowflakesNew.push(snowflakeNew);
				}
			} else {
				for (let i = 0; i < snowflakesNew.length; i++) {
					snowflakesNew[i].posX += (15 - getRandNum(30)) / 30;
					snowflakesNew[i].posY += getRandNum(100) / 100;

					if (
						snowflakesNew[i].posY >
						window.innerHeight - snowflakes[i].size * 1.5
					) {
						snowflakesNew[i].type = getRandNum(
							snowflakes_type_arr.length - 1
						);
						snowflakesNew[i].posX = getRandNum(window.innerWidth);
						snowflakesNew[i].posY = -100;
						snowflakesNew[i].size = 10 + getRandNum(20);
					}
				}
			}

			setSnowflakes(snowflakesNew);
		}, 10);
	}

	useEffect(() => {
		snowflakesTimerHandler(snowflakes);
	}, []);

	useEffect(() => {
		snowflakesTimerHandler(snowflakes);
	}, [snowflakes]);

	return (
		<>
			{snowflakes ? (
				snowflakes.map((value, index) => {
					return (
						<div
							className="absolute text-white select-none"
							key={`snowflake${index}`}
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
