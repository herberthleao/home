import { useState } from "#app";

const useSplash = () => useState<boolean>("splash", () => true);
const useMenu = () => useState<boolean>("menu", () => false);

export {
    useSplash,
    useMenu
}