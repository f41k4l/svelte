import { writable } from "svelte/store";

export const toast = writable({ text: "", type: "info" });
