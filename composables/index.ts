import { useState } from "#app";

export const useSplash = () => useState<boolean>("splash", () => true);
