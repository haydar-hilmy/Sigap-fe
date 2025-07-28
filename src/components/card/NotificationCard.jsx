import { CheckCircleOutlined, EditOutlined, HourglassEmptyOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import React from 'react';
import { FormatDate } from '../../utils/DateFormat';

const typeConfig = {
    success: {
        icon: <CheckCircleOutlined className="text-green-500" />,
        border: 'border-green-200 hover:border-green-400',
        bg: 'bg-green-50 hover:bg-green-100',
    },
    revision: {
        icon: <EditOutlined className="text-yellow-500" />,
        border: 'border-yellow-200 hover:border-yellow-400',
        bg: 'bg-yellow-50 hover:bg-yellow-100',
    },
    processing: {
        icon: <HourglassEmptyOutlined className="text-blue-500" />,
        border: 'border-blue-200 hover:border-blue-400',
        bg: 'bg-blue-50 hover:bg-blue-100',
    },
    default: {
        icon: <NotificationsNoneOutlined className="text-gray-400" />,
        border: 'border-gray-200 hover:border-gray-400',
        bg: 'bg-gray-50 hover:bg-gray-100',
    },
};


const NotificationCard = ({ title, time, type = 'default' }) => {
    const config = typeConfig[type] || typeConfig.default;
    const formattedTime = FormatDate(time);

    return (
        <div
            className={`flex items-center gap-4 p-4 border-l-4 rounded-md shadow-sm ${config.border} ${config.bg} transition-colors duration-100 cursor-default`}
        >
            <div className="mt-1">{config.icon}</div>
            <div className="flex flex-col gap-1">
                <p className="text-base text-gray-800 font-medium">{title}</p>
                <span className="text-xs text-gray-500">{formattedTime}</span>
            </div>
        </div>
    );
};

export default NotificationCard;