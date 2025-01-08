import { Button } from "@/components/ui/Button";
import useCheckAvailability from "./useCheckAvailability";
import { Textfield } from "@/components/ui/Textfield";

const CheckAvailabilityForm = () => {
    const { handleSubmit, register, errors } = useCheckAvailability();
    return (
        <form
            onSubmit={handleSubmit}
            className=" space-y-6 max-w-[575px] mx-auto md:px-0 px-4 mt-[50px]"
        >
            <div className="space-y-2">
                <div className="flex items-center gap-4 animate-fade-up animate-delay-300">
                    <Textfield
                        className="flex-1"
                        {...register("username")}
                        type="text"
                        placeholder="username"
                    />

                    <p className="text-2xl font-bold gradient-text">
                        @nosrt.eco
                    </p>
                </div>

                {errors.username && (
                    <p className="text-[#F6543E] text-sm font-roboto-mono animate-fade-right">
                        {errors.username.message}
                    </p>
                )}
            </div>

            <Button
                className=" w-full  animate-fade-up animate-delay-700 h-14 font-medium font-roboto-mono "
                type="submit"
            >
                Check availability
            </Button>
        </form>
    );
};

export default CheckAvailabilityForm;
