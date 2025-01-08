import { TitleDescriptionT } from "@/@types/global";
import GradientIconBox from "@/components/ui/GradientIconBox";
import { linkifyText } from "@/lib/utils";
import { ReactNode } from "react";

const wordsToLink = {
    NSaaS: "https://nsass",
};

const FeaturesCard = ({
    icon,
    title,
    description,
}: { icon: ReactNode } & TitleDescriptionT) => {
    const formattedDescription = linkifyText(description, wordsToLink);

    return (
        <div className="flex flex-col gap-5 items-center text-center px-4 max-w-[330px]">
            <GradientIconBox>{icon}</GradientIconBox>
            <p className="text-[#ACCDF2] text-[32px] font-bold text-nowrap">
                {title}
            </p>
            <p
                className="text-[#80899F] text-xl font-roboto-mono leading-5"
                dangerouslySetInnerHTML={{ __html: formattedDescription }}
            ></p>
        </div>
    );
};

export default FeaturesCard;
