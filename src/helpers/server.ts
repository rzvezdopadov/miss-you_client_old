import { apilinkphoto } from "../config";

export const getWayPhoto = (str: string) => (str ? apilinkphoto + str : "");
