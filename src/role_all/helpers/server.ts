import { apilinkcaptcha, apilinkphoto, apilinksticker } from "../../config";

export const getWayPhoto = (str: string) => (str ? apilinkphoto + str : "");
export const getWaySticker = (str: string) => (str ? apilinksticker + str : "");
export const getWayCaptcha = (str: string) => (str ? apilinkcaptcha + str : "");
