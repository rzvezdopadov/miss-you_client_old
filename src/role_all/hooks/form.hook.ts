import * as React from "react";

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
