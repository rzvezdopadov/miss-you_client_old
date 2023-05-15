import { IComplaint, IProfile } from "../../role_all/interfaces/iprofiles";
import { ITariff } from "../../role_all/interfaces/ishop";
import { IStickerpack } from "../../role_all/interfaces/istickers";

export interface IStateBuyRating {
	enabled: boolean;
	rate: ITariff;
}

export interface IStateModalComplaint {
	enabled: boolean;
	complaint: IComplaint;
}

export interface IEnableParamState {
	enabled: boolean;
}

export interface IUserProfile {
	enabled: boolean;
	profile: IProfile;
}

export interface IStateModalReviewStickerpack {
	enabled: boolean;
	stickerpack: IStickerpack;
}
