import { LabelHeader } from "../utils/Labels";

export function AdminProfiles() {
	return (
		<div className="flex h-full w-full justify-center">
			<div className="flex overflow-y-scroll justify-start items-center relative bg-gray-700 text-neutral-50 flex-col shadow-md rounded-3xl px-8 pt-2 pb-2 w-full">
				<LabelHeader value={`Профили пользователей`} />
			</div>
		</div>
	);
}
