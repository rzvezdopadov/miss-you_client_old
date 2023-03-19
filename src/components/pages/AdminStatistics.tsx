import { LabelPageName } from "../utils/Labels";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";

export function AdminStatistics() {
	return (
		<MainScrollWrapper shadow={true}>
			<LabelPageName value={`Статистика сайта`} />
		</MainScrollWrapper>
	);
}
