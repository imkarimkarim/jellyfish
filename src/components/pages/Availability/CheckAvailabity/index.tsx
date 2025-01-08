import CheckAvailabilityForm from "./CheckAvailabilityForm";

const CheckAvailability = () => {
    return (
        <section>
            <h1 className="gradient-text text text-center font-bold   text-[80px] uppercase max-w-[873px] mx-auto leading-[56px]  animate-fade-up ">
                Give a better nostr id for yourself
            </h1>
            <div>
                <CheckAvailabilityForm />
            </div>
        </section>
    );
};

export default CheckAvailability;
