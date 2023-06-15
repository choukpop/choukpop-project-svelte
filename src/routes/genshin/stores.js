
import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const storeSettingCharacterColumn = writable(
    browser && (localStorage.getItem("char_column") || "6")
)
// @ts-ignore
storeSettingCharacterColumn.subscribe((val) => browser && localStorage.setItem("char_column", val))
