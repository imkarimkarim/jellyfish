import SectionTitle from "@/components/ui/SectionTitle";
import { teamMembersData } from "./data";
import TeamMemberCard from "./TeamMemberCard";
import AnimateWrapper from "@/components/AnimateWrapper";

const TeamMembersSection = () => {
    return (
        <section className="space-y-[84px] mt-48 w-full">
            <SectionTitle className="">Meet the JellyFish team</SectionTitle>
            <AnimateWrapper delay={0.4}>
                <div className="flex justify-between gap-4 ">
                    {teamMembersData.map((service, key) => (
                        <TeamMemberCard {...service} key={key} />
                    ))}
                </div>
            </AnimateWrapper>
        </section>
    );
};

export default TeamMembersSection;
