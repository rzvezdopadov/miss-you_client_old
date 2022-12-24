import * as React from "react";
import { useEffect, useState } from "react";
import { randNum } from "../../../utils/random";
import { convertTextToSign } from "../../../utils/convert";

const snowflakes_type_arr = ["&#10052;", "&#10053;", "&#10054;"];

const snowflakes_count = 50;

interface ISnowflake {
	type: number;
	size: number;
	posX: number;
	posY: number;
	deg: number;
}

function Snowflake(payload: { snowflake: ISnowflake; key: any }) {
	return (
		<div
			className="absolute text-white select-none"
			key={payload.key}
			style={{
				fontSize: `${payload.snowflake.size}px`,
				left: payload.snowflake.posX,
				top: payload.snowflake.posY,
			}}
		>
			{convertTextToSign(snowflakes_type_arr[payload.snowflake.type])}
		</div>
	);
}

export function Snowflakes() {
	const [snowflakes, setSnowflakes] = useState<Array<ISnowflake>>([]);

	function snowflakesTimerHandler(snowflakes: Array<ISnowflake>) {
		setTimeout(() => {
			const snowflakesNew = [...snowflakes];

			if (!snowflakes.length) {
				for (let i = 0; i < snowflakes_count; i++) {
					const snowflakeNew: ISnowflake = {
						type: randNum(snowflakes_type_arr.length - 1),
						size: 10 + randNum(20),
						posX: randNum(window.innerWidth),
						posY: randNum(window.innerHeight),
						deg: randNum(360),
					};

					snowflakesNew.push(snowflakeNew);
				}
			} else {
				for (let i = 0; i < snowflakesNew.length; i++) {
					snowflakesNew[i].posX += (15 - randNum(30)) / 30;
					snowflakesNew[i].posY += randNum(100) / 100;

					if (snowflakesNew[i].posY > window.innerHeight) {
						snowflakesNew[i].type = randNum(
							snowflakes_type_arr.length - 1
						);
						snowflakesNew[i].posX = randNum(window.innerWidth);
						snowflakesNew[i].posY = -100;
						snowflakesNew[i].size = 10 + randNum(20);
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
						<Snowflake
							key={`snowflake${index}`}
							snowflake={value}
						/>
					);
				})
			) : (
				<></>
			)}
		</>
	);
}
