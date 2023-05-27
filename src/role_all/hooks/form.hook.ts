import * as React from "react";
import { storeAll } from "../store/storeAll";
import { modalMessageAction } from "../store/redusers/modal";

export const useFormFieldInputString = (initialValue: string = "") => {
	const [value, setValue] = React.useState(initialValue);
	const onChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
		[]
	);
	return { value, onChange };
};

export const useFormFieldTextAreaString = (initialValue: string = "") => {
	const [value, setValue] = React.useState(initialValue);
	const onChange = React.useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value),
		[]
	);
	return { value, onChange };
};

export const useFormFieldSelectNumber = (initialValue: number = 0) => {
	const [value, setValue] = React.useState(initialValue);
	const onChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) =>
			setValue(Number(e.target.value)),
		[]
	);
	return { value, onChange };
};

export const useFormFieldSelectString = (initialValue: string = "") => {
	const [value, setValue] = React.useState(initialValue);
	const onChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value),
		[]
	);
	return { value, onChange };
};

export const useRefDivVisible = (value: boolean) => {
	const refDivVisible = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (!refDivVisible.current) return;

		if (value) {
			refDivVisible.current.classList.remove("invisible");
		} else {
			refDivVisible.current.classList.add("invisible");
		}
	}, [value]);

	return refDivVisible;
};

export const useRefModalMessage = (value: boolean) => {
	const refModalMessage = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (!refModalMessage.current) return;

		if (value) {
			refModalMessage.current.classList.remove("bottom-[-250px]");
			refModalMessage.current.classList.add("bottom-0");

			setTimeout(() => {
				storeAll.dispatch(
					modalMessageAction({ enabled: false, text: "" })
				);
			}, 5000);
		} else {
			refModalMessage.current.classList.remove("bottom-0");
			refModalMessage.current.classList.add("bottom-[-250px]");
		}
	}, [value]);

	return refModalMessage;
};
