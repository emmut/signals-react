import { computed, signal } from "@preact/signals-react";

export const signalCount = signal(0);
export const doubleSignalCount = computed(() => signalCount.value * 2);
