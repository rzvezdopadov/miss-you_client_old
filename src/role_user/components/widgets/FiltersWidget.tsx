import {
	data_age,
	data_alcohol,
	data_children,
	data_education,
	data_fieldOfActivity,
	data_genderVapor,
	data_growth,
	data_maritalStatus,
	data_profit,
	data_religion,
	data_signZodiac,
	data_smoke,
	data_weight,
} from "../../../role_all/data/profiles";
import { IFilterParamSelect } from "../../../role_all/interfaces/iprofiles";
import { FiltersOptionAtArr } from "../../../role_all/components/utils/Selects";
import { Label } from "../../../role_all/components/utils/Labels";
import { storeAll } from "../../../role_all/store/storeAll";

export function FiltersWidget(payload: {
	basefilters: boolean;
	longfilters: boolean;
	location: IFilterParamSelect;
	agestart: IFilterParamSelect;
	ageend: IFilterParamSelect;
	growthstart: IFilterParamSelect;
	growthend: IFilterParamSelect;
	weight: IFilterParamSelect;
	signzodiac: IFilterParamSelect;
	gendervapor: IFilterParamSelect;
	education: IFilterParamSelect;
	fieldofactivity: IFilterParamSelect;
	maritalstatus: IFilterParamSelect;
	children: IFilterParamSelect;
	religion: IFilterParamSelect;
	smoke: IFilterParamSelect;
	alcohol: IFilterParamSelect;
	profit: IFilterParamSelect;
	interests: string[];
}) {
	const { towns } = storeAll.getState();

	return (
		<>
			{payload.basefilters ? (
				<>
					<FiltersOptionAtArr
						headName={"Локация:"}
						arrArgs={[
							{
								data: towns,
								filterParam: { ...payload.location },
								valen: true,
							},
						]}
					/>

					<FiltersOptionAtArr
						headName={"Возраст:"}
						arrArgs={[
							{
								data: data_age,
								filterParam: { ...payload.agestart },
							},
							{
								data: data_age,
								filterParam: { ...payload.ageend },
							},
						]}
					/>
					<FiltersOptionAtArr
						headName={"Рост:"}
						arrArgs={[
							{
								data: data_growth,
								filterParam: { ...payload.growthstart },
							},
							{
								data: data_growth,
								filterParam: { ...payload.growthend },
							},
						]}
					/>

					<FiltersOptionAtArr
						headName={"Телосложение:"}
						arrArgs={[
							{
								data: data_weight,
								filterParam: { ...payload.weight },
							},
						]}
					/>
					{payload.longfilters ? (
						<>
							<FiltersOptionAtArr
								headName={"Знак зодиака:"}
								arrArgs={[
									{
										data: data_signZodiac,
										filterParam: { ...payload.signzodiac },
									},
								]}
							/>
						</>
					) : (
						<></>
					)}
					<FiltersOptionAtArr
						headName={"Ищу:"}
						arrArgs={[
							{
								data: data_genderVapor,
								filterParam: { ...payload.gendervapor },
							},
						]}
					/>
					{payload.longfilters ? (
						<>
							<FiltersOptionAtArr
								headName={"Образование:"}
								arrArgs={[
									{
										data: data_education,
										filterParam: { ...payload.education },
									},
								]}
							/>

							<FiltersOptionAtArr
								headName={"Сфера деятельности:"}
								arrArgs={[
									{
										data: data_fieldOfActivity,
										filterParam: {
											...payload.fieldofactivity,
										},
									},
								]}
							/>

							<FiltersOptionAtArr
								headName={"Семейное положение:"}
								arrArgs={[
									{
										data: data_maritalStatus,
										filterParam: {
											...payload.maritalstatus,
										},
									},
								]}
							/>

							<FiltersOptionAtArr
								headName={"Дети:"}
								arrArgs={[
									{
										data: data_children,
										filterParam: { ...payload.children },
									},
								]}
							/>

							<FiltersOptionAtArr
								headName={"Религия:"}
								arrArgs={[
									{
										data: data_religion,
										filterParam: { ...payload.religion },
									},
								]}
							/>
						</>
					) : (
						<></>
					)}
					<FiltersOptionAtArr
						headName={"Курение:"}
						arrArgs={[
							{
								data: data_smoke,
								filterParam: { ...payload.smoke },
							},
						]}
					/>
					<FiltersOptionAtArr
						headName={"Алкоголь:"}
						arrArgs={[
							{
								data: data_alcohol,
								filterParam: { ...payload.alcohol },
							},
						]}
					/>
					{payload.longfilters ? (
						<FiltersOptionAtArr
							headName={"Заработок в месяц:"}
							arrArgs={[
								{
									data: data_profit,
									filterParam: { ...payload.profit },
								},
							]}
						/>
					) : (
						<></>
					)}
				</>
			) : (
				<Label value="Для активации фильтров приобретите опцию в магазине =)" />
			)}
		</>
	);
}
