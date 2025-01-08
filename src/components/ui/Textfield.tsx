import * as React from "react";

import { cn } from "@/lib/utils";

export interface ShimmerInputProps {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
}

const Textfield = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input"> & ShimmerInputProps
>(
    (
        {
            shimmerColor = "#BFE0F075",
            shimmerSize = "0.05em",
            shimmerDuration = "13s",
            borderRadius = "14px",
            background = "#A0C5F73F",
            className,
            type,
            ...props
        },
        ref,
    ) => {
        return (
            <div
                style={
                    {
                        "--spread": "120deg",
                        "--shimmer-color": shimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": background,
                    } as React.CSSProperties
                }
                className={cn(
                    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap   px-[1px] py-[1px]  [background:var(--bg)] [border-radius:var(--radius)]  ",
                    "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
                    className,
                )}
            >
                <div
                    className={cn(
                        "-z-30  ",
                        "absolute inset-0 overflow-visible [container-type:size]",
                    )}
                >
                    {/* spark */}
                    <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                        {/* spark before */}
                        <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                    </div>
                </div>
                <input
                    type={type}
                    className={cn(
                        "flex h-14 font-roboto-mono w-full  z-20 rounded-[14px] bg-[#141B30] bg-gradient-to-r from-[rgba(31,36,58,0.75)] to-(rgba[17,22,40,0.675)] to px-3 py-[18px] text-base shadow-sm transition-colors   placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 ",
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    },
);
Textfield.displayName = "Textfield";

export { Textfield };

// className={cn(
//                     "flex h-14 font-roboto-mono w-full scale-x-[99.5%] scale-y-[97%]  rounded-[14px] bg-[#141B30] bg-gradient-to-r from-[rgba(31,36,58,0.75)] to-(rgba[17,22,40,0.675)] to px-3 py-[18px] text-base shadow-sm transition-colors   placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 ",
//                     className,
//                 )}
