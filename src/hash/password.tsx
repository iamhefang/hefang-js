import { sha1 } from "./sha1";
import { md5 } from "./md5";

export function passwordHash(password: string, salt?: string) {
	return sha1(md5(password) + sha1(password) + (salt || ""))
}

export function passwordVerify(password: string, hash: string, salt?: string) {
	return passwordHash(password, salt) === hash;
}
