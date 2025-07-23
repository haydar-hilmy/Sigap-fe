import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, MoreHorizOutlined } from "@mui/icons-material";
import React, { useState } from "react";

const Table = ({ columns, data, count, controller = true }) => {
    const [pageSize, setPageSize] = useState(10); // Default 10
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(count / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = data.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePageSizeChange = (e) => {
        const newSize = Number(e.target.value);
        setPageSize(newSize);
        setCurrentPage(1); // Reset ke page 1
    };

    // Buat pagination UI
    const getPaginationNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage, "...", totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="w-full overflow-x-auto rounded-lg">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-[#B366C2]">
                    <tr>
                        {columns.map((col, idx) => (
                            <th
                                key={idx}
                                className="px-4 py-2 text-left text-white whitespace-nowrap"
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.length > 0 ? (
                        currentData.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-gray-50 odd:bg-white even:bg-gray-100">
                                {columns.map((col, cIdx) => (
                                    <td
                                        key={cIdx}
                                        className="px-4 py-4 whitespace-nowrap"
                                    >
                                        {typeof row[col.accessor] === "function"
                                            ? row[col.accessor]()
                                            : row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="text-center py-4 text-gray-500"
                            >
                                Tidak ada data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination & Dropdown */}
            {controller && (
                <div className="flex flex-col lg:flex-row mt-2 items-start lg:items-center gap-3 sticky left-0">
                    <span className="text-sm text-gray-600 flex-1 hidden sm:block">
                        Menampilkan {currentData.length} dari {count} data
                    </span>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        {/* Dropdown Page Size */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Tampilkan:</span>
                            <select
                                value={pageSize}
                                onChange={handlePageSizeChange}
                                className="border rounded px-2 py-1 text-sm"
                            >
                                {[10, 20, 50, 100, 1000].map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center space-x-2">
                            <button
                                className="px-3 py-1 border rounded hover:bg-gray-100"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                {<KeyboardArrowLeftOutlined />}
                            </button>
                            {getPaginationNumbers().map((num, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => typeof num === "number" && handlePageChange(num)}
                                    className={`px-3 py-1 border rounded ${num === currentPage
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-100"
                                        } ${num === <MoreHorizOutlined /> && "cursor-default"}`}
                                    disabled={num === <MoreHorizOutlined />}
                                >
                                    {num}
                                </button>
                            ))}
                            <button
                                className="px-3 py-1 border rounded hover:bg-gray-100"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                {<KeyboardArrowRightOutlined />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;
