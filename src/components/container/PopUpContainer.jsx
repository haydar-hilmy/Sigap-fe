import { CloseOutlined } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';

const PopupContainer = ({
    children,
    closeOnOutsideClick = true,
    showCloseButton = true,
    onClose,
}) => {
    const modalRef = useRef(null);

    // Outside click handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                closeOnOutsideClick &&
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                onClose?.();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeOnOutsideClick, onClose]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose?.();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="overflow-y-auto py-16 fixed top-0 left-0 w-screen h-screen z-[998] bg-black bg-opacity-70 flex justify-center items-start">
            <div
                ref={modalRef}
                className="relative bg-white rounded-md p-6 max-w-2xl w-11/12 sm:w-4/5 md:w-2/3 lg:w-full shadow-lg"
            >
                {showCloseButton && (
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        aria-label="Close"
                    >
                        <CloseOutlined />
                    </button>
                )}

                {/* Konten */}
                <div className="flex flex-col items-start gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PopupContainer;