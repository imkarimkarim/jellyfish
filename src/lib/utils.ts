import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const linkifyText = (
    text: string,
    wordsToLink: { [key: string]: string },
) => {
    const regex = new RegExp(
        `\\b(${Object.keys(wordsToLink).join("|")})\\b`,
        "g",
    );
    return text.replace(regex, match => {
        const url = wordsToLink[match];
        return `<a href="${url}" class="text-[#ACCDF2] underline font-roboto-mono">${match}</a>`;
    });
};
