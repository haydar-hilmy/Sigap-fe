import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar/Navbar";
import { MenuOutlined, NotificationsOutlined } from "@mui/icons-material";
import { useState } from "react";

import { Outlet, useMatches } from "react-router-dom";

const AppLayout = () => {
    const [isShowNavbar, setIsShowNavbar] = useState(false);
    const matches = useMatches();
    const title = matches.find((m) => m.handle?.title)?.handle.title || "App";

    return (
        <>
            <Helmet>
                <title>{title} | SIGAP TI</title>
            </Helmet>
            <div className="flex flex-row">
                <Navbar role="mhs" isShow={isShowNavbar} setIsShow={setIsShowNavbar} />
                <main className="flex-1">
                    <header className="shadow-md bg-[#eee]/70 backdrop-blur-md px-2 sm:px-4 md:px-6 py-3 flex items-center sticky top-0 z-[800]">
                        <div className="flex items-center gap-3 flex-1">
                            <div
                                onClick={() => setIsShowNavbar((prev) => !prev)}
                                className="cursor-pointer md:hidden p-2 rounded-md hover:bg-gray-200 "
                            >
                                <MenuOutlined color="inherit" />
                            </div>
                            <h1 className="text-base font-bold">{title}</h1>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <div
                                className="cursor-pointer p-2 rounded-full hover:bg-gray-200 "
                            >
                                <NotificationsOutlined color="inherit" />
                            </div>
                            <img className="cursor-pointer" src="/images/hmti.webp" />
                        </div>
                    </header>
                    <div className="px-2 sm:px-4 md:px-8 py-6 overflow-x-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
};

export default AppLayout;