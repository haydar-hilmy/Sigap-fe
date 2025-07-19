import CircularProgress from "@mui/material/CircularProgress";

export const Button = ({
    name = "button",
    isLoading = false,
    isDisabled = false,
    onClick,
    variant = "primary",
    type = "button",
    children = "Button",
}) => {
    const baseClass = `
    ${variant}
    w-full flex px-5 items-center justify-center transition text-white font-semibold py-2 rounded-xl
`;

    const variants = {
        primary:
            "bg-[#B66EDC] hover:bg-[#9151b4] active:bg-[#8145a1] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B66EDC]",
        success:
            "bg-green-600 hover:bg-green-800 active:bg-green-900 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600",
        info:
            "bg-blue-400 hover:bg-blue-600 active:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400",
        danger:
            "bg-red-600 hover:bg-red-800 active:bg-red-900 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600",
        warning:
            "bg-yellow-500 hover:bg-yellow-700 active:bg-yellow-800 text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
        ghost:
            "bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 text-gray-800",
    };

    const classes = `${baseClass} ${variants[variant] || variants.primary} ${isDisabled ? "disabled:opacity-70 cursor-not-allowed" : ""
        }`;

    return (
        <button
            name={name}
            id={name}
            className={classes}
            onClick={onClick}
            disabled={isLoading || isDisabled}
            type={type}
        >
            {isLoading ? (
                <CircularProgress size={20} color="inherit" />
            ) : (
                children
            )}
        </button>
    );
};