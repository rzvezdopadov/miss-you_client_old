import { FiltersOptionAtArr } from "../../../role_all/components/utils/Selects";
import {
	data_acctype,
	data_age,
	data_alcohol,
	data_children,
	data_education,
	data_fieldOfActivity,
	data_gender,
	data_genderVapor,
	data_growth,
	data_maritalStatus,
	data_profit,
	data_religion,
	data_signZodiac,
	data_smoke,
	data_weight,
} from "../../../role_all/data/profiles";
import {
	IFilterParamInput,
	IFilterParamSelect,
} from "../../../role_all/interfaces/iprofiles";
import { FiltersInput } from "../../../role_all/components/utils/Inputs";

export function FiltersWidget(payload: {
	userid: IFilterParamInput;
	location: IFilterParamSelect;
	agestart: IFilterParamSelect;
	ageend: IFilterParamSelect;
	growthstart: IFilterParamSelect;
	growthend: IFilterParamSelect;
	weight: IFilterParamSelect;
	signzodiac: IFilterParamSelect;
	gender: IFilterParamSelect;
	gendervapor: IFilterParamSelect;
	education: IFilterParamSelect;
	fieldofactivity: IFilterParamSelect;
	maritalstatus: IFilterParamSelect;
	children: IFilterParamSelect;
	religion: IFilterParamSelect;
	smoke: IFilterParamSelect;
	alcohol: IFilterParamSelect;
	profit: IFilterParamSelect;
	acctype: IFilterParamSelect;
}) {
	return (
		<>
			<FiltersInput headName={"userid"} filterParam={payload.userid} />

			{/* <FiltersOptionAtArr
				headName={"Локация:"}
				arrArgs={[
					{
						data: data_location,
						filterParam: { ...payload.location },
						valen: true,
					},
				]}
			/> */}
			<FiltersOptionAtArr
				headName={"Возраст:"}
				arrArgs={[
					{ data: data_age, filterParam: { ...payload.agestart } },
					{ data: data_age, filterParam: { ...payload.ageend } },
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
			<FiltersOptionAtArr
				headName={"Знак зодиака:"}
				arrArgs={[
					{
						data: data_signZodiac,
						filterParam: { ...payload.signzodiac },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Пол:"}
				arrArgs={[
					{
						data: data_gender,
						filterParam: { ...payload.gender },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Ищет:"}
				arrArgs={[
					{
						data: data_genderVapor,
						filterParam: { ...payload.gendervapor },
					},
				]}
			/>
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
						filterParam: { ...payload.fieldofactivity },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Отношения:"}
				arrArgs={[
					{
						data: data_maritalStatus,
						filterParam: { ...payload.maritalstatus },
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
			<FiltersOptionAtArr
				headName={"Курение:"}
				arrArgs={[
					{ data: data_smoke, filterParam: { ...payload.smoke } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Алкоголь:"}
				arrArgs={[
					{ data: data_alcohol, filterParam: { ...payload.alcohol } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Заработок:"}
				arrArgs={[
					{
						data: data_profit,
						filterParam: { ...payload.profit },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Тип аккаунта:"}
				arrArgs={[
					{
						data: data_acctype,
						filterParam: { ...payload.acctype },
						valen: true,
					},
				]}
			/>
		</>
	);
}
