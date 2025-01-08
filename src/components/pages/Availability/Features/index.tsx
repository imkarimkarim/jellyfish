import SectionTitle from "@/components/ui/SectionTitle";
import { featuresData } from "./data";
import FeaturesCard from "./FeaturesCard";
import AnimateWrapper from "@/components/AnimateWrapper";

const Features = () => {
    return (
        <section className="pb-[300px]">
            <SectionTitle className="text-center">Our Features</SectionTitle>
            <div className="mt-20 gap-4 gap-y-[75px] flex flex-wrap justify-center items">
                {featuresData.map((card, key) => (
                    <AnimateWrapper once delay={0.3 * key} key={key}>
                        <FeaturesCard {...card} />
                    </AnimateWrapper>
                ))}
            </div>
        </section>
    );
};

export default Features;
