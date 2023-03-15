import * as React from "react";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";
import { LabelHeaderLG } from "../utils/Labels";

export function Partners() {
	return (
		<MainScrollWrapper shadow={true} color={true}>
			<LabelHeaderLG value={"Сотрудничество с нами"} />
		</MainScrollWrapper>
	);
}
