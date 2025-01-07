import { writable } from "svelte/store";
// store the database in a writable store
export const users=writable([]);
// store current form data
export const formData=writable({});