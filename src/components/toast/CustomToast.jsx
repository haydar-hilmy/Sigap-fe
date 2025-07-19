import { CheckCircleOutlined, ErrorOutlined, InfoOutlined, WarningOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";

export const CustomToast = ({
    message,
    type = "info",
    duration,
}) => {
    const bgColor = {
        success: "#ecfdf5",
        info: "#eff6ff",
        danger: "#fef2f2",
        warning: "#fffbeb",
    };

    const defaultDuration = type === "warning" || type === "danger" ? 2500 : 1500;
    const toastOptions = {
        autoClose: duration || defaultDuration,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: false,
        closeButton: true,
        style: {
            background: bgColor[type],
            color: "#111",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
        },
        position: "top-right",
    };


    switch (type) {
        case "success":
            toast.success(message, toastOptions);
            break;
        case "info":
            toast.info(message, toastOptions);
            break;
        case "danger":
            toast.error(message, toastOptions);
            break;
        case "warning":
            toast.warning(message, toastOptions);
            break;
        default:
            toast(message, toastOptions);
    }
};
