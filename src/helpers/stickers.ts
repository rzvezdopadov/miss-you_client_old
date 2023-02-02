import { apilinkstickers } from "../config";

export function getLinkSticker(link: string) {
	return `${apilinkstickers}${link}`;
}
