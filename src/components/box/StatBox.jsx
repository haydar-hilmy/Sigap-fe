import { DescriptionOutlined } from "@mui/icons-material"

export const StatBox = ({ label = "Stats", value = 0, icon = <DescriptionOutlined />, color = "#22c55e" }) => {
    return (
        <div
        className={`flex flex-row items-center border-t-4 rounded-lg py-5 px-5 gap-4 shadow-md bg-white`}
        style={{ borderTopColor: color }}
        >
            <div className="flex-1 flex flex-col gap-2">
                <h4 className="text-base">{label}</h4>
                <h3 className="text-4xl font-bold flex-1">{value}</h3>
            </div>
            <div className="h-full">
                <div
                className="flex items-center justify-center rounded-full w-fit p-2.5"
                style={{ backgroundColor: `${color}26` }}
                >
                    {icon}
                </div>
            </div>
        </div>
    )
}
