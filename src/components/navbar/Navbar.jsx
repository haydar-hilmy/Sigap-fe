import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { DashboardOutlined, HistoryOutlined, LogoutOutlined, NoteAddOutlined, SettingsOutlined } from "@mui/icons-material";

const Navbar = ({
  role = "mhs",
  isShow = true,
  setIsShow = () => { },
}) => {
  const menusMahasiswa = [
    { name: "Dashboard", path: "/mhs/dashboard", icon: <DashboardOutlined /> },
    { name: "Pengaduan", path: "/mhs/pengaduan", icon: <NoteAddOutlined /> },
    { name: "Riwayat Pengaduan", path: "/mhs/riwayat", icon: <HistoryOutlined /> },
    { name: "Pengaturan", path: "/mhs/pengaturan", icon: <SettingsOutlined /> },
  ];

  const menusProdi = [
    { name: "Dashboard", path: "/prodi/dashboard", icon: <DashboardOutlined /> },
    { name: "Pengaduan", path: "/prodi/pengaduan", icon: <NoteAddOutlined /> },
    { name: "Riwayat Pengaduan", path: "/prodi/riwayat", icon: <HistoryOutlined /> },
    { name: "Pengaturan", path: "/prodi/pengaturan", icon: <SettingsOutlined /> },
  ];

  const menus = role === "prodi" ? menusProdi : menusMahasiswa;

  const location = useLocation();
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(".active-link");
    if (activeLink) {
      const { offsetTop, offsetHeight, offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({
        top: offsetTop + "px",
        height: offsetHeight + "px",
        width: offsetWidth + "px",
        left: offsetLeft + "px",
      });
    }
  }, [location]);

  const asideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isShow &&
        asideRef.current &&
        !asideRef.current.contains(event.target)
      ) {
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShow, setIsShow]);

  return (
    <aside
      ref={asideRef}
      className={`
    ${isShow ? "translate-x-0" : "-translate-x-full"}
    fixed
    z-[900]
    md:translate-x-0
    md:sticky
    top-0
    duration-200
    w-64
    h-screen
    bg-[#B366C2]
    text-white
    flex
    flex-col
    justify-between
    `}>
      <div>
        <h1 className="text-3xl font-bold p-6">SIGAP TI</h1>

        <div className="px-6 mb-4">
          <button className="bg-[#E3B0F8] text-white font-semibold px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2">
            Buat Laporan
            <span className="text-xl ml-2 bg-[#AA60C8] w-8 h-8 rounded-md flex items-center justify-center">
              <span className="font-bold pb-1"> + </span>
            </span>
          </button>
        </div>

        <nav className="relative p-6 space-y-3" ref={navRef}>
          {/* Indicator Highlight */}
          <div
            className="absolute bg-white rounded-full transition-all duration-300 z-0"
            style={{
              ...indicatorStyle,
              position: "absolute",
            }}
          ></div>

          {/* Menu Items */}
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `relative z-10 flex text-base items-center gap-2 px-4 py-2 rounded-full font-medium transition duration-200 hover:opacity-70 ${isActive ? "active-link text-[#B366C2]" : "text-white"
                }`
              }
            >
              {menu.icon && <span>{menu.icon}</span>}
              <p>{menu.name}</p>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-6">
        <NavLink to={"/logout"} className="flex items-center gap-2 px-4 py-2 rounded-full font-medium hover:opacity-70">
          <LogoutOutlined />
          Log Out
        </NavLink>
      </div>
    </aside>
  );
};

export default Navbar;
