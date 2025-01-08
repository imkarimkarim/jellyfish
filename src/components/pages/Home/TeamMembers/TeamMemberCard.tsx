import { Button } from "@/components/ui/Button";
import { TeamMembersCardProps } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamMemberCard = ({
    avatar,
    role,
    name,
    nickname,
    followLink,
}: TeamMembersCardProps) => {
    return (
        <div className="flex flex-col gap-3 justify-center align-middle items-center text-center">
            <Avatar className="w-10/12 h-auto mix-blend-luminosity">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
                <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <div>
                <div className="text-xs font-robotoMono">{role}</div>
                <div className="gradient-text">{name}</div>
            </div>
            <a href={followLink} className="font-robotoMono">
                <Button
                    className="text-xs"
                    size={"sm"}
                >{`Follow ${nickname}`}</Button>
            </a>
        </div>
    );
};

export default TeamMemberCard;
