const HeroSection = () => {
    return (
        <section className="  pt-[212px] pb-[289px] relative  ">
            <h1 className="gradient-text text text-center font-bold   text-[136px] uppercase max-w-[873px] mx-auto leading-[86px]  animate-fade-up ">
                Stay
                <br /> Immortal!
            </h1>
            <p className="font-roboto-mono up max-w-[503px] mx-auto text-center mt-5 text-xl">
                Endlessly enjoy freedom social with ultimate JellyFish services.
            </p>

            <div className="  -z-20 absolute -bottom-[43%] -[200px] left-1/2 -translate-x-1/2 ">
                <img
                    className="animate-fade-up    "
                    src="/svg/half-ring.svg"
                    alt="/half-ring"
                    height={700}
                    width={806}
                />
            </div>
            <img
                className="absolute inset-0 -z-10 opacity-50 bg-background left-1/2 -translate-x-1/2 
                 [mask-image:radial-gradient(300px_circle_at_center,#141B30,transparent)] 
                 "
                src="/images/jellyfish-gif.gif"
                alt="jellyfish"
            />
        </section>
    );
};

export default HeroSection;
