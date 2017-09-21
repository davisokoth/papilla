
import { environment } from '../environments/environment';

export const URL = environment.URL;
export const version = '0';
export const logged = false;
export let username: string;
export let lToken: string;
export let ad_user_id: number;
export let ad_role_id: number;

export const MAX_CHARS = 524288;  // the default max length per the html maxlength attribute
export const MIN_SEARCH_LENGTH = 3;
export const PAUSE = 10;
export const TEXT_SEARCHING = "Searching...";
export const TEXT_NO_RESULTS = "No results found";
export const CLEAR_TIMEOUT = 50;

export function isNil(value: any) {
    return typeof value === "undefined" || value === null;
}