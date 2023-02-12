export function UserProfileAboutMe(payload: { discription: string }) {
	return (
		<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
			<span className="flex">О себе:</span>

			<div className="flex flex-wrap justify-center">
				{payload.discription}
			</div>
		</div>
	);
}
