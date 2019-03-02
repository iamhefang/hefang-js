import {sha1} from "./sha1";
import {now} from "../datetime";

export function guid() {
    return sha1(`${Math.random()}${now().getTime()}${Math.random()}`)
}