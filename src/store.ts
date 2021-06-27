import { writable,Writable } from 'svelte/store';

export const isMobile: Writable<Boolean> = writable(false);