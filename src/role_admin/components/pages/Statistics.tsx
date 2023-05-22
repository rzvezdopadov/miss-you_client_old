import { LabelPageName } from "../../../role_all/components/utils/Labels";
import { MainScrollWrapper } from "../../../role_all/components/wrappers/MainScrollWrapper";

export function Statistics() {
	return (
		<MainScrollWrapper shadow={true} color={true}>
			<LabelPageName value={`Статистика сайта`} />
		</MainScrollWrapper>
	);
}
