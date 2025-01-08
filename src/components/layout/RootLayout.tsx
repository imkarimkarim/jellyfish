import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
    const { pathname } = useLocation();
    return (
        <div className="relative">
            <div className=" -z-50 absolute top-0 left-1/2 -translate-x-1/2 animate-fade">
                <img src="/svg/top-light.svg" alt="top-light" />
            </div>
            {pathname !== "/" && (
                <div className=" -z-50 absolute -top-[200px] left-1/2 -translate-x-1/2 ">
                    <img
                        className="animate-fade-up"
                        src="/svg/half-ring.svg"
                        alt="/half-ring"
                        height={894}
                        width={806}
                    />
                </div>
            )}
            <div
                className="fixed h-screen inset-0 w-full z-20"
                style={{
                    backgroundImage:
                        "linear-gradient(269.54deg, #05060F 0.39%, rgba(5, 6, 15, 0) 35.21%, rgba(5, 6, 15, 0) 64.87%, #05060F 99.6%)",
                }}
            ></div>
            <div className="relative z-50">
                <main className="container mx-auto ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;
