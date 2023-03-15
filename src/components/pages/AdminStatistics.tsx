import { LabelHeader } from "../utils/Labels";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";

export function AdminStatistics() {
	return (
		<MainScrollWrapper shadow={true}>
			<LabelHeader value={`Статистика сайта`} />
		</MainScrollWrapper>
	);
}
