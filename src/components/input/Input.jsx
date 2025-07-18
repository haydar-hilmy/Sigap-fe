import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// All input components are compatible with react-hook-form and Controller

const FieldInput = ({ children, variant, isError = false }) => {
    return (
        <div
            className={`${variant} flex flex-row items-center rounded-lg w-full bg-white outline outline-1 outline-[#D0D5DD] ${isError
                ? "focus-within:outline-[#ff0c0c] outline-[#fa6b6b] focus-within:shadow-[0_0_0_7px_rgba(255,0,0,0.15)]"
                : "focus-within:outline-[#0087FF] focus-within:shadow-[0_0_0_7px_rgba(74,157,236,0.15)]"
                } transition-all`}
        >
            {children}
        </div>
    );
};


export const TextInput = ({
    name,
    value,
    onChange,
    onBlur,
    placeholder = "",
    label = "",
    errorMsg = "",
    disabled = false,
    readOnly = false,
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className="block text-base font-medium mb-1" htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 text-sm rounded-xl outline-none ${readOnly || disabled ? "bg-gray-200" : "bg-white"
                        }`}
                />
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};


export const PasswordInput = ({
    name,
    value,
    onChange,
    onBlur,
    placeholder = "",
    label = "",
    errorMsg = "",
    disabled = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex flex-col">
            {label && (
                <label className="block text-base font-medium mb-1" htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <input
                    type={showPassword ? "text" : "password"}
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 text-sm rounded-xl outline-none ${disabled ? "bg-gray-200" : "bg-white"
                        }`}
                />
                <button
                    type="button"
                    onClick={togglePassword}
                    className="px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </button>
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};



export const NumberInput = ({
    name,
    value,
    onChange,
    onBlur,
    placeholder = "",
    label = "",
    errorMsg = "",
    disabled = false,
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className="block text-base font-medium mb-1" htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <input
                    type="text" // tetap text agar bisa filter manual angka
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        onChange(val);
                    }}
                    onBlur={onBlur}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 text-sm rounded-xl outline-none ${disabled ? "bg-gray-200" : "bg-white"
                        }`}
                />
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};


export const SelectInput = ({
    name,
    value,
    onChange,
    onBlur,
    label = "",
    errorMsg = "",
    options = [],
    disabled = false,
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className="block text-base font-medium mb-1" htmlFor={name}>
                    {label}
                </label>
            )}
            <FieldInput isError={!!errorMsg}>
                <select
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-white outline-none ${disabled ? "bg-gray-200" : "bg-white"
                        }`}
                >
                    <option value="">Pilih...</option>
                    {options.map((opt, idx) => (
                        <option key={idx} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </FieldInput>
            {errorMsg && (
                <small className="text-red-500 text-sm mt-1">{errorMsg}</small>
            )}
        </div>
    );
};
