import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar/Navbar";
import { MenuOutlined, NotificationsOutlined } from "@mui/icons-material";
import { useState } from "react";

import { Outlet, useMatches } from "react-router-dom";
import PopupContainer from "../components/container/PopUpContainer";
import NotificationCard from "../components/card/NotificationCard";

const AppLayout = () => {
    const [isShowNavbar, setIsShowNavbar] = useState(false);
    const matches = useMatches();
    const title = matches.find((m) => m.handle?.title)?.handle.title || "App";
    const [openNotification, setOpenNotification] = useState(false);

    const notifications = [
        {
            title: "Surat Anda telah disetujui oleh Kaprodi.",
            time: "2025-07-28T12:00:00",
            type: "success"
        },
        {
            title: "Revisi surat telah diterima.",
            time: "2025-07-28T10:30:00",
            type: "revision"
        },
        {
            title: "Laporan Anda sedang diproses.",
            time: "2025-07-28T10:55:00",
            type: "processing"
        },
        {
            title: "Laporan tidak valid.",
            time: "invalid-date",
            type: "default"
        },
        {
            title: "Laporan Akhir Tahun",
            time: "2025-12-31T12:00:00",
            type: "default"
        }
    ];


    return (
        <>
            <Helmet>
                <title>{title} | SIGAP TI</title>
            </Helmet>
            <div className="flex flex-row">
                <Navbar role="mhs" isShow={isShowNavbar} setIsShow={setIsShowNavbar} />
                <main className="flex-1 overflow-x-auto">
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
                                className="cursor-pointer p-2 rounded-full hover:bg-gray-200"
                                onClick={() => setOpenNotification(true)}
                            >
                                <NotificationsOutlined color="inherit" />
                            </div>
                            <img className="cursor-pointer" src="/images/hmti.webp" />
                        </div>
                    </header>
                    <div className="px-3 sm:px-4 md:px-5 py-6 overflow-x-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
            {openNotification && (
                <PopupContainer
                    closeOnOutsideClick={true}
                    showCloseButton={true}
                    onClose={() => setOpenNotification(false)}
                >
                    <div className="flex flex-col w-full gap-1 pt-5">
                        {notifications.map((notif, index) => (
                            <NotificationCard
                                key={index}
                                title={notif.title}
                                time={notif.time}
                                type={notif.type}
                            />
                        ))}
                    </div>
                </PopupContainer>
            )}
        </>
    );
};

export default AppLayout;